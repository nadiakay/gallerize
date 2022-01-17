import { combineReducers } from 'redux'

import imagesReducer from './images'

const rootReducer = combineReducers({
  images: imagesReducer,
})

export default rootReducer
