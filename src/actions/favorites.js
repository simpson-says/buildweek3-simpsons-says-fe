import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';

export const SELECT_FAVORITE = 'SELECT_FAVORITE'
export const SELECT_FAVORITE_SUCCESS = 'SELECT_FAVORITE_SUCCESS'
export const SELECT_FAVORITE_FAILURE = 'SELECT_FAVORITE_FAILURE'
export const SAVE_FAVORITE = 'SAVE_FAVORITE'
export const SAVE_FAVORITE_SUCCESS = "SAVE_FAVORITE_SUCCESS"
export const SAVE_FAVORITE_FAILURE = "SAVE_FAVORITE_FAILURE"
export const SHOW_FAVORITE = 'SHOW_FAVORITE'
export const LIKED = 'LIKED'

export const favoriteQuotes = ( update ) => dispatch => {
    // console.log(update)
    dispatch({ type: SELECT_FAVORITE })
    dispatch({ type: LIKED, payload: update })
    // return axios
    //     .get(`${process.env.REACT_APP_BACKEND_URL}Users/search/${update.id}`)
    //     .then(res => {
    //         // console.log("HELLO", res)
    //         dispatch({ type: SELECT_FAVORITE_SUCCESS, payload: res.data })
    //     })
    //     .catch(err => {
    //         dispatch({ type: SELECT_FAVORITE_FAILURE })
    //         console.log(err)
    //     })
}


// export const saveFavorites = () => dispatch => {
//     // return { type: SAVE_FAVORITE, payload: favorites }
//     dispatch({ type: SAVE_FAVORITE })
//     return axiosWithAuth()
//         .post(`https://simpson-says-backend.herokuapp.com/users/favorites`, {quoteID: Number(141351)})
//         .then(res => {
//             console.log("HELLLOOOOOOOO", res)
//             dispatch({ type: SAVE_FAVORITE_SUCCESS, payload: res.data })
//         })
//         .catch(err => {
//             dispatch({ type: SAVE_FAVORITE_FAILURE })
//             console.log(err)
//         })
// }

export const saveFavorites = () => dispatch => {
    // return { type: SAVE_FAVORITE, payload: favorites }
    dispatch({ type: SAVE_FAVORITE });
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        "content-type": "application/json",
        Authorization: token
      }
    };
    return axios
      .post(
        `https://simpson-says-backend.herokuapp.com/users/favorites`,
        {
          quoteID: 50
        },
        headers
      )
      .then(res => {
        dispatch({ type: SAVE_FAVORITE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SAVE_FAVORITE_FAILURE });
        console.log(err);
      });
  };