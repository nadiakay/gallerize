import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  query: '',
  page: 1,
  totalPages: 1,
  images: [],
  loading: false,
  hasErrors: false,
}

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload
    },
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setTotalPages: (state, { payload }) => {
      state.totalPages = payload
    },
    getImages: (state) => {
      state.loading = true
    },
    getImagesSuccess: (state, { payload }) => {
      state.images = payload
      state.loading = false
      state.hasErrors = false
    },
    getImagesFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const {
  setQuery,
  setPage,
  setTotalPages,
  getImages,
  getImagesSuccess,
  getImagesFailure,
} = imagesSlice.actions

export const imagesSelector = (state) => state.images

export default imagesSlice.reducer

export function fetchImages(query, page, source) {
  return async (dispatch) => {
    let url
    switch (source) {
      case 'openverse':
        if (!query) query = 'sunsets'
        url = `https://api.openverse.engineering/v1/images/?q=${query}&page=${page}`
        break
      default:
        url = `https://jsonplaceholder.typicode.com/photos`
    }
    dispatch(getImages())

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)

      if (source === 'openverse') {
        dispatch(getImagesSuccess(data.results))
        dispatch(setTotalPages(data.page_count))
      } else {
        const lessData = data.slice(0, 20)
        dispatch(getImagesSuccess(lessData))
        dispatch(setQuery(''))
      }
    } catch (err) {
      dispatch(getImagesFailure())
    }
  }
}
