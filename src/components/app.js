import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Articles from "./articles";

const App = () => (
  <Router>
      <div>
          <div className="app">
              <img src={logo} className="logo rotate"/>
              <h1>Welcome to React</h1>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/articles">Articles</Link>
              <Route path="/home" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/articles" component={Articles}/>
          </div>
      </div>
    </Router>
);

export default App;
