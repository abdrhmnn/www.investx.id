import { Box, Button } from "@material-ui/core";
import React, { Component } from "react";

import logo from "../../images/logo.svg";
import paymentImage from "../../images/paymentimage.svg";
import bca from "../../images/withdraw/bca.svg";
import companyImage from "../../images/company-image.png";
import noticeImage from "../../images/invest/modalinvest.svg";

import ModalTemplate from "../shared/ModalTemplate";
import QuestionReveal from "../shared/QuestionReveal";

class PaymentStatus extends Component {
    state = {
        modalDetail: false,
        modalPaymentStatus: false,
    };

    modalDetail = () => (
        <div className="modal-detail-transaction">
            <i
                className="fas fa-times"
                onClick={() =>
                    this.setState({ modalDetail: !this.state.modalDetail })
                }
            ></i>
            <div className="box-form-data px-2 py-2 mt-4">
                <div className="d-flex justify-content-between">
                    <img
                        className="company-image"
                        src={companyImage}
                        alt="company"
                    />
                    <Box flexDirection="column" width="80%" className="px-4">
                        <div className="row">
                            <p className="bold">PT. Salad Buah</p>
                        </div>
                        <div className="row justify-content-between">
                            <p className="text-muted">Hargas Saham</p>
                            <p className="text-muted">Rp. 100.000</p>
                        </div>
                        <div className="row justify-content-between">
                            <p className="text-muted">Jumlah Imvestasi</p>
                            <p className="text-muted">80 Lembar</p>
                        </div>
                        <hr className="text-muted" />
                        <div className="row justify-content-between">
                            <p className="bold">Jumlah Imvestasi</p>
                            <p className="bold">80 Lembar</p>
                        </div>
                    </Box>
                </div>
            </div>
            <div className="box-form-data mt-2">
                <div className="row justify-content-around align-items-center py-2">
                    <p className="bold m-0">Pembayaran</p>
                    <span>
                        <span className="h5 bold">BCA </span>
                        <span className="h5 text-muted bold">
                            Virtual Account
                        </span>
                    </span>
                    <img src={bca} alt="logo-bank" />
                </div>
            </div>
        </div>
    );

    modalPaymentStatus = () => (
        <div className="modal-detail-transaction">
            <i
                className="fas fa-times"
                onClick={() =>
                    this.setState({
                        modalPaymentStatus: !this.state.modalPaymentStatus,
                    })
                }
            ></i>
            <div className="row justify-content-between text-center">
                <div className="notice-image-container">
                    <img
                        className="notice-image"
                        src={noticeImage}
                        alt="notice"
                    />
                </div>
                <div className="desc">
                    <h4 className="bold mb-4">Keluar dari halaman ini?</h4>
                    <p>Setelah keluar kamu akan diarahkan ke halaman</p>
                    <p className="bolder">Riwayat Transaksi</p>
                    <p>pada kolom ‘ menunggu pembayaran ‘</p>
                    <p>untuk cek detail pembayaranmu.</p>
                    <div className="row justify-content-between mx-2 mt-5">
                        <button className="but mr-3">BATAL</button>
                        <button className="but-solid">KELUAR HALAMAN</button>
                    </div>
                </div>
            </div>
        </div>
    );

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

                <div className="justify-content-center text-center">
                    <img src={paymentImage} alt="paymentImage" />
                    <h5 className="bold mt-3">Selesaikan pembayaran dalam</h5>
                    <h5 className="text-danger bold mt-2">23:59:40</h5>
                    <p className="text-muted mb-0">Batas Pembayaran</p>
                    <div className="mb-3">
                        <span className="bold">Rabu, 26 Agustus 2020 </span>
                        <span className="text-muted bold">07:30</span>
                    </div>

                    <div className="bank-status box-form-data">
                        <div className="head row justify-content-between">
                            <span>
                                <span className="h5 bold">BCA </span>
                                <span className="h5 text-muted bold">
                                    Virtual Account
                                </span>
                            </span>
                            <img src={bca} alt="logo-bank" />
                        </div>

                        <div className="d-flex justify-content-between align-items-center px-4 mb-3">
                            <div className="d-flex flex-column">
                                <p className="text-muted m-0 mb-1">
                                    No Virtual Account
                                </p>
                                <p className="bold m-0">872376200655</p>
                            </div>
                            <div className="d-flex flex-column">
                                <Button variant="text" className="text-primary">
                                    Salin
                                </Button>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center px-4 mb-3">
                            <div className="d-flex flex-column">
                                <p className="text-muted m-0 mb-1">
                                    Total Pembayaran
                                </p>
                                <p className="bold text-danger m-0">
                                    Rp. 8.000.000
                                </p>
                            </div>
                            <div className="d-flex flex-column">
                                <Button
                                    variant="text"
                                    className="text-primary"
                                    onClick={() =>
                                        this.setState({
                                            modalDetail: true,
                                        })
                                    }
                                >
                                    Lihat Detail
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between mx-2">
                        <button className="but">INVESTASI LAINYA</button>
                        <button
                            className="but-blue mr-2"
                            onClick={() =>
                                this.setState({
                                    modalPaymentStatus: true,
                                })
                            }
                        >
                            CEK STATUS PEMBAYARAN
                        </button>
                    </div>

                    <div className="payment-method justify-content-center">
                        <h5 className="payment-method-title">
                            Cara Pembayaran
                        </h5>

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

export default PaymentStatus;
