import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LoginLogout extends Component {

    componentDidMount() {
        console.log('helo')
    }
  render() {
    return (
      <div>
        {localStorage.getItem('token') ? 
                <Link className="link" to='/login'>Log Out</Link> :
                <>
                <Link className="link" to="/register">
                Register
              </Link>
              <Link className="link" to="/login">
                Log In
              </Link></>
              }

      </div>
    )
  }
}
