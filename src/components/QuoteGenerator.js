import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRandomQuotes } from '../actions/randomQuote'

class QuoteGenerator extends Component {
  state = {
    character: ''
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      ...this.state.character,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
            <input 
              type="text"
              name="name"
              placeholder="Character Name"
              value={this.state.character}
              onChange={this.handleChange}
              />
              <button>Generate Quote</button>
          </form>
      </div>
    )
  }
}

const mapStateToProps = ({ }) => {

}


export default connect(mapStateToProps, { QuoteGenerator })(QuoteGenerator) 