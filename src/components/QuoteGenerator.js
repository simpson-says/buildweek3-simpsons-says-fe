import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRandomQuotes } from '../actions/randomQuote'
import axios from 'axios'

class QuoteGenerator extends Component {
  state = {
    character: '',
    quotes: [],
    name: 'homer'
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      ...this.state.character,
      [e.target.name]: e.target.value
    })
  }


  quoteRetrieval = event => {
    event.preventDefault();
    axios
      .post(`https://simpson-says-backend.herokuapp.com/users/generate`, { genChar: this.state.name })
      .then(res =>{ 
        this.setState({
          quotes: res.data
        })
        console.log(res)
      })
  }

  render() {
    const quote = {
      width: '60%',
      border: '1px solid black',
      borderRadius: '5px',
      boxShadow: '5px 5px 5px #abcdf1',
      textAlign: 'center',
      margin: '16px auto'
  }

  let capitalize = (s) => {
    if ( typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase + s.slice(1)
  }
  

    return (
      <div className="signupContainer">
        <form>
          <div className="form-content">

            <select 
              className="registerInput"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}>
              <option value="homer">Homer</option>
              <option value="marge">Marge</option>
              <option value="bart">Bart</option>
              <option value="lisa">Lisa</option>
              <option value="moe">Moe</option>
              <option value="grampa">Grampa</option>
              <option value="skinner">Skinner</option>

              </select>
              
              <button className="button" onClick={this.quoteRetrieval} >Generate Quote</button>
              </div>
          </form>

          {this.state.quotes.map(eachQuote => {
           return( <div style={quote}>
            <p><strong>Character: </strong>{this.state.name}</p>
            <p><strong>Quote: </strong>{eachQuote.quote}</p>
            </div>)
    })}
      </div>
    )
  }
}

const mapStateToProps = ({ }) => {

}


export default connect(mapStateToProps, { QuoteGenerator })(QuoteGenerator) 