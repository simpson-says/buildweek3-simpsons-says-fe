import React, { Component } from 'react'


export default class LoginDetails extends Component {

    gotoSearch = e => {
        e.preventDefault()
        this.props.history.push('/')
    }

    gotoFavorites = e => {
        e.preventDefault();
        this.props.history.push('/favorites')
    }
    
    logout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/login')
    }
    
    login = e => {
        e.preventDefault();
        this.props.history.push('/login')
    }



    render() {
        return (
            <div className="loginStatus">
                {localStorage.getItem('token') ? 
                <div className="form-content" >
                    <h1>Login Success!</h1>
                    <h3>Click <span className="linkForLogin" onClick={this.gotoSearch}>here</span> to search</h3>
                    <h3>Click <span className="linkForLogin" onClick={this.gotoSearch}>here</span> to view your favorites</h3>
                    <h3>Click <span className="linkForLogin" onClick={this.logout}>here</span> to logout</h3>
                </div>
                : 
                <div>
                    <h1>Login failure</h1>
                    <h3>Click <span className="linkForLogin" onClick={this.login} >here</span> to try again</h3> 
                </div>}
            </div>
  )
}
}
