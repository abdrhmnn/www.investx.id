import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import wallet from "../../images/withdraw/wallet.svg";

class Wallet extends Component {
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
                <p className="title">MY WALLET</p>

                </div>
                <div className="box saldo">
                    <img className="wallet" src={wallet} alt=""/>
                    <span style={{background: "#0288D1", borderRadius: "20px", color: "white", fontSize: "7pt", padding: "5px", marginLeft: "40px"}}>Total Saldo</span>
                    <div className="uang">Rp. <span className="jumlah">25.000</span></div>
                </div>
                <div className="box nominal">

                </div>
                <div className="box riwayat">
                    
                </div>
            </div>
        );
    }
}

export default Wallet;
