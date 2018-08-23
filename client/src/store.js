import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const initialState = {};

const middleware = [thunk];

// Allows Redux to connect to chrome dev tools extension.
// Putting it in a variable fixes IE and Edge issues.
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
  devTools
);

export default store;
