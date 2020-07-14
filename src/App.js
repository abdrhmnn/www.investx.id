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
import Register from './components/auth/SignUp';

import Footer from './components/shared/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          {/* <Route path='/footer' component={Footer}/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;