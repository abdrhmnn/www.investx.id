import React, { Component } from 'react';
import x from './assets/img/bg/x.svg'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
      </Router>
    );
  }
}

export default App;