import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Button } from "@material-ui/core";
import walleticon from "../../images/profile/walleticon.svg";

import PaymentMethod from "../payment/PaymentMethod";
import CurrencyInput from 'react-currency-input-field';

class withDraw extends Component {
  state = {
    toggleMethods: false,
  };

  
  setToggleMethods = () => {
    this.setState({
      toggleMethods: !this.state.toggleMethods,
    });
  };

  render() {
    return (
      <div className="all-forms-style">
        <div className="bg">
          <div className="bg-round"></div>
        </div>
        <Link onClick={() => this.props.history.goBack()}>
          <div className="back-button">
            <img src={arrowback} alt="" />
          </div>
        </Link>
        <div className="logo-invest">
          <img src={logo} alt="" />
        </div>

        <p className="title">PILIH BANK</p>
        
        <div className="row box-form-title">
          <div className="">
            <img src={walleticon} alt="wallet" style={{height: "29px", width: "30px", marginRight: "5px"}} />
            {" Saldo Anda"}
          </div>
          <div style={{marginLeft:"450px", maxWidth:"1000px"}}>
            {" Rp 15.000.000"}
          </div>
        </div>

        <div className="box-form-data">
          <div className="title-alt">Nominal Withdraw</div>
          <div className="input-border-underline">
            {/* <input onChange={this.numberFormat} type="number" name="username"/> */}
            <CurrencyInput
              id="input-example"
              name="input-name"
              defaultValue={""}
              decimalsLimit={2}
              onValueChange={(value, name) => console.log(value, name)}
            />
          </div>
        </div>

        <p className="box-form-title">Rekening Tujuan</p>
        <div className="payment-methods box-form-data">
          <PaymentMethod />
        </div>

        <div className="foot-data-diri">
          <p className="agreement"></p>
          <Link to="/withdraw-otp">
            <Button type="submit" form="datadiri">
              LANJUTKAN
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withDraw;
