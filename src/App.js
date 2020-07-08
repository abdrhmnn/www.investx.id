import React, { Component } from 'react';
import x from './assets/img/bg/x.svg'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
       
      </Router>
    );
  }
}

export default App;