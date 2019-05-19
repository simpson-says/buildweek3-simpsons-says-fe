import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from "react-router-dom";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";
import Clouds from "./components/Clouds";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Register from "./components/Register";
import Login from "./components/Login";
import LoginDetails from './components/LoginDetails'
import RegisterDetails from './components/RegisterDetails'
import LoginLogout from './components/LoginLogout'
import simpsonSaysLogo from "./img/simpsonSaysLogo.png";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn: false,
       checkIfLoggedIn: false,
       count: 0
    }
  }
  
  parseJwt =(token)=> {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    console.log(JSON.parse(window.atob(base64)));
    return ;
};

    
     
    logOutRedirect = e => {
      e.preventDefault();
      localStorage.removeItem('token')
      this.props.history.push('/login')
    }

  render() {
    

    return (
      <div className="App">
     
        <Clouds />
      
          <div className="navbar">
            <div className="third">
              <img className="navimg" src={simpsonSaysLogo} alt="logo" />
            </div>

            <div className="third">
              <NavLink className="link" activeClassName="selectedPage" exact to="/">
                Search for a Quote
              </NavLink>

              <NavLink className="link" activeClassName="selectedPage" to="/generator">
                Quote Generator
              </NavLink>
              <NavLink className="link" activeClassName="selectedPage" to="/favorites">
                Favorites
              </NavLink>
            </div>
            <div className="third">
              {localStorage.getItem('token') ? 
              <NavLink onClick={this.logOutRedirect} className="link" activeClassName="selectedPage" to='/login'>Log Out</NavLink> :
              <>
                <NavLink className="link" activeClassName="selectedPage" to="/register">
                Register
                </NavLink>
                <NavLink className="link" activeClassName="selectedPage" to="/login">
                Log In
                </NavLink>
                </>
              }
            
             


            </div>
          </div>
          <Route exact path="/register" render={(props) => <Register {...props} check={this.toggleLoginCheck} logLink={this.logLink} />} />
          <Route exact path="/login" component={Login} />
          <Route path="/favorites" component={Favorites} logLink={this.logLink} />
          <Route exact path="/" component={Search} />
          <Route path="/generator" component={QuoteGenerator} />
          <Route path='/loginstatus' component={LoginDetails} />
          <Route path='/registerstatus' component={RegisterDetails} />
        
      </div>
    );
  }
}

export default withRouter(App);
