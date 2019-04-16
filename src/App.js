import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import QuoteGenerator from './components/QuoteGenerator';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Register from './components/Register';
import Login from './components/Login';
import simpsonSaysLogo from './img/simpsonSaysLogo.png'


class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
          {/* <h2>Hi</h2> */}
        </div>
        <div className="navbar">
          <img className="navimg" src={simpsonSaysLogo} alt="logo" />
          <nav className='navlinks'>
            <Link className="link" to='/register'>Register</Link>
            <Link className="link" to='/login'>Log In</Link>
            <Link className="link" to='/favorites'>Favorites</Link>
            <Link className="link" to='/search'>Search for a Quote</Link>
            <Link className="link" to='generator'>Quote Generator</Link>
          </nav>
        </div>
        <Route exact path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/favorites' component={Favorites} /> {/* this is going to have addFavorite as part of it with a confirmation screen - get request for faves, put or post for add */}
        <Route path='/search' component={Search} />
        <Route path='/generator' component={QuoteGenerator} />
      </Router> 
    );
  }
}

export default App;
