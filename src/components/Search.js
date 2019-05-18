import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, deleteData } from "../actions/quoteData";
import { favoriteQuotes, saveFavorites } from "../actions/favorites";
import Loader from "react-loader-spinner";
import { dispatch } from "redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import simpsonSaysLogo from "../img/simpsonSaysLogo.png";
import "../App.css";
import {
  FETCH_QUOTES_START,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE
} from "../actions/quoteData";
import axios from "axios";
import starEmpty from "../img/starEmpty.svg";
import starFull from "../img/starFull.svg";

class Search extends Component {
  state = {
    quotes: [],
    search: "",
    throttleTimer: null
  };

 

  search = e => {
    // clearTimeout(this.state.throttleTimer);
    // const newTimer = setTimeout(() => {
    //     if ( this.state.search.length < 3 ) {
    //         return
    //     }
    //     // console.log('test')
    //     this.props.getData()
    // }, 1000)
    console.log(e.target.value);
    if (e.target.value === "") {
      this.props.deleteData();
    }
    this.setState({
      search: e.target.value
      // throttleTimer: newTimer
    });
  };

  submitSearch = e => {
    e.preventDefault();
    const searchValue = { searchValue: this.state.search };
    this.props.getData(searchValue);
    // this.setState({
    //     search: ''
    // })
  };

  selectFavorite = selected => {
    // console.log(id)
    console.log(selected);
    const update = { ...selected, liked: !selected.liked };
    // console.log(copy)
    this.props.favoriteQuotes(update);
  };

  

  render() {
    
    const container = {
      width: "60%",
      margin: "16px auto",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    };

    const title = {
      textAlign: "center",
      textDecoration: "underline"
    };

    const p = {
      textAlign: "center"
    };

    let blankStar = <img className="star" src={starEmpty} alt="Not Selected" />;
    let clickedStar = <img src={starFull} alt="Selected" />;

   

    // let characterSearchResultsByQuote =   this.props.quotes
    // // .filter(eachQuote => {
    // //   return (
    // //     eachQuote.spoken_words
    // //       .toLowerCase()
    // //       .indexOf(this.state.search.toLowerCase()) !== -1
    // //   );
    // });

   
    return (
      <div className="signupContainer">
        <form onSubmit={this.submitSearch}>
          <div className="form-content">
            <p className="searchP">Find your favorite quote!</p>
            <input
            autoComplete="off"
              name="name"
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.search}
            />
          </div>
        </form>
        
        <br />
        {this.props.fetchingQuotes ? (
          <Loader type="Puff" color="#fed817" height={160} width={160} />
        ) : (
          <>
            {this.props.quotes.map(currentQuote => {
              return (
                <div key={currentQuote.id} className="quoteBox">
                  <p className="charName">
                    <strong>Character: </strong><br/>
                    {currentQuote.raw_character_text}
                  </p>
                  <div className="infoSection">
                    
                      <strong>Episode: </strong>
                      {currentQuote.episode_title}
                    
                    <div className="lowerText">
                      <p>
                        <strong>Season: </strong>
                        {currentQuote.season}
                      </p>
                      <p>
                        <strong>Episode: </strong>
                        {currentQuote.number_in_season}
                      </p>
                    </div>
                  </div>

                  <p className="quoteText">
                    <strong>Quote: </strong><br/>
                    <div>{currentQuote.spoken_words}</div>
                  </p>

                  <div
                    className="favoriteButton"
                    onClick={() =>
                      this.props.saveFavorites(currentQuote.quote_id)
                    }
                  >
                    {localStorage.getItem("token")?this.props.savedQuotes.includes(currentQuote.quote_id)
                      ? clickedStar
                      : blankStar :null}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  isLoggedIn,
  error,
  quotes,
  isClicked,
  savedQuotes,
  fetchingQuotes
}) => ({
  error,
  isLoggedIn,
  quotes,
  isClicked,
  savedQuotes,
  fetchingQuotes
});

export default connect(
  mapStateToProps,
  { getData, favoriteQuotes, saveFavorites, deleteData }
)(Search);
