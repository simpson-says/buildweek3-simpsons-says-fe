import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/quoteData'

class Search extends Component {
    state = {
        quotes: [],
        search: ''
    }

    componentDidMount() {
        this.props.getData()
    }

    search = e => {
        this.setState({
            search: e.target.value
        })
    }

  render() {
      console.log(this.props.quotes)

      let characterSearchResults = this.props.quotes.filter((eachQuote) => {
          return eachQuote.character.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      })
    return (
      <div>
        <ul>
            {characterSearchResults.map((currentQuote) => {
                return <div>
                    <li>{currentQuote.character}</li>
                    <li>{currentQuote.quote}</li>
                </div>
            })}
        </ul>
        <input 
            name="name"
            type="text"
            placeholder="Search for a Quote"
            value={this.state.search}
            onChange={this.search}
        />
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

