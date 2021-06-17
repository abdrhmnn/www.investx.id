import React, { Component } from "react";
// import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Button, Fab } from "@material-ui/core";
import helper from "../../helpers/helper";
import API from "../../api";
import Swal from "sweetalert2";
import walleticon from "../../images/profile/walleticon.svg";
// import Axios from "axios";
// import kuki from "../../helpers/kuki";

import PaymentMethod from "../payment/PaymentMethod";

class TopUp extends Component {
  state = {
    // toggleMethods: false,
    topup : ''
  };

  // setToggleMethods = () => {
  //   this.setState({
  //     toggleMethods: !this.state.toggleMethods,
  //   });
  // };

  handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = (e) =>{
    const withAdmin = parseInt(this.state.topup)+1000
    const body = {
      "amount" : withAdmin.toString()
    }
    API.postTopUp(body).then(res=>{
      console.log(res)
      this.props.history.push(`/topup/detail/${res.data.invoice_number}`)
    }).catch(err=>{
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: `Topup gagal`,
        text : `${Object.entries(err.response.data)} \n`
      })
    })
    // Axios.post(`https://api.staging.investx.id/transaction/topup/`, body, {
    //   headers : {
    //     Authorization : `Token ${kuki.get("token")}`
    //   }
    // }).then(res =>{
    //   console.log(res)
    // }).catch(err=>{
    //     console.log(err)
    //     Swal.fire({
    //       icon: 'error',
    //       title: `Topup gagal`,
    //       text : `${Object.entries(err.response.data)} \n`
    //     })
    //   })
    e.preventDefault()
  }

  render() {
    return (
      <div className="all-forms-style topup-method">
        <div className="bg">
          <div className="bg-round"></div>
        </div>
        {/* <Link onClick={() => this.props.history.goBack()}> */}
          <Fab className="back-button"  onClick={() => this.props.history.goBack()}>
            <img src={arrowback} alt="" />
          </Fab>
        {/* </Link> */}
        <div className="logo-invest">
          <img src={logo} alt="" />
        </div>
        <p className="title">Top Up</p>

        <div className="row box-form-title">
          <div className="">
            <img src={walleticon} alt="wallet" style={{height: "29px", width: "30px", marginRight: "5px"}} />
            {" Saldo Anda"}
          </div>
          <div style={{marginLeft:"450px", maxWidth:"1000px"}}>
            {" Rp 15.000.000"}
          </div>
        </div>

        <div className="box-form-data">
          <div className="title-alt">Jumlah Nominal</div>
          <form className="input-border-underline" id='topup' onSubmit={this.handleSubmit}>
            <input 
              onChange={this.handleChange}
              value={this.state.topup}
              type="number" 
              min='20000'
              required 
              name="topup" />
          </form>
        </div>

        <p className="box-form-title">Pilih Metode Pembayaran</p>
        <div className="payment-methods box-form-data">
          <PaymentMethod />
        </div>

        <p className="box-form-title">Ringkasan Pembayaran</p>
        <div className="payment-detail box-form-data">
          <div className="d-flex justify-content-between">
            <p className="name">Harga</p>
            <p className="amount">{this.state.topup === "" ? "0" : helper.idr(this.state.topup)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="name">Biaya Admin</p>
            <p className="amount">+ 1.000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="name">Total Pembayaran</p>
            <p className="amount h4">{this.state.topup === "" ? "0" : helper.idr(parseInt(this.state.topup) + 1000)}</p>
          </div>
        </div>

        <div className="foot-data-diri">
          <div className="agreement"></div>
          {/* <Link to="/topup/detail/"> */}
            <Button type="submit" form="topup">
              BAYAR SEKARANG
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default TopUp;
