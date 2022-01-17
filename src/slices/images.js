import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
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

export function fetchImages() {
  return async (dispatch) => {
    dispatch(getImages())

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await res.json()

      dispatch(getImagesSuccess(data))
    } catch (err) {
      dispatch(getImagesFailure())
    }
  }
}
