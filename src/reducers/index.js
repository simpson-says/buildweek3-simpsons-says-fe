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

import {
    SELECT_FAVORITE,
    SELECT_FAVORITE_SUCCESS,
    SELECT_FAVORITE_FAILURE,
    SAVE_FAVORITE,
    SHOW_FAVORITE,
    LIKED,
    SAVE_FAVORITE_SUCCESS,
    SAVE_FAVORITE_FAILURE
} from '../actions/favorites'

import {
    FETCH_RANDOM_QUOTES_START,
    FETCH_RANDOM_QUOTES_SUCCESS,
    FETCH_RANDOM_QUOTES_FAILURE
} from '../actions/randomQuote'

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
    savedQuotes: [],
    isClicked: false,
    cat: false,
    savingFavorite: false
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
        case LOGIN_FAILURE:
            return {
                ...state,
                error: null,
                loggingIn: false,
                isLoggedIn: false
            }
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
            return {
                ...state,
                isLoggedIn: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case SELECT_FAVORITE_SUCCESS: 
            return {
                ...state,
                // isClicked: !state.isClicked
            }
        case LIKED: 
            const result = state.quotes.map(eachQuote => {
                if ( eachQuote.quote_id === action.payload.quote_id ) {
                    return action.payload
                } else {
                    return eachQuote
                }
            })
            return {
                ...state,
                // isClicked: !state.isClicked,
                quotes: result
            }
        case SAVE_FAVORITE:
            return {
                ...state,
                savingFavorite: false, 
                // savedQuotes: state.quotes.filter(clickedItems => ( clickedItems.liked ))
            }
        case SAVE_FAVORITE_SUCCESS: 
            return {
                ...state,
                savedQuotes: state.quotes.filter(clickedItems => ( clickedItems.liked )),
                savingFavorite: true
            }
        case SAVE_FAVORITE_FAILURE:
            return {}
        default: 
            return state;
    }
}