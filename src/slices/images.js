import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  query: 'sunsets',
  loading: false,
  hasErrors: false,
  images: [],
}

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
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

export const { getImages, getImagesSuccess, getImagesFailure } =
  imagesSlice.actions

export const imagesSelector = (state) => state.images

export default imagesSlice.reducer

export function fetchImages(query) {
  return async (dispatch) => {
    dispatch(getImages())

    try {
      const res = await fetch(`https://api.openverse.engineering/v1/images/?q=${query}&page_size=16&page=1`)
      const data = await res.json()

      dispatch(getImagesSuccess(data.results))
    } catch (err) {
      dispatch(getImagesFailure())
    }
  }
}
