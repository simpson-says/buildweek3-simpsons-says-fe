import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/register'
import { Link } from 'react-router-dom'

class Register extends Component {
    state = {
        newCredentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            newCredentials: {
                ...this.state.newCredentials,
                [e.target.name]: e.target.value
            }
        })
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state.newCredentials).then(() => {
            this.props.history.push('/favorites')
        })
    }

  render() {
    return (
      <div>
          <h1>Welcome to Simpsons Says</h1>
          <h2>Please Register to Continue</h2>
          <p>If you have already registered, please <Link exact to='/login'>Log In</Link></p>
        <form>
            <input 
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.newCredentials.username}
                onChange={this.handleChange}
            />
            <input 
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.newCredentials.password}
                onChange={this.handleChange}
            />
            <button onClick={this.register}>Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ isRegistering, error }) => ({
    isRegistering,
    error
})



export default connect(mapStateToProps, { register })(Register)