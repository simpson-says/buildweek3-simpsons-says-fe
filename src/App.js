import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";
import Clouds from "./components/Clouds";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Register from "./components/Register";
import Login from "./components/Login";
import LoginDetails from './components/LoginDetails'
import simpsonSaysLogo from "./img/simpsonSaysLogo.png";

class App extends Component {
  parseJwt =(token)=> {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    console.log(JSON.parse(window.atob(base64)));
    return ;
};

  render() {
    return (
      <div className="App">
     
        <Clouds />
        <Router>
          <div className="navbar">
            <div className="third">
              <img className="navimg" src={simpsonSaysLogo} alt="logo" />
            </div>

            <div className="third">
              <Link className="link" to="/">
                Search for a Quote
              </Link>

              <Link className="link" to="generator">
                Quote Generator
              </Link>
              <Link className="link" to="/favorites">
                Favorites
              </Link>
            </div>
            <div className="third">
              {localStorage.getItem('token') ? 
                <Link className="link" to='/login'>Log Out</Link> :
                <>
                <Link className="link" to="/register">
                Register
              </Link>
              <Link className="link" to="/login">
                Log In
              </Link></>}
             
{/* this was under className="Third" and ended after log In Link-    {localStorage.getItem("token") ?<div>User: {this.parseJwt(localStorage.getItem("token"))}</div>: ( <>
</>)} */}

            </div>
          </div>
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/favorites" component={Favorites} />{" "}
          {/* this is going to have addFavorite as part of it with a confirmation screen - get request for faves, put or post for add */}
          <Route exact path="/" component={Search} />
          <Route path="/generator" component={QuoteGenerator} />
          <Route path='/loginstatus' component={LoginDetails} />
        </Router>
      </div>
    );
  }
}

export default App;
