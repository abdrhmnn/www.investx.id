import { Fab, Switch } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import companyImage from "../../images/payment/company-image.svg";
import wallet from "../../images/withdraw/wallet.svg";
import bankIcon from "../../images/payment/bank-icon.svg";
import addBlueIcon from "../../images/payment/add-blue-icon.svg";

import PaymentMethod from "./PaymentMethod";
import { Button } from '@material-ui/core';


class Payment extends Component {
    render() {
        const butBlue = {
            width: '700px',
            borderRadius: '9px',
            height: '36px',
            fontSize: '14px',
            textTransform: 'uppercase',
            color: '#ffffff',
            background: '#01579b',
            border: 'none',
            outline: 'none'
        };

        return (
            <div className="all-forms-style payment">
                <div className="bg">
                    <div className="bg-round"></div>
                </div>

                <Link to="/select-form/">
                    <Fab className="back-button">
                        <img src={arrowback} alt="" />
                    </Fab>
                </Link>

                <div className="logo-invest">
                    <img src={logo} alt="logo" />
                </div>
                <p className="title">Pembayaran</p>

                <div className="payment-company box-form-data">
                    <div className="col">
                        <div className="row">
                            <div className="col-md-4">
                                <img
                                    className="payment-image"
                                    src={companyImage}
                                    alt="company"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="col">
                                    <h5 className="company-name">
                                        PT. Sehat Berkah Hijau
                                    </h5>
                                    <div className="row text-color-grey">
                                        <div className="col-md-6">
                                            Harga Saham
                                        </div>
                                        <div className="col-md-6">
                                            Rp. 100.000
                                        </div>
                                    </div>
                                    <div className="row text-color-grey">
                                        <div className="col-md-6">
                                            Jumlah Investasi
                                        </div>
                                        <div className="col-md-6">
                                            80 Lembar
                                        </div>
                                    </div>
                                    <hr color="white" />
                                    <div className="row">
                                        <div className="col-md-6 bold">
                                            <h5>Total</h5>
                                        </div>
                                        <div className="col-md-6 bold">
                                            <h5>Rp. 8.000.0000</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="box-form-title">Pilih Metode Pembayaran</p>

                <div className="wallet-payment box-form-data">
                    <div className="row">
                        <img
                            className="wallet-icon"
                            src={wallet}
                            alt="wallet-icon"
                        />
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h5>Saldo Dompet</h5>
                                    <p>Rp. 3.500.000</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="row ml-1">
                                <p className="text-danger mr-4">
                                    *Saldo anda tidak mencukupi
                                </p>
                                <span>
                                    <img src={addBlueIcon} alt="addblue" />
                                    <Link to="/my-wallet">
                                        <a className="text-primary">
                                            Top Up Saldo
                                        </a>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="payment-methods box-form-data">
                    <div className="row">
                        <img
                            className="bank-icon"
                            src={bankIcon}
                            alt="bank-icon"
                        />
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h5>Transfer Bank - Virtual</h5>
                                    <p className="text-primary">
                                        BCA Virtual Account
                                    </p>
                                </div>
                                <Switch />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <br />
                    <div className="px-5">
                        <PaymentMethod />
                    </div>
                </div>

                <Link to="/payment-status">
                    <Button style={butBlue} type="submit">
                        BAYAR
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Payment;
