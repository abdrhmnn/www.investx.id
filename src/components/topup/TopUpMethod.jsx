import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Button, Fab } from "@material-ui/core";

import PaymentMethod from "../payment/PaymentMethod";

class TopUpMethod extends Component {
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
      <div className="all-forms-style topup-method">
        <div className="bg">
          <div className="bg-round"></div>
        </div>
        <Link onClick={() => this.props.history.goBack()}>
          <Fab className="back-button">
            <img src={arrowback} alt="" />
          </Fab>
        </Link>
        <div className="logo-invest">
          <img src={logo} alt="" />
        </div>
        <p className="title">Top Up</p>

        <div className="box-form-data">
          <div className="title-alt">Jumlah Nominal</div>
          <div className="input-border-underline">
            <input type="number" name="username" />
          </div>
        </div>

        <p className="box-form-title">Pilih Metode Pembayaran</p>
        <div className="payment-methods box-form-data">
          <PaymentMethod />
        </div>

        <p className="box-form-title">Ringkasan Pembayaran</p>
        <div className="payment-detail box-form-data">
          <div className="d-flex justify-content-between">
            <p className="name">Harga</p>
            <p className="amount">1.000.000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="name">Biaya Admin</p>
            <p className="amount">+1.000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="name">Total Pembayaran</p>
            <p className="amount h4">1,001.000</p>
          </div>
        </div>

        <div className="foot-data-diri">
          <div className="agreement"></div>
          <Link to="topup-detail">
            <Button type="submit" form="datadiri">
              BAYAR SEKARANG
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default TopUpMethod;
