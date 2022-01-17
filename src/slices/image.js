import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  image: {},
}

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    getImage: (state) => {
      state.loading = true
    },
    getImageSuccess: (state, { payload }) => {
      state.image = payload
      state.loading = false
      state.hasErrors = false
    },
    getImageFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getImage, getImageSuccess, getImageFailure } = imageSlice.actions
export const imageSelector = (state) => state.image
export default imageSlice.reducer

export function fetchImage(id) {
  return async (dispatch) => {
    dispatch(getImage())

    try {
      const response = await fetch(
        `https://api.openverse.engineering/v1/images/${id}`
      )
      const data = await response.json()

      dispatch(getImageSuccess(data))
    } catch (error) {
      dispatch(getImageFailure())
    }
  }
}
