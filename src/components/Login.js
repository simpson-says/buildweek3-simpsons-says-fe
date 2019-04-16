import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login'

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/favorites')
        })
    }

  render() {
    return (
      <div>
        <form>
            <input 
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
            />
            <input 
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
            />
            <button onClick={this.login}>Log In</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
    error,
    loggingIn
})

export default connect(mapStateToProps, { login })(Login)