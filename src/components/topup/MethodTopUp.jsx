import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";

class MethodTopUp extends Component {
    render() {
        return (
            <div className="all-forms-style">
                <div className="bg">
                    <div className="bg-round"></div>
                </div>
                <Link to="/select-form/">
                    <div className="back-button">
                        <img src={arrowback} alt="" />
                    </div>
                </Link>
                <div className="logo-invest">
                    <img src={logo} alt="" />
                </div>
                <p className="title">Top Up</p>

                <div className="box-form-data">
                    <div className="title-alt">Jumlah Nominal</div>
                    <div className="input-border-underline">
                        <input
                            type="number"
                            name="username"
                            // disabled
                            // ref={ i => this.username = i}
                            id=""
                        />
                    </div>
                </div>

                <p className="box-form-title">Pilih Metode Pembayaran</p>
                <div className="box-form-data">

                    <div class="d-flex justify-content-between">
                        <div className="title-alt">Transfer Rekening</div>
                        <p className="more-transfer-method">
                            Lihat Lainnya
                        </p>
                    </div>
                    <div className="radio-bank checked">
                        <input
                            type="radio"
                            name="bank"
                            // disabled
                            // ref={ i => this.username = i}
                            id=""
                        />

                        <img src={logo} alt="bca" />
                    </div>
                </div>

                <p className="box-form-title">Ringkasan Pembayaran</p>
                <div className="payment-detail box-form-data">
                    <div class="d-flex justify-content-between">
                        <p className="name">Harga</p>
                        <p className="amount">1.000.000</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p className="name">Biaya Admin</p>
                        <p className="amount">+1.000</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p className="name">Total Pembayaran</p>
                        <p className="amount">1,001.000</p>
                    </div>
                </div>

                <div className="foot-data-diri">
                    <div className="agreement"></div>
                    <button type="submit" form="datadiri">
                        BAYAR SEKARANG
                    </button>
                </div>
            </div>
        );
    }
}

export default MethodTopUp;
