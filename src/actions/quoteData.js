import axios from "axios";

import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_QUOTES_START = "FETCH_QUOTES_START";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE";

export const getData = searchValue => dispatch => {
  console.log(searchValue);
  const token = localStorage.getItem("token");
//   const headers = {
//     headers: ,
//   };
//   console.log(headers);
  dispatch({ type: FETCH_QUOTES_START });
  axios
    .get(
      `https://simpson-says.herokuapp.com/api/search`,
      {headers:{
        "content-type": "application/json",
        'Authorization': token},
      data:{search:searchValue}}
    )
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data /*.data*/ });
    })
    .catch(err => {
      // console.log(err.response)
      dispatch({ type: FETCH_QUOTES_FAILURE, payload: err.response });
    });
};
export const deleteData = () => dispatch => {
    console.log(`Test`);
  dispatch({ type: FETCH_QUOTES_SUCCESS, payload: [] });
};
