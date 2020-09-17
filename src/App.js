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

import Term from './components/auth/Term';
import SelectForm from './components/auth/SelectForm';
import AboutUs from './components/About/AboutUs';
import HowItWorks from './components/how/HowItWorks';
import emptPage from './components/shared/emptPage';
import Otp from './components/auth/Otp';
import DataDiri from './components/investorForms/DataDiri';
import Pendidikan from './components/investorForms/Pendidikan';
import Dokumen from './components/investorForms/Dokumen';
import Bank from './components/investorForms/Bank';
import Preference from './components/investorForms/Preference';
import StartUpDataDiri from './components/startUpForms/StartUpDataDiri';
import StartUpDokumen from './components/startUpForms/StartUpDokumen';
import InfoPerusahaan from './components/startUpForms/InfoPerusahaan';
import InfoFinansial from './components/startUpForms/InfoFinansial';
import InfoNonFinansial from './components/startUpForms/InfoNonFinansial';
import Media from './components/startUpForms/Media';
import Syarat from './components/startUpForms/Syarat';
import CompanyList from './components/product/CompanyList';
import MethodTopUp from './components/topup/MethodTopUp';
import DetailTransaction from './components/topup/DetailTransaction';
import StatusTopUp from './components/topup/StatusTopUp';

import Wallet from './components/withDraw/Wallet';
import withDraw from './components/withDraw/withDraw';
import withDrawOtp from './components/withDraw/withDrawOtp';
import withDrawInvoice from './components/withDraw/withDrawInvoice';
import editNominal from './components/withDraw/editNominal';
import CompanyDetail from './components/product/CompanyDetail';

import formBank from './components/withDraw/formBank';


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
          <Route exact path='/investor-form-data-diri' component={DataDiri}/>
          <Route exact path='/investor-form-pendidikan-pekerjaan' component={Pendidikan}/>
          <Route exact path='/investor-form-dokumen' component={Dokumen}/>
          <Route exact path='/investor-form-bank' component={Bank}/>
          <Route exact path='/investor-form-preference' component={Preference}/>

          <Route exact path='/startup-form-data-diri' component={StartUpDataDiri}/>
          <Route exact path='/startup-form-dokumen' component={StartUpDokumen}/>
          <Route exact path='/startup-form-informasi-perusahaan' component={InfoPerusahaan}/>
          <Route exact path='/startup-form-informasi-finansial' component={InfoFinansial}/>
          <Route exact path='/startup-form-informasi-nonfinansial' component={InfoNonFinansial}/>
          <Route exact path='/startup-form-media' component={Media}/>
          <Route exact path='/startup-form-syarat' component={Syarat}/>

          <Route exact path='/company-list' component={CompanyList}/>
          <Route exact path='/company-list/detail/:id' component={CompanyDetail}/>

          <Route exact path='/topup-method' component={MethodTopUp}/>
          <Route exact path='/topup-detail' component={DetailTransaction}/>
          <Route exact path='/topup-status' component={StatusTopUp}/>

          <Route exact path='/my-wallet' component={Wallet}/>
          <Route exact path='/withdraw' component={withDraw}/>
          <Route exact path='/withdraw-otp' component={withDrawOtp}/>
          <Route exact path='/invoice' component={withDrawInvoice}/>
          <Route exact path='/editNominal' component={editNominal}/>
          <Route exact path='/tambah-bank' component={formBank}/>

          
          <Route exact path='*' component={emptPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;