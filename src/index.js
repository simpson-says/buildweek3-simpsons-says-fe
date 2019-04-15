import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
// import rootReducer from './reducers'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import axiosWithAuth from './actions/axiosWithAuth'



const customMiddleware = store => next => action => {
    // if ( action.type === LOGIN_SUCCESS ) {
    //     localStorage.setItem('userToken', action.payload.token)
    // }
    // next(action);
}

const secondMiddleware = store => next => action => {
    // if ( action.type === FETCH_QUOTE_SUCCESS ) {
    //     localStorage.setItem('Fetch Success!', action.payload.token)
    // }
    // next(action)
}

const store = createStore(
    rootReducer, applyMiddleware(thunk, logger, customMiddleware, secondMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
