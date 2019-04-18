import React, { Component } from 'react'
import { connect } from 'react-redux'


class Favorites extends Component {


  render() {
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
        {/* {this.props.savedQuotes.map(eachQuote => {
            return (<div style={quote}>
                <p><strong>Character:</strong> {eachQuote.character}</p>
                <p><strong>Quote:</strong> {eachQuote.quote}</p>
                {/* <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p> */}
            {/* </div> */}
        {/* // )})} */} 
      </div>
    )
  }
}

const mapStateToProps = ({ savedQuotes }) => ({
    savedQuotes
})


export default connect(mapStateToProps, {})(Favorites)