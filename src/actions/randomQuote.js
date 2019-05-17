import axios from 'axios'


export const FETCH_RANDOM_QUOTES_START = 'FETCH_RANDOM_QUOTES_START'
export const FETCH_RANDOM_QUOTES_SUCCESS = "FETCH_RANDOM_QUOTES_SUCCESS"
export const FETCH_RANDOM_QUOTES_FAILURE = 'FETCH_RANDOM_QUOTES_FAILURE'


export const getRandomQuotes = () => dispatch => {
    dispatch({ type: FETCH_RANDOM_QUOTES_START })
    axios
        .get(`${process.env.REACT_APP_BACKEND_URL}users/generate`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_RANDOM_QUOTES_START, payload: res.data })
        })
        .catch(err => console.log(err))
}