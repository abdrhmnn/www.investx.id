import React, { Component } from "react";
import "sweetalert2/src/sweetalert2.scss";
import "./styles/App.scss";
// toast css 
import 'react-toastify/dist/ReactToastify.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import kuki from "./helpers/kuki";

import Home from "./components/home/Home.jsx";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Term from "./components/auth/Term";
import SelectForm from "./components/auth/SelectForm";
import AboutUs from "./components/About/AboutUs";
import HowItWorks from "./components/how/HowItWorks";
import emptPage from "./components/shared/emptPage";
import DataDiri from "./components/investorForms/DataDiri";
import Pendidikan from "./components/investorForms/Pendidikan";
import Dokumen from "./components/investorForms/Dokumen";
import Bank from "./components/investorForms/Bank";
import Preference from "./components/investorForms/Preference";


import InfoPerusahaan from "./components/startUpForms/InfoPerusahaan";
import InfoFinansial from "./components/startUpForms/InfoFinansial";
import InfoNonFinansial from "./components/startUpForms/InfoNonFinansial";
import Media from "./components/startUpForms/Media";
import Syarat from "./components/startUpForms/Syarat";
import CompanyList from "./components/product/CompanyList";
import TopUp from "./components/topup/TopUp";
// import TopUpDetail from "./components/topup/TopUpDetail";
// import TopUpStatus from "./components/topup/TopUpStatus";

import Wallet from "./components/withDraw/Wallet";
import withDraw from "./components/withDraw/withDraw";
import withDrawOtp from "./components/withDraw/withDrawOtp";
import withDrawInvoice from "./components/withDraw/withDrawInvoice";
import editNominal from "./components/withDraw/editNominal";
import CompanyDetail from "./components/product/CompanyDetail";

// import FormBank from "./components/withDraw/FormBank";
import Invest from "./components/invest/Invest";
import Profile from "./components/profile/Profile";
import Payment from "./components/payment/Payment";
import PaymentStatus from "./components/payment/PaymentStatus";
import Invoice from "./components/invest/Invoice";
import Cart from "./components/cart/Cart";
import Contact from "./components/ContactUs/Contact";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import TopUpPayment from "./components/topup/TopUpPayment";
import ScrollToTop from "./components/shared/ScrollToTop";
import BusinessEdit from "./components/profile/businessMenu/BusinessEdit";
import Otp from "./components/auth/Otp";


const PrivatRoute = ({ component: Component, ...rest }) => {
  const isAuth = kuki.get("auth");
  const isToken = kuki.get("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && isToken ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                // from: props.location
              },
            }}
          />
        )
      }
    />
  );
};

const RedirectRegister = ({ component: Component, ...rest }) => {
  const isAuth = kuki.get("auth");
  const isToken = kuki.get("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && isToken ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: {
                // from: props.location
              },
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/send-to-email" component={ForgotPassword} />
          <Route path="/term" component={Term} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/how" component={HowItWorks} />
          <Route path="/verify-otp" component={Otp} />

          <Route exact path="/forget-password/:token" component={ResetPassword} />
          <Route exact path="/email-verify/:code" component={SelectForm} />
          <RedirectRegister exact path="/investor-form-data-diri" component={DataDiri}/>
          <Route exact path="/investor-form-pendidikan-pekerjaan" component={Pendidikan}/>
          <RedirectRegister exact path="/investor-form-dokumen" component={Dokumen}/>
          <Route exact path="/investor-form-bank" component={Bank} />
          <Route exact path="/investor-form-preference" component={Preference}/>

          <Route exact path="/startup-form-data-diri" component={DataDiri}/>
          <Route exact path="/startup-form-dokumen" component={Dokumen}/>
          <Route exact path="/startup-form-informasi-perusahaan" component={InfoPerusahaan}/>
          <Route exact path="/startup-form-informasi-finansial" component={InfoFinansial}/>
          <Route exact path="/startup-form-informasi-nonfinansial" component={InfoNonFinansial}/>
          <Route exact path="/startup-form-media" component={Media} />
          <Route exact path="/startup-form-syarat" component={Syarat} />

          <PrivatRoute exact path="/cart" component={Cart} />
          
          <Route exact path="/company-list" component={CompanyList} />
          <Route exact path="/company-list/:ordering" component={CompanyList} />
          <Route exact path="/company-list/detail/:id" component={CompanyDetail}/>
          <Route exact path="/invoice/:idTransaction" component={Invoice}/>
          {/* //redirect  */}
          <PrivatRoute exact path="/company-list/detail/:id/invest" component={Invest}/>

          <Route exact path="/topup" component={TopUp} />
          <Route exact path="/topup/detail/:invoiceNumber" component={TopUpPayment} />
          {/* <Route exact path="/topup-status" component={TopUpStatus} /> */}

          <Route exact path="/payment" component={Payment} />
          <Route exact path="/payment-status" component={PaymentStatus} />

          <Route exact path="/my-wallet" component={Wallet} />
          <Route exact path="/withdraw" component={withDraw} />
          <Route exact path="/withdraw-otp" component={withDrawOtp} />
          <Route exact path="/invoice" component={withDrawInvoice} />
          <Route exact path="/editNominal" component={editNominal} />
          {/* <Route exact path="/tambah-bank" component={FormBank} /> */}

          <PrivatRoute exact path="/profile" component={Profile} />
          <PrivatRoute exact path="/profile/company/:id/edit" component={BusinessEdit} />

          <Route exact path="*" component={emptPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
