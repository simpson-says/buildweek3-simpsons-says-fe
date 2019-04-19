import axios from 'axios'



// axios post required for registry

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS' 
export const REGISTER_FAILURE = 'REGISTER_FAILURE' 

export const register = userInfo => dispatch => {
    dispatch({ type: REGISTER_START })
    return axios
        .post(`https://simpson-says.herokuapp.com/api/register`, userInfo)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            // console.log(res.data)
            dispatch({ type: REGISTER_SUCCESS })
        })
        .catch(err => {
            // console.log(err)
            dispatch({ type: REGISTER_FAILURE })
        })
}


