import React, { Component } from 'react';

import logo from "../../images/logo.svg";
import paymentImage from "../../images/paymentimage.svg"

class StatusTopUp extends Component {
    render() {
        return (
            <div className="topup-status">
                <img src={logo} alt="logo" />
                <br /><br />

                <img src={paymentImage} alt="" />
                <br />

                <h3 className="payment-status-title">Menunggu Pembayaran</h3>
                <p className="payment-status-detail">Transaksi dengan No Invoice I12rr telah berhasil diproses.</p>
                <p className="payment-status-detail">Silahkan Lakukan Pembayaran</p>
                <br />

                <button className="but-blue">KEMBALI KE PINJAMAN</button>
            </div>
        );
    }
}

export default StatusTopUp;
