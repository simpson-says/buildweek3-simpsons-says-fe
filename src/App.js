import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
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

    // componentDidUpdate(prevState) {
    //   if (prevState.checkIfLoggedIn !== !this.state.checkIfLoggedIn) {
    //     return console.log('hi')
    //   }
    // }


    // logLink = () => {

    //   return localStorage.getItem('token') ? this.setState({ loggedIn: true }) : null
    //         }

    // toggleLoginCheck = e => {
    //   e.preventDefault()
    //   this.setState({
    //     checkIfLoggedIn: !this.state.checkIfLoggedIn
    //   })
    // }
     
    logOutRedirect = e => {
      e.preventDefault();
      localStorage.removeItem('token')
      this.props.history.push('/login')
    }

  render() {
    // {this.logLink()}

    // console.log(this.state.loggedIn)
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
              
              <Link className="link" to="/register">
              Register
              </Link>
              <Link className="link" to="/login">
              Log In
              </Link>
              <Link onClick={this.logOutRedirect} className="link" to='/login'>Log Out</Link> 
            
             
{/* this was under className="Third" and ended after log In Link-    {localStorage.getItem("token") ?<div>User: {this.parseJwt(localStorage.getItem("token"))}</div>: ( <>
</>)} */}

            </div>
          </div>
          <Route exact path="/register" render={(props) => <Register {...props} check={this.toggleLoginCheck} logLink={this.logLink} />} />
          <Route exact path="/login" component={Login} />
          <Route path="/favorites" component={Favorites} logLink={this.logLink} />{" "}
          {/* this is going to have addFavorite as part of it with a confirmation screen - get request for faves, put or post for add */}
          <Route exact path="/" component={Search} />
          <Route path="/generator" component={QuoteGenerator} />
          <Route path='/loginstatus' component={LoginDetails} />
          <Route path='/registerstatus' component={RegisterDetails} />
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
