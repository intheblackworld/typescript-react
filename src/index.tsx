import * as React from 'react'
import { render } from 'react-dom'
import Hello from './containers/hello'
import { combineReducers } from 'redux-immutable' // pass immutable state, but happend the interface with immutable Obj problem
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import userReducer from './store/reducers/user'

const store = createStore(
  combineReducers({
    user: userReducer
  }),
  composeWithDevTools(
    applyMiddleware(...[])
  )
)

render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('app')
)