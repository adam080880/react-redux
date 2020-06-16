import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducers from './reducers' //get index.js

export default createStore(
  rootReducers,
  applyMiddleware(
    promiseMiddleware,
    logger
  )
)
