import axios from 'axios'

import axiosWithAuth from '../utils/axiosWithAuth'


export const FETCH_QUOTES_START = 'FETCH_QUOTES_START'
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS'
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_QUOTES_START });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: FETCH_QUOTES_FAILURE, payload: err.response })
        })
}