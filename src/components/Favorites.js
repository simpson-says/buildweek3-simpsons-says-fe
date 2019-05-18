import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import starEmpty from '../img/starEmpty.svg'
import starFull from '../img/starFull.svg'
import { saveFavorites } from "../actions/favorites";
import Loader from "react-loader-spinner";

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            quoteList: [],
            fetching: false
        }
    }

    componentWillMount = () => {
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
        this.setState({
          fetching: !this.state.fetching
        })
        return axios
            .get(`https://simpson-says-backend.herokuapp.com/users/favorites`, headers)
            .then(res => {
              
                this.setState({
                    quoteList: res.data,
                    fetching: !this.state.fetching
                })
            })
            .catch(err => {
              console.log(err)
              this.setState({
                fetching: !this.state.fetching
              })
            })
    }

    


  render() {
    // console.log(this.state.quoteList)
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
      
    const displayTest = () => {
      if (localStorage.getItem("token") && this.state.quoteList.length === 0 && this.state.fetching === false) {
        return <div className="genQuote">There are no favorites to display</div>
      } else if (localStorage.getItem("token")) {
        return null
      } else{ 
        return <div className="genQuote">Please Login to see favorites</div>
      }
    }
      

    return (
      <div style={container}>
      {displayTest()}
      <>
      {/* {this.state.fetching ?  <Loader type="Puff" color="#fed817" height={160} width={160} /> :
    } */}

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
        </>
      </div>
    )    
  }
}

const mapStateToProps = ({ savedQuotes }) => ({
    savedQuotes
})


export default connect(mapStateToProps, {saveFavorites})(Favorites)