import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { store } from './store/_helper/store';

const App = () =>(
    <Provider store={store}>
        <Routes />
    </Provider>
    // <Routes />
)

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)