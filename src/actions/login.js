import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}api/login`, creds)
        .then(res => {
            // console.log(res.data)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS })
            // console.log(res)
        })
        .catch(err => {
            // console.log(err)
            dispatch({ type: LOGIN_FAILURE })
        })
}