import { combineReducers } from 'redux'

import imageReducer from './image'
import imagesReducer from './images'
import sourceReducer from './source'

const rootReducer = combineReducers({
  image: imageReducer,
  images: imagesReducer,
  source: sourceReducer,
})

export default rootReducer
