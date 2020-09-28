import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";

import { Slide } from "react-reveal";
import PaymentMethod from "../payment/PaymentMethod";

class MethodTopUp extends Component {
    state = {
        toggleMethods: false,
    }

    setToggleMethods = () => {
        this.setState({
            toggleMethods: !(this.state.toggleMethods),
        })
    }

    render() {
        const methods = [
            {
                first: true,
                toggle: this.setToggleMethods,
                title: 'VIRTUAL ACCOUNT',
                subtitle: 'Dengan Kode Unik Semua Jadi Cepat',
                logos: [
                    logo,
                    logo,
                    logo,
                ]
            },
            {
                title: 'VIRTUAL ACCOUNT1',
                subtitle: 'Dengan Kode Unik Semua Jadi Cepat',
                logos: [
                    logo,
                    logo,
                    logo,
                ]
            },
            {
                title: 'VIRTUAL ACCOUNT2',
                subtitle: 'Dengan Kode Unik Semua Jadi Cepat',
                logos: [
                    logo,
                    logo,
                    logo,
                ]
            },
        ]
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
                        />
                    </div>
                </div>

                <p className="box-form-title">Pilih Metode Pembayaran</p>
                <div className="payment-methods box-form-data">
                    {
                        this.state.toggleMethods ?
                            <Slide bottom>
                                <PaymentMethod methods={methods} />
                            </Slide>
                            : <PaymentMethod methods={[methods[0]]} />
                    }
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
                    <button type="submit" form="datadiri">
                        BAYAR SEKARANG
                    </button>
                </div>
            </div>
        );
    }
}

export default MethodTopUp;
