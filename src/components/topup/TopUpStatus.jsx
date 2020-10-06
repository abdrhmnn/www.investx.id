import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";

import logoWhite from "../../images/logo-white.svg";
import paymentImage from "../../images/paymentimage.svg";

class TopUpStatus extends Component {
    render() {
        return (
            <div className="topup-status">
                <img src={logoWhite} alt="logo-white" />
                <br />
                <br />

                <img src={paymentImage} alt="" />
                <br />

                <h3 className="payment-status-title">Menunggu Pembayaran</h3>
                <p className="payment-status-detail">
                    Transaksi dengan No Invoice I12rr telah berhasil diproses.
                </p>
                <p className="payment-status-detail">
                    Silahkan Lakukan Pembayaran
                </p>
                <br />

                <Button className="but-blue">KEMBALI KE PINJAMAN</Button>
            </div>
        );
    }
}

export default TopUpStatus;
