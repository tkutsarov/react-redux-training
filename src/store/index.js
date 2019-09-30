import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import defaultStore from './defaultState';
import rootReducer from '../reducers';

/**
 * Configuration of the Redux store.
 *
 */
// Including Redux dev tools for the browser.
const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Including the middleware.
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);


// Configure store with the data from the default state and local storage. Inject middleware.
let store = createStore(rootReducer, defaultStore, enhancer);

export default store;
