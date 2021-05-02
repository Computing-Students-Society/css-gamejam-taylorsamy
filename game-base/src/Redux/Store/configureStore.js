import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from './../Middleware/monitorReducer'
import loggerMiddleware from './../Middleware/logger'
import RootReducer from './../Reducers/RootReducer'
import ThemeReducer from './../Reducers/ThemeReducer'
import UserReducer from './../Reducers/UserReducer'
import InventoryReducer from './../Reducers/InventoryReducer'


export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const reducers = combineReducers({
	  RootReducer,
    ThemeReducer,
    UserReducer,
    InventoryReducer
  })

  const store = createStore(reducers, preloadedState, composedEnhancers)

  return store
}