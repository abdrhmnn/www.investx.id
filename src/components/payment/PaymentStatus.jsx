import { Box, Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../../images/logo.svg";
import paymentImage from "../../images/paymentimage.svg";
import bca from "../../images/withdraw/bca.svg";
import noticeImage from "../../images/invest/modalinvest.svg";

import ModalTemplate from "../shared/ModalTemplate";
import QuestionReveal from "../shared/QuestionReveal";
import { Link } from "react-router-dom";

class PaymentStatus extends Component {
    state = {
        modalDetail: false,
        modalPaymentStatus: false,
    };

    modalDetail = () => (
        <div className="modal-detail-transaction modal-payment-status">
            <i
                className="fas fa-times close-payment-status-modal"
                onClick={() =>
                    this.setState({ modalDetail: !this.state.modalDetail })
                }
            ></i>
            <h3 className="modal-title bolder">Detail Transaksi</h3>
            <div className="box-form-data px-3 py-3 mt-4">
                <div className="box-content-status d-flex justify-content-between">
                    <img
                        className="company-image"
                        src="https://placeimg.com/640/480/tech"
                        alt="company"
                    />
                    <Box flexDirection="column" width="80%" className="px-4 box-fill">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className="bold company-name">
                                    PT. Salad Buah
                                </h5>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text-muted left-span">Harga Saham</p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-muted text-right">
                                    Rp. 100.000
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text-muted left-span">Jumlah Investasi</p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-muted text-right">
                                    80 Lembar
                                </p>
                            </div>
                        </div>
                        <hr className="text-muted" />
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="bolder">Jumlah Imvestasi</p>
                            </div>
                            <div className="col-md-6">
                                <p className="bolder text-right">80 Lembar</p>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
            <div className="box-form-data py-3 mt-2">
                <div className="row payment-bank-status justify-content-around align-items-center py-2">
                    <p className="bold m-0">Pembayaran</p>
                    <span>
                        <span className="h5 bold">BCA </span>
                        <span className="h5 text-muted bold">
                            Virtual Account
                        </span>
                    </span>
                    <img
                        className="payment-logo"
                        src={bca}
                        alt="payment-logo"
                    />
                </div>
            </div>
        </div>
    );

    modalPaymentStatus = () => {
        const but = {
            fontWeight: "500",
            fontSize: "16px",
            background: "#ffffff",
            border: "1px solid #0288d1",
            boxSizing: "border-box",
            borderRadius: "8px",
            color: "#0288d1",
            width: "204px",
            height: "48px",
            marginRight: "24px",
        };

        const butBlue = {
            borderRadius: "9px",
            fontSize: "14px",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#0288D1",
            border: "none",
            outline: "none",
            width: "204px",
            height: "48px",
        };
        return (
            <div className="modal-detail-transaction">
                <i
                    className="fas fa-times"
                    onClick={() =>
                        this.setState({
                            modalPaymentStatus: !this.state.modalPaymentStatus,
                        })
                    }
                ></i>
                <div className="row justify-content-between text-center box-modal-content">
                    <div className="notice-image-container">
                        <img
                            className="notice-image"
                            src={noticeImage}
                            alt="notice"
                        />
                    </div>
                    <div className="desc">
                        <p className="title">Keluar dari halaman ini?</p>
                        <p>Setelah keluar kamu akan diarahkan ke halaman</p>
                        <p className="bolder">Riwayat Transaksi</p>
                        <p>pada kolom ‘ menunggu pembayaran ‘</p>
                        <p>untuk cek detail pembayaranmu.</p>
                        <div className="row justify-content-between mx-2 mt-5 box-button">
                            <Button
                                style={but}
                                onClick={() =>
                                    this.setState({
                                        modalPaymentStatus: !this.state.modalPaymentStatus,
                                    })
                                }
                            >
                                BATAL
                            </Button>
                            <Link
                                to="/profile"
                                onClick={() => this.props.changeTab("history")}
                            >
                                <Button style={{ ...butBlue }}>
                                    KELUAR HALAMAN
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    };

    render() {
        const questions = [
            {
                q: "Apa itu InvestX?",
                a:
                    "InvestX membantu anda menghimpun dana dengan mudah dengan aturan yang lebih mudah dibanding pinjaman bank dan mekanisme penawaran saham yang lebih sederhana dibanding IPO. Dengan sistem equity crowdfunding, anda hanya perlu membagi dividen kepada investor tanpa bunga atau denda.",
            },
            {
                q: "lorem",
                a: "ipsum",
            },
            {
                q: "lorem",
                a: "ipsum",
            },
            {
                q: "lorem",
                a: "ipsum",
            },
            {
                q: "lorem",
                a: "ipsum",
            },
            {
                q: "lorem",
                a: "ipsum",
            },
        ];

        const but = {
            fontWeight: "500",
            fontSize: "16px",
            background: "#ffffff",
            border: "1px solid #0288d1",
            boxSizing: "border-box",
            borderRadius: "8px",
            color: "#0288d1",
        };

        const butBlue = {
            borderRadius: "9px",
            fontSize: "14px",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#01579b",
            border: "none",
            outline: "none",
        };

        return (
            <div className="all-forms-style payment-status">
                <ModalTemplate
                    onOpen={this.state.modalDetail}
                    // onClose={this.handleModalClose}
                    component={this.modalDetail}
                />
                <ModalTemplate
                    onOpen={this.state.modalPaymentStatus}
                    // onClose={this.handleModalClose}
                    component={this.modalPaymentStatus}
                />
                <div className="logo-invest">
                    <img src={logo} alt="logo" />
                </div>

                <div className="status justify-content-center text-center">
                    <img
                        className="payment-image"
                        src={paymentImage}
                        alt="paymentImage"
                    />
                    <p className="status-title">Selesaikan pembayaran dalam</p>
                    <p className="status-time">23:59:40</p>
                    <div className="deadline-container">
                        <p className="title">Batas Pembayaran</p>
                        <span className="date">Rabu, 26 Agustus 2020 </span>
                        <span className="time">07:30</span>
                    </div>

                    <div className="bank-status box-form-data">
                        <div className="head row justify-content-between">
                            <span>
                                <span className="bank-name">BCA </span>
                                <span className="bank-type">
                                    Virtual Account
                                </span>
                            </span>
                            <img
                                className="bank-logo"
                                src={bca}
                                alt="logo-bank"
                            />
                        </div>

                        <div className="payment-detail">
                            <div className="row justify-content-between">
                                <div>
                                    <p className="name">No Virtual Account</p>
                                    <p className="value">872376200655</p>
                                </div>
                                <div>
                                    <p className="text-button">Salin</p>
                                </div>
                            </div>

                            <div className="row justify-content-between ">
                                <div>
                                    <p className="name">Total Pembayaran</p>
                                    <p className="total">Rp. 8.000.000</p>
                                </div>
                                <div>
                                    <p
                                        className="text-button"
                                        onClick={() =>
                                            this.setState({
                                                modalDetail: true,
                                            })
                                        }
                                    >
                                        Lihat Detail
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-container">
                        <Link
                            to="/profile"
                            onClick={() => this.props.changeTab("list")}
                        >
                            <Button style={but}>INVESTASI LAINNYA</Button>
                        </Link>
                        <Button
                            style={butBlue}
                            onClick={() =>
                                this.setState({
                                    modalPaymentStatus: true,
                                })
                            }
                        >
                            CEK STATUS PEMBAYARAN
                        </Button>
                    </div>

                    <div className="payment-method justify-content-center">
                        <p className="payment-method-title">Cara Pembayaran</p>

                        <div className="ml-3">
                            {questions.map((data, index) => {
                                return (
                                    <QuestionReveal key={index} data={data} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        // number : state.number
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (data) => dispatch({ type: "CHANGE_TAB", data: data }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentStatus);
