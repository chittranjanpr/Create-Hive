import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducer/index';
import configureStore from '../_reducer/index';

const loggerMiddleware = createLogger();


export const store = createStore(
    configureStore,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);