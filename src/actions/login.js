import axios from 'axios'

import { saveFavoriteList, SAVE_FAVORITE_LIST } from './faveAction'
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
            console.log(res.data.favorites)
            saveFavoriteList(res.data.favorites)
            dispatch({ type: SAVE_FAVORITE_LIST, payload: res.data.favorites })

            // console.log(res)
        })
        .catch(err => {
            // console.log(err)
            dispatch({ type: LOGIN_FAILURE })
        })
}