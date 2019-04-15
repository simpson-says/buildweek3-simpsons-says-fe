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

const initialState = {
    fetchingQuotes: false,
    quotes: [],
    loggingIn: false,
    savingQuotes: false,
    error: null

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
                loggingIn: false
            };
        case FETCH_QUOTES_START:
            return {
                ...state,
                error: null,
                fetchingQuotes: true,
                errorStatusCode: null
            }
        case FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                fetchingQuotes: false,
                error: null,
                quotes: action.payload
            }
        case FETCH_QUOTES_FAILURE:
            return {
                ...state,
                fetchingQuotes: false,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status
            }
        default: 
            return state;
    }
}