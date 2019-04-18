import React, { Component } from 'react'
import { connect } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios'
import starEmpty from '../img/starEmpty.svg'
import starFull from '../img/starFull.svg'


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
    let blankStar = <img src={starEmpty} alt="Not Selected" />
    let clickedStar = <img src={starFull} alt="Selected" />
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
        {this.state.quoteList.map((currentQuote) => {
        return (
        <div key={currentQuote.id} style={quote}>
            <p><strong>Character: </strong>{currentQuote.raw_character_text}</p>
            <p><strong>Quote: </strong>{currentQuote.spoken_words}</p>
            <p><strong>Episode: </strong>{currentQuote.episode_title}</p>
            <p><strong>Season: </strong>{currentQuote.season}</p>
            <p><strong>Episode Number in Season: </strong>{currentQuote.number_in_season}</p>
            <div onClick={() => this.props.saveFavorites(currentQuote.quote_id)}>
            { this.props.savedQuotes.includes(currentQuote.quote_id) ? clickedStar : blankStar }
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


export default connect(mapStateToProps, {})(Favorites)