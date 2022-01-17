import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  source: 'jsonplaceholder',
}

const sourceSlice = createSlice({
  name: 'source',
  initialState,
  reducers: {
    setSource: (state, { payload }) => {
      state.source = payload
    },
  },
})

export const { setSource } = sourceSlice.actions

export const sourceSelector = (state) => state.source

export default sourceSlice.reducer
