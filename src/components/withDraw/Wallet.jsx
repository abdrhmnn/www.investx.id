import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import wallet from "../../images/withdraw/wallet.svg";
import tarik from "../../images/withdraw/tarik.svg";
import topup from "../../images/withdraw/topup.svg";


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
                    <img className="wallet" src={wallet} alt="" />
                    <span style={{ background: "#0288D1", borderRadius: "20px", color: "white", fontSize: "7pt", padding: "5px", marginLeft: "40px" }}>Total Saldo</span>
                    <div className="uang">Rp. <span className="jumlah">20.000.000</span></div>
                    <div className="wallet-bawah">
                        <div className="kiri" style={{ marginTop: "70px", marginLeft: "-90px" }}>
                            <div className="uang" style={{ fontSize: "10pt", color: "grey" }}><span className="jumlah">Saldo Rupiah</span></div>
                            <div className="uang" style={{ fontSize: "10pt", color: "black", marginTop: "-1px" }}>Rp. <span className="jumlah">20.000.000</span></div>
                        </div>

                        <div className="kiri" style={{ marginTop: "-10px", marginLeft: "60px" }}>
                            <div className="uang" style={{ fontSize: "10pt", color: "grey" }}><span className="jumlah">Total Rupiah</span></div>
                            <div className="uang" style={{ fontSize: "10pt", color: "black", marginTop: "-1px" }}>Rp. <span className="jumlah">20.000.000</span></div>
                        </div>
                    </div>
                </div>
                <div className="box nominal">
                    <div className="box-form-data">
                        <div className="title-alt" style={{ marginLeft: "-45px" }}>Nominal Top Up</div>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "400px" }}>
                            <button className="but-blue" style={{ marginBottom: "10px" }}>Top Up</button>

                            <button className="but" style={{ width: "100px", width: "197px", height: "36px", fontSize: "14px", paddingBottom: "25px" }}>WITHDRAW</button>
                        </div>
                        <div className="input-border-underline" style={{ marginLeft: "-45px", width: "420px", marginTop: "-50px" }}>
                            <input
                                type="number"
                                name="username"
                            />

                        </div>


                        <div style={{ marginLeft: "-50px", maxHeight: "40px", overflowX: "hidden", overflowY: "hidden", whiteSpace: "nowrap" }} className="geser">
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
                    <div className="title-alt" style={{fontWeight:"bolder", color:"#0288DA", marginLeft:"30px", marginTop:"20px"}}>Riwayat Transaksi</div>
<div className="menu">
                    <a style={{background: '#2388D1',
  color: 'white'}}>Semua</a>
                    <a style={{marginLeft:"120px"}}>Pembelian</a>
                    <a style={{marginLeft:"230px"}}>Top Up</a>
                    <a style={{marginLeft:"320px"}}>With Draw</a>
</div>

<p style={{letterSpacing:"-0.5px",marginTop:"70px", fontSize:"9pt",marginLeft:"30px"}}>10 Aug 2020 | 08:30</p>
<br />

<div className="title-alt" style={{fontWeight:"bolder", fontSize:"10pt", color:"#0288DA", marginLeft:"30px", marginTop:"-10px", color:"black"}}>No Transaksi</div>
<p style={{fontSize:"10pt",marginLeft:"30px"}}>(IVR/200804/XX/VII/469044911)</p>

<div className="Total" style={{borderLeft:"2px solid black"}}>
    <div className="title-alt" style={{fontWeight:"bolder", fontSize:"10pt", color:"#0288DA", marginLeft:"460px", marginTop:"-60px", color:"black"}}>Total Pembayaran <span style={{color:"#F27272"}}>Rp. 20.000.000</span></div>
<p style={{fontSize:"10pt",marginLeft:"460px"}}>Lihat Detail Transaksi</p>
</div>
<hr />
<div>
    
    <div className="title-alt" style={{fontWeight:"bold", fontSize:"10pt", color:"#000", marginLeft:"30px", marginTop:"-10px"}}>Top Up</div><img  src={topup}/>
<p style={{fontSize:"18pt",marginLeft:"30px",marginTop:"-25px", fontWeight:"bolder"}}>+20.000.000</p>

<div style={{marginLeft:"200px", marginTop:"-80px"}}>
    <img />
    <div className="title-alt" style={{fontWeight:"bold", fontSize:"10pt", color:"#000", marginLeft:"30px", marginTop:"-5px"}}>Status</div>
<p style={{fontSize:"10pt",marginLeft:"30px", fontWeight:"bolder", color: "green"}}>Transaksi Berhasil</p>
</div>
<div style={{marginLeft:"460px", marginTop:"-50px"}}>
    <button className="but" style={{ width: "197px", height: "20px", fontSize: "14px", paddingBottom: "25px", background:"#FFA412", color:"white", border:"none" }}>Top Up Lagi</button>
</div>
<hr />
</div>

<p style={{letterSpacing:"-0.5px",marginTop:"70px", fontSize:"9pt",marginLeft:"30px"}}>12 Aug 2020 | 00:30</p>
<br />

<div className="title-alt" style={{fontWeight:"bolder", fontSize:"10pt", color:"#0288DA", marginLeft:"30px", marginTop:"-10px", color:"black"}}>No Transaksi</div>
<p style={{fontSize:"10pt",marginLeft:"30px"}}>(IVR/200804/XX/VII/469044911)</p>

<div className="Total" style={{borderLeft:"2px solid black"}}>
    <div className="title-alt" style={{fontWeight:"bolder", fontSize:"10pt", color:"#0288DA", marginLeft:"460px", marginTop:"-60px", color:"black"}}>Total Pembayaran <span style={{color:"#F27272"}}>Rp. 20.000.000</span></div>
<p style={{fontSize:"10pt",marginLeft:"460px"}}>Lihat Detail Transaksi</p>
</div>
<hr />
<div>
    
    <div className="title-alt" style={{fontWeight:"bold", fontSize:"10pt", color:"#000", marginLeft:"30px", marginTop:"-10px"}}>Top Up</div><img src={tarik} />
<p style={{fontSize:"18pt",marginLeft:"30px",marginTop:"-25px", fontWeight:"bolder"}}>-20.000.000</p>

<div style={{marginLeft:"200px", marginTop:"-80px"}}>
    <img />
    <div className="title-alt" style={{fontWeight:"bold", fontSize:"10pt", color:"#000", marginLeft:"30px", marginTop:"-5px"}}>Status</div>
<p style={{fontSize:"10pt",marginLeft:"30px", fontWeight:"bolder", color: "red"}}>Transaksi Dibatalkan</p>
</div>
<div style={{marginLeft:"460px", marginTop:"-50px"}}>
    <button className="but" style={{ width: "197px", height: "20px", fontSize: "14px", paddingBottom: "25px", background:"red", color:"white", border:"none" }}>Tarik Uang Lagi</button>
</div>
<hr />
</div>

                </div>
            </div>
        );
    }
}

export default Wallet;
