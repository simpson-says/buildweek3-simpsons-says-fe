import axios from 'axios'

import { saveFavoriteList } from './faveAction'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
        .post(`https://simpson-says-backend.herokuapp.com/api/login`, creds)
        .then(res => {
            // console.log(res.data)
            localStorage.setItem('token', res.data.token)
            saveFavoriteList(res.data.favorites)
            dispatch({ type: LOGIN_SUCCESS })

            // console.log(res)
        })
        .catch(err => {
            // console.log(err)
            dispatch({ type: LOGIN_FAILURE })
        })
}