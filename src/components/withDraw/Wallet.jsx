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
                    <div className="uang">Rp. <span className="jumlah">20.000.000</span></div>
                    <div className="wallet-bawah">
                        <div className="kiri" style={{marginTop: "70px", marginLeft:"-90px"}}>
                            <div className="uang" style={{fontSize:"10pt", color:"grey"}}><span className="jumlah">Saldo Rupiah</span></div>
                            <div className="uang" style={{fontSize:"10pt", color:"black", marginTop:"-1px"}}>Rp. <span className="jumlah">20.000.000</span></div>
                        </div>

                        <div className="kiri" style={{marginTop: "-10px", marginLeft:"60px"}}>
                            <div className="uang" style={{fontSize:"10pt", color:"grey"}}><span className="jumlah">Total Rupiah</span></div>
                            <div className="uang" style={{fontSize:"10pt", color:"black", marginTop:"-1px"}}>Rp. <span className="jumlah">20.000.000</span></div>
                        </div>
                    </div>
                </div>
                <div className="box nominal">
             <div className="box-form-data">
                    <div className="title-alt" style={{marginLeft:"-45px"}}>Nominal Top Up</div>
                    <div style={{display:"flex", flexDirection:"column", marginLeft:"400px"}}>
                        <button className="but-blue" style={{marginBottom:"10px"}}>Top Up</button>

                        <button className="but" style={{width: "100px", width: "197px",height: "36px", fontSize: "14px",paddingBottom: "25px"}}>WITHDRAW</button>
                        </div>
                    <div className="input-border-underline" style={{marginLeft:"-45px", width:"420px", marginTop:"-50px"}}>
                        <input
                            type="number"
                            name="username"
                        />
                        
                    </div>
                        
                    
                    <div style={{marginLeft:"-50px", maxHeight:"40px", overflowX:"hidden", overflowY: "hidden",whiteSpace: "nowrap"}} className="geser">
                        <button className="saran">20.000.000</button>
                        <button className="saran">30.000.000</button>
                        <button className="saran">40.000.000</button>
                        <button className="saran">50.000.000</button>
                        <button className="saran">50.000.000</button>
                        <button className="saran">50.000.000</button>
                        <button className="saran">50.000.000</button>
                        <button className="saran">50.000.000</button>
                        <button className="saran">50.000.000</button>
                        <button className="saran">50.000.000</button>
                        

                    </div>
                </div>
                </div>
                <div className="box riwayat">
                    
                </div>
            </div>
        );
    }
}

export default Wallet;
