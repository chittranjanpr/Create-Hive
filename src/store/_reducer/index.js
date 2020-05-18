import { combineReducers } from 'redux';

const rootReducer = {
    loginDetails: {'chittu': '1234'}
}

const configureStore = combineReducers({rootReducer});

export default configureStore;