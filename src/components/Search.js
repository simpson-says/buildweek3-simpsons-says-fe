import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/quoteData'
import { favoriteQuotes, saveFavorites } from '../actions/favorites'
import axiosWithAuth from '../utils/axiosWithAuth'
import simpsonSaysLogo from '../img/simpsonSaysLogo.png'
import '../App.css'
import {
    FETCH_QUOTES_START,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE
} from '../actions/quoteData'
import axios from 'axios'
import starEmpty from '../img/starEmpty.svg'
import starFull from '../img/starFull.svg'



class Search extends Component {
    state = {
        quotes: [],
        search: '',
        throttleTimer: null
    }

    componentDidMount() {
        // this.props.getData()
    }

    search = e => {
        clearTimeout(this.state.throttleTimer);
        const newTimer = setTimeout(() => {
            if ( this.state.search.length < 3 ) {
                return
            }
            // console.log('test')
            this.props.getData()
        }, 1000)
        this.setState({
            search: e.target.value,
            throttleTimer: newTimer
        })
    }

    selectFavorite = selected => {
        // console.log(id)
        const update = { ...selected, liked: !selected.liked }
        // console.log(copy)
        this.props.favoriteQuotes(update)

    }

    saveSelectedFaves = id => {
        this.props.saveFavorites(id)
    }

  render() {
    //   console.log(this.props.quotes)
    const container = {
        width: '60%',
        margin: '16px auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const input = {
        textAlign: 'center',
        boxShadow: '5px 5px 5px #abcdf1',
        borderRadius: '5px'
    }

    const title = {
        textAlign: 'center',
        textDecoration: 'underline'
    }

    const quote = {
        width: '60%',
        border: '1px solid black',
        borderRadius: '5px',
        boxShadow: '5px 5px 5px #abcdf1',
        textAlign: 'center',
        margin: '16px auto'
    }

    const p = {
        textAlign: 'center'
    }

    let blankStar = <img  src={starEmpty} alt="Not Selected" />
    let clickedStar = <img src={starFull} alt="Selected" />

    console.log(this.props.quotes)

    let characterSearchResultsByQuote = this.props.quotes.filter((eachQuote) => {
        return eachQuote.quote.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })

    let displayQuotesByQuote = characterSearchResultsByQuote.map((currentQuote) => {
        return (
        <div onClick={this.selectFavorite} style={quote}>
            <p><strong>Character: </strong>{currentQuote.character}</p>
            <p><strong>Quote: </strong>{currentQuote.quote}</p>
            { this.props.isClicked ? clickedStar : blankStar }
        </div>
        )
    })

    
    return (
      <div style={container}>
        <img className="searchLogo" src={simpsonSaysLogo} alt="logo" />
          <p style={title}>Enter a Keyword to Search</p>
          <input 
            style={input}
            name="name"
            type="text"
            placeholder="Search for a Quote"
            value={this.state.search}
            onChange={this.search}
        />
        <p style={p}>Select your Favorite Quotes Below</p>
        <button onClick={this.saveSelectedFaves} className="registerButton">Save Your Chosen Favorites</button>
        
    {this.state.search.length >= 3 ? characterSearchResultsByQuote.map((currentQuote) => {
        return (
        <div key={currentQuote.id} onClick={() => this.selectFavorite(currentQuote)} style={quote}>
            <p><strong>Character: </strong>{currentQuote.character}</p>
            <p><strong>Quote: </strong>{currentQuote.quote}</p>
            { currentQuote.liked ? clickedStar : blankStar }
        </div>
        )
    }) : null}
        
      </div>
    )
  }
}


const mapStateToProps = ({ isLoggedIn, error, quotes, isClicked }) => ({
    error,
    isLoggedIn,
    quotes,
    isClicked
})

export default connect(mapStateToProps, { getData, favoriteQuotes, saveFavorites })(Search)

