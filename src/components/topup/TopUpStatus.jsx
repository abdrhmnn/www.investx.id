import React, { Component } from "react";
import { Button } from "@material-ui/core";

import logoWhite from "../../images/logo-white.svg";
import paymentImage from "../../images/paymentimage.svg";
import { Link } from "react-router-dom";

class TopUpStatus extends Component {
  render() {
    const butBlue = {
      width: "197px",
      height: "36px",
      fontSize: "14px",
      textTransform: "uppercase",
      color: "#ffffff",
      background: "#01579b",
      borderRadius: "24px",
      border: "none",
      outline: "none",
    };
    return (
      <div className="topup-status">
        <img class="logo-white" src={logoWhite} alt="logo-white" />

        <img
          class="payment-illustration"
          src={paymentImage}
          alt="payment-illustration"
        />

        <h3 className="payment-status-title">Menunggu Pembayaran</h3>
        <div className="payment-status-detail">
          <p>Transaksi dengan No Invoice I12rr telah berhasil diproses.</p>
          <p>Silahkan Lakukan Pembayaran</p>
        </div>

        <Link to="my-wallet">
          <Button className="but-blue" style={butBlue}>
            KEMBALI KE PINJAMAN
          </Button>
        </Link>
      </div>
    );
  }
}

export default TopUpStatus;
