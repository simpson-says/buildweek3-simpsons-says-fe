import {
    FETCH_QUOTES_START,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE
} from '../actions/quoteData'

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/login'

import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/register'


const initialState = {
    fetchingQuotes: false,
    quotes: [],
    loggingIn: false,
    savingQuotes: false,
    error: null,
    firstName: '',
    lastName: '',
    isRegistering: false,
    isLoggedIn: false,
    savedQuotes: []
}

export const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_START: 
            return {
                ...state,
                error: null,
                fetchingQuotes: false,
                loggingIn: true
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                error: null,
                loggingIn: false,
                isLoggedIn: true
            };
        case FETCH_QUOTES_START:
            return {
                ...state,
                error: null,
                fetchingQuotes: true,
                // isLoggedIn: true,
                errorStatusCode: null
            }
        case FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                fetchingQuotes: false,
                error: null,
                // isLoggedIn: true,
                quotes: action.payload
            }
        case FETCH_QUOTES_FAILURE:
            return {
                ...state,
                fetchingQuotes: false,
                error: action.payload.data.error,
                // isLoggedIn: true,
                errorStatusCode: action.payload.status
            }
        case REGISTER_START:
            return {}
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        default: 
            return state;
    }
}