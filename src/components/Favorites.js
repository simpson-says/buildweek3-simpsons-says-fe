import React, { Component } from 'react'
import { connect } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios'
import starEmpty from '../img/starEmpty.svg'
import starFull from '../img/starFull.svg'
import { favoriteQuotes, saveFavorites } from "../actions/favorites";

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            quoteList: []
        }
    }

    componentDidMount = () => {
        this.displayQuotes()
    }

    displayQuotes = () => {
        const token = localStorage.getItem("token");
        const headers = {
        headers: {
            "content-type": "application/json",
            Authorization: token
        }
        };
        return axios
            .get(`https://simpson-says-backend.herokuapp.com/users/favorites`, headers)
            .then(res => {
                this.setState({
                    quoteList: res.data
                })
                console.log(res)
            })
            .catch(err => console.log(err))
    }


  render() {
    let blankStar = <img className="star" src={starEmpty} alt="Not Selected" />;
    let clickedStar = <img className="star" src={starFull} alt="Selected" />;
    const container = {
        width: '60%',
        margin: '16px auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    
    const quote = {
        width: '60%',
        border: '1px solid black',
        borderRadius: '5px',
        boxShadow: '5px 5px 5px #abcdf1',
        textAlign: 'center',
        margin: '16px auto'
    }
      
    return (
      <div style={container}>
      {localStorage.getItem("token") ? null: (<div className="genQuote">Please Login to see favorites</div>)}
        {this.state.quoteList.map((currentQuote) => {
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
        )
    })}
      </div>
    )    
  }
}

const mapStateToProps = ({ savedQuotes }) => ({
    savedQuotes
})


export default connect(mapStateToProps, {saveFavorites})(Favorites)