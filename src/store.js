import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import bookReducer from './bookReducer'

export const store = createStore(bookReducer, composeWithDevTools())
