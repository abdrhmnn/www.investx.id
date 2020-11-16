import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Box, Button, Fab } from "@material-ui/core";

class TopUpDetail extends Component {
    state = {
        isInvoice: false,
    };

    setIsInvoice = (status) => {
        this.setState({
            isInvoice: status,
        });
    };

    render() {
        const but = {
            color: "#0288D1",
            borderRadius: "8px",
            border: "1px solid #0288d1",
            backgroundColor: "white",
            fontSize: "16px",
            outline: "unset !important",
        };
        const butSolid = {
            backgroundColor: "#0288d1",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            outline: "unset !important",
        };

        return (
            <div className="all-forms-style detail-transaction">
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
                <p className="title">
                    {this.state.isInvoice ? "INVOICE" : "DETAIL TRANSAKSI"}
                </p>

                <div className="payment-detail box-form-data">
                    <div className="d-flex justify-content-between">
                        <p className="name">Tanggal</p>
                        <p className="amount">22/09/2020</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="name">No Invoice</p>
                        <p className="amount">ABC123-EF45</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="name">Status</p>
                        <p
                            className={
                                "amount " +
                                (this.state.isInvoice ? "text-blue" : "")
                            }
                        >
                            {this.state.isInvoice ? "Success" : "Pending"}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="name">Pembayaran</p>
                        <p className="amount">Top Up Wallet</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="name">Metode Pengiriman</p>
                        <p className="amount">BCA Virtual Account</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="name">Nominal Top Up</p>
                        <p className="amount text-blue">Rp. 200,000,-</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="name">Administrasi</p>
                        <p className="amount text-blue">Rp. 2,500,-</p>
                    </div>
                    <div className="tile-active d-flex justify-content-between">
                        <p className="name">Total</p>
                        <div>
                            <br />
                            <p className="amount total-amount text-blue">
                                Rp. 202, 500
                            </p>
                        </div>
                    </div>
                    <br />
                    <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: "30px" }}
                    >
                        <p className="name">Batas Waktu</p>
                        <p className="amount">12;34;00</p>
                    </div>

                    {this.state.isInvoice ? (
                        <div style={{ marginBottom: "180px" }}>
                            <p
                                className="note"
                                style={{ marginBottom: "34px" }}
                            >
                                *Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Error reiciendis culpa quidem.
                                Aliquam labore totam ea, fuga tenetur fugiat
                                obcaecati eveniet itaque quisquam, hic magni
                                neque, aperiam unde accusamus harum.
                            </p>

                            <div className="d-flex justify-content-between">
                                <Button className="but" style={but}>
                                    BUTUH BANTUAN
                                </Button>
                                <Button
                                    onClick={() => {
                                        window.location.href = "/topup-status";
                                    }}
                                    className="but-solid"
                                    style={butSolid}
                                    type="submit"
                                >
                                    KIRIM BUKTI
                                </Button>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <p
                                    className="note"
                                    style={{ marginBottom: "20px" }}
                                >
                                    *Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Error reiciendis culpa quidem.
                                    Aliquam labore totam ea, fuga tenetur fugiat
                                    obcaecati eveniet itaque quisquam, hic magni
                                    neque, aperiam unde accusamus harum.
                            </p>
                                <Button
                                    style={butSolid}
                                    className="but-solid"
                                    type="submit"
                                    onClick={() => this.setIsInvoice(true)}
                                >
                                    BAYAR
                            </Button>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default TopUpDetail;
