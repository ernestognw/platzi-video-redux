import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// function logger({ getState, dispatch }) {
//   return (next) => {
//     return (action) => {
//         console.log('Vamos a enviar esta acción', action)
//         const value = next(action)
//         console.log('este es mi nuevo estado', getState().toJS())
//         return value
//     }
//   }
// }

const logger_ = ({ getState, dispatch }) => next => action => {
  console.log('Vamos a enviar esta acción', action)
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const homeContainer = document.getElementById('home-container')

render(
<Provider store={store}>
  <Home />
</Provider>
, homeContainer);

