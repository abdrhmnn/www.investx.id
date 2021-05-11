import React, { Component } from "react";
// import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Button, Fab } from "@material-ui/core";
import API from "../../api";
import helper from "../../helpers/helper";
import Swal from "sweetalert2";

class TopUpDetail extends Component {
  state = {
    // isInvoice: false,
    data : {},
    tokenPayment :''
  };

  // setIsInvoice = (status) => {
  //   this.setState({
  //     isInvoice: status,
  //   });
  // };

  componentDidMount(){
    const script = document.createElement("script");

    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.async = true;
    script["data-client-key"] = "SB-Mid-client-BiP4Rpf3B1lBAwY_"; //key mor save with queryreact
    document.body.appendChild(script);
    // console.log(this.props.match.params.invoiceNumber)
    API.getInvoiceTopup(this.props.match.params.invoiceNumber).then(res=>{
      console.log(res)
      this.setState({data : res.data})
    }).catch(err=>{
      console.log(err.response)
    })
  }


  handlePay = ()=>{
    // this.setState({modalConfirm : false, loading : true})
    const idPayment = this.state.data.number
    const data ={
      "channel": "snap"
    }
    API.investPayment(idPayment, data).then(res=>{
      console.log(res, 'token payment')
      this.setState({
        tokenPayment : res.data.payment_detail.token,
        loading : false
      }, ()=>{
        // if (channelVal=== 'snap') {
            window.snap.pay(this.state.tokenPayment,{
              onSuccess: function(result){
                console.log('success');
                console.log(result);
                window.location.href = `/invoice/${idPayment}`
              },
              onPending: function(result){
                console.log('pending');
                console.log(result);
                window.location.href = `/invoice/${idPayment}`
              },
              onError: function(result){
                console.log('error');
                console.log(result);
                window.location.href = `/invoice/${idPayment}`
              },
              onClose: function(){
                console.log('customer closed the popup without finishing the payment');
                window.location.reload()
                // document.body.style = null;
                // document.body.style.overflowX = "auto";
                // document.body.style.overflow = "auto";
              }
            })
        // } 
        // if (channelVal=== 'wallet') {
        //     window.location.href = `/invoice/${idPayment}`
        // }
      })

    }).catch(err =>{
      this.setState({loading : false})
      Swal.fire({
        icon: 'error',
        title: `Pembayaran gagal`,
        // text : `${Object.entries(err.response.data)} \n`
      })
      console.log(err.response)
    })
  }

  render() {
    const {amount, status, number} = this.state.data
    return (
      <div className="all-forms-style detail-transaction">
        <div className="bg">
          <div className="bg-round"></div>
        </div>
          <Fab className="back-button" onClick={() => this.props.history.goBack()}>
            <img src={arrowback} alt="" />
          </Fab>
        <div className="logo-invest">
          <img src={logo} alt="" />
        </div>
        <p className="title">
          {this.state.isInvoice ? "INVOICE" : "DETAIL TRANSAKSI"}
        </p>

        <div className="payment-detail box-form-data">
          {/* <div className="d-flex justify-content-between">
            <p className="name">Tanggal</p>
            <p className="amount">22/09/2020</p>
          </div> */}
          <div className="d-flex justify-content-between">
            <p className="name">No Invoice</p>
            <p className="amount">{number}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="name">Status</p>
            <p>
              {status}
            </p>
          </div>
          {/* <div className="d-flex justify-content-between">
            <p className="name">Pembayaran</p>
            <p className="amount">Top Up Wallet</p>
          </div> */}
          {/* <div className="d-flex justify-content-between">
            <p className="name">Metode Pengiriman</p>
            <p className="amount">BCA Virtual Account</p>
          </div> */}
          <div className="d-flex justify-content-between">
            <p className="name">Nominal Top Up</p>
            <p className="amount text-blue">Rp. {helper.idr(Math.round(amount - 1000))}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="name">Administrasi</p>
            <p className="amount text-blue">Rp. 1,000,-</p>
          </div>
          <div className="tile-active d-flex justify-content-between">
            <p className="name">Total</p>
            <div>
              <br />
              <p className="amount total-amount text-blue">Rp. {helper.idr(Math.round(amount))}</p>
            </div>
          </div>
          <br />
          {/* <div
            className="d-flex justify-content-between"
            style={{ marginBottom: "30px" }}
          >
            <p className="name">Batas Waktu</p>
            <p className="amount">12;34;00</p>
          </div> */}

          {/* {this.state.isInvoice ? (
            <div style={{ marginBottom: "180px" }}>
              <p className="note" style={{ marginBottom: "34px" }}>
                *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                reiciendis culpa quidem. Aliquam labore totam ea, fuga tenetur
                fugiat obcaecati eveniet itaque quisquam, hic magni neque,
                aperiam unde accusamus harum.
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
          )} */}
            <div>
              {/* <p className="note" style={{ marginBottom: "20px" }}>
                *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                reiciendis culpa quidem. Aliquam labore totam ea, fuga tenetur
                fugiat obcaecati eveniet itaque quisquam, hic magni neque,
                aperiam unde accusamus harum.
              </p> */}
              <Button
                className="but-topup-pay"
                variant='contained'
                type="submit"
                onClick={this.handlePay}
              >
                BAYAR
              </Button>
            </div>
        </div>
      </div>
    );
  }
}

export default TopUpDetail;
