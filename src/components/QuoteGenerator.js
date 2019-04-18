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
    return (
      <div>
        <form>
            <select 
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
              <button onClick={this.quoteRetrieval} >Generate Quote</button>
          </form>

          {this.state.quotes.map(eachQuote => {
           return( <div>
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