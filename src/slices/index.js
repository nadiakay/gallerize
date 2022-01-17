import { combineReducers } from 'redux'

import imageReducer from './image'
import imagesReducer from './images'

const rootReducer = combineReducers({
  images: imagesReducer,
  image: imageReducer,
})

export default rootReducer
