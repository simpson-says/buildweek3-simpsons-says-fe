import axios from 'axios'

import axiosWithAuth from '../utils/axiosWithAuth'


export const FETCH_QUOTES_START = 'FETCH_QUOTES_START'
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS'
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_QUOTES_START });
    axiosWithAuth()
        .post(`${process.env.REACT_APP_BACKEND_URL}users/search`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data /*.data*/ })
        })
        .catch(err => {
            // console.log(err.response)
            dispatch({ type: FETCH_QUOTES_FAILURE, payload: err.response })
        })
}