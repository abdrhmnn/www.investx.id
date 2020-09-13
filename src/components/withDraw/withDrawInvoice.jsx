import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";

class DetailTransaction extends Component {

    state = {
        isInvoice: false,
    }

    setIsInvoice = (status) => {
        this.setState({
            isInvoice: status
        })
    }

    render() {
        return (
            <div className="all-forms-style detail-transaction withdraw">
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
                <p className="title">{this.state.isInvoice ? "INVOICE" : "DETAIL TRANSAKSI"}</p>

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
                        <p className={"amount " + (this.state.isInvoice ? "text-blue" : "")} >{this.state.isInvoice ? "Success" : "Pending"}</p>
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
                        <p className="name">Nominal</p>
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
                            <p className="amount h3 text-blue">Rp. 202,500,-</p>
                        </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between">
                        <p className="name">Batas Waktu</p>
                        <p className="amount">12;34;00</p>
                    </div>

                    <br />

                    {this.state.isInvoice ?
                        <div>
                            <p className="note">*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error reiciendis culpa quidem. Aliquam labore totam ea, fuga tenetur fugiat obcaecati eveniet itaque quisquam, hic magni neque, aperiam unde accusamus harum.</p>

                            <div className="d-flex justify-content-between">
                                <button className="but">BUTUH BANTUAN</button>
                                <button className="but-solid" type="submit" >KIRIM BUKTI</button>
                            </div>

                        </div>
                        :
                        <div>
                            <p className="note">*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error reiciendis culpa quidem. Aliquam labore totam ea, fuga tenetur fugiat obcaecati eveniet itaque quisquam, hic magni neque, aperiam unde accusamus harum.</p>
                            <button className="but-solid" type="submit" onClick={() => this.setIsInvoice(true)}>Bayar Transaksi</button>
                        </div>
                    }

                </div>

            </div>
        );
    }
}

export default DetailTransaction;
