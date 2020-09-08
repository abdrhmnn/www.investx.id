import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";


import PropTypes from 'prop-types';
import { Slide } from "react-reveal";


class PaymentMethod extends Component {
    render() {
        const { methods } = this.props;
        return (
            <>
                {
                    methods.map((method, i) => (
                        <div key={i}>
                            <div className="d-flex justify-content-between">
                                <div className="title-alt">{method.title}</div>
                                {methods.length === 1 ?
                                    (
                                        <span className="more-transfer-method" onClick={method.toggle}>
                                            Lihat Lainnya<i className="fas fa-chevron-down ml-2"></i>
                                        </span>
                                    ) : <div></div>
                                }
                            </div>
                            <p className="subtitle">{method.subtitle}</p>
                            {method.logos.map((value, j) =>
                                <div className="radio-bank" key={j}>
                                    <input
                                        type="radio"
                                        name="bank"
                                    />

                                    <img src={value} alt="bca" />
                                    <br />
                                </div>
                            )}
                            <br />
                        </div>
                    )
                    )
                }
            </>
        );
    }
}


PaymentMethod.propTypes = {
    methods: PropTypes.arrayOf(
        PropTypes.exact({
            first: PropTypes.bool,
            toggle: PropTypes.func,
            title: PropTypes.string,
            subtitle: PropTypes.string,
            logos: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
};




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
