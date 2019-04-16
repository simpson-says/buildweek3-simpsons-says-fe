import axios from 'axios'



// axios post required for registry

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS' 
export const REGISTER_FAILURE = 'REGISTER_FAILURE' 

export const register = userInfo => dispatch => {
    dispatch({ type: REGISTER_START })
    return axios
        .post('http://localhost:5000/api/', userInfo)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            console.log(res)
        })
        .catch(err => console.log(err))
}