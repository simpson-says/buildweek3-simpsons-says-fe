import axios from 'axios'

export const SELECT_FAVORITE = 'SELECT_FAVORITE'
export const SAVE_FAVORITE = 'SAVE_FAVORITE'
export const SHOW_FAVORITE = 'SHOW_FAVORITE'

export const favoriteQuotes = favoriteSelect => dispatch => {
    dispatch({ type: SELECT_FAVORITE })
    return axios
        .get('URL HERE', favoriteSelect)
        .then(res => {
            console.log(res)

        })
        .catch(err => console.log(err))
}