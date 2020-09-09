import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import kotakSurat from "../../images/kotakSurat.svg";

class withDrawOtp extends Component {

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
            <div className="all-forms-style detail-transaction">
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
                    <div style={{marginLeft: "200px"}}>
                        <img src={kotakSurat} alt=""/>
                    </div>
                    <div style={{marginLeft: "100px", marginTop: "-40px"}} className="d-flex justify-content-between">
                        <h2>Verifikasi Kode OTP</h2>
                    </div>
                    <div style={{textAlign: "center"}}>
                       <p>Hai Maria, Untuk melanjutkan transaksi kamu harus memasukkan kode OTP</p>
                       <span>Kode Verifikasi telah dikirimkan ke nomor</span>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between">
                        <p className="name">Batas Waktu</p>
                        <p className="amount">12:34:00</p>
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
                            <button className="but-solid" type="submit" onClick={() => this.setIsInvoice(true)}>BAYAR TRANSAKSI</button>
                        </div>
                    }

                </div>

            </div>
        );
    }
}

export default withDrawOtp;
