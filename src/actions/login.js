import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
        .post('https://simpson-says-backend.herokuapp.com/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            console.log(res)
        })
        .catch(err => console.log(err))
}