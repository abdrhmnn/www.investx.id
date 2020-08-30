import React, { Component } from 'react';
import './styles/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Login from './components/auth/Login';
import Register from './components/auth/SignUp';

import Footer from './components/shared/Footer';
import Ojk from './components/shared/Ojk';
import Term from './components/auth/Term';
import SelectForm from './components/auth/SelectForm';
import AboutUs from './components/About/AboutUs';
import HowItWorks from './components/how/HowItWorks';
import Otp from './components/auth/Otp';
import DataDiri from './components/investorForms/DataDiri';
import Pendidikan from './components/investorForms/Pendidikan';
import Dokumen from './components/investorForms/Dokumen';
import Bank from './components/investorForms/Bank';
import Preference from './components/investorForms/Preference';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Register}/>
          <Route path='/term' component={Term}/>
          <Route path='/otp' component={Otp}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/how' component={HowItWorks}/>

          <Route exact path='/select-form' component={SelectForm}/>
          <Route path='/select-form/data-diri' component={DataDiri}/>
          <Route path='/select-form/pendidikan-pekerjaan' component={Pendidikan}/>
          <Route path='/select-form/dokumen' component={Dokumen}/>
          <Route path='/select-form/bank' component={Bank}/>
          <Route path='/select-form/preference' component={Preference}/>

          <Route path='/footer' component={Footer}/>
          <Route path='/ojk' component={Ojk}/>
        </Switch>
      </Router>
    );
  }
}

export default App;