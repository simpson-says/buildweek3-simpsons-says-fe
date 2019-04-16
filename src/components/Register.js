import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/register'
import { Link } from 'react-router-dom'

class Register extends Component {
    state = {
        newCredentials: {
            firstName: '',
            lastName: '',
            userEmail: '',
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
                name="name"
                placeholder="First Name"
                value={this.state.newCredentials.firstName}
                onChange={this.handleChange}
            />
            <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={this.state.newCredentials.lastName}
                onChange={this.handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.newCredentials.email}
                onChange={this.handleChange}
            />
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
            <button>Sign Up</button>
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