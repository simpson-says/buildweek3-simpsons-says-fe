import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/quoteData'
import axiosWithAuth from '../utils/axiosWithAuth'
import simpsonSaysLogo from '../img/simpsonSaysLogo.png'
import '../App.css'
import {
    FETCH_QUOTES_START,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE
} from '../actions/quoteData'


import axios from 'axios'

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
            console.log('test')
            this.props.getData()
        }, 1000)
        this.setState({
            search: e.target.value,
            throttleTimer: newTimer
        })
    }

  render() {
      console.log(this.props.quotes)
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

    //   let characterSearchResultsByName = this.props.quotes.filter((eachQuote) => {
    //       return eachQuote.character.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    //   })

    //   let displayQuotesByCharacter = characterSearchResultsByName.map((currentQuote) => {
    //     return <div style={quote}>
    //         <p><strong>Character:</strong> {currentQuote.character}</p>
    //         <p><strong>Quote: </strong>{currentQuote.quote}</p>
    //     </div>
    // })

    let characterSearchResultsByQuote = this.props.quotes.filter((eachQuote) => {
        return eachQuote.quote.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })

    let displayQuotesByQuote = characterSearchResultsByQuote.map((currentQuote) => {
        return (
        <div style={quote}>
            <p><strong>Character: </strong>{currentQuote.character}</p>
            <p><strong>Quote: </strong>{currentQuote.quote}</p>
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
        <button className="registerButton">Save Your Chosen Favorites</button>
        <ul>
    {/* {this.state.search.length >= 3 ? displayQuotesByCharacter : null} */}
    {this.state.search.length >= 3 ? displayQuotesByQuote : null}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({ isLoggedIn, error, quotes }) => ({
    error,
    isLoggedIn,
    quotes
})

export default connect(mapStateToProps, { getData })(Search)

