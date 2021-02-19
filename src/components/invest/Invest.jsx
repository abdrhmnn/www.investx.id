import React, { Component } from "react";
import Navbar from "../shared/Navbar";
import { Fab, Button } from "@material-ui/core";
import payment1 from "../../images/invest/payment1.png";
import payment2 from "../../images/invest/payment2.png";
import modalinvest from "../../images/invest/modalinvest.svg";
import Footer from "../shared/Footer";
import Ojk from "../shared/Ojk";
import ModalTemplate from "../shared/ModalTemplate";
import InputPin from "./pinComponents/InputPin";
import ResetPin from "./pinComponents/ResetPin";
import VerifyOtp from "../shared/VerifyOtp";
import SecurePin from "./pinComponents/SecurePin";

// import { connect } from "react-redux";
import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";
import helper from "../../helpers/helper";



class Invest extends Component {
  state = {
    lembarSaham: 0,
    modalConfirm: false,
    modalInputPin: false,
    modalInputResetPin: false,
    modalInputOtp: false,
    modalInputSecurePin: false,
    data : {},
    company : {},
    loading : false
  };

  

  componentDidMount(){
    this.getData()
  }

  getData = () =>{
    let id = this.props.match.params.id
    API.fundraiseDetail(id).then(res=>{
      console.log(res)
      this.setState({ 
        data : res.data,
        company : res.data.company,
        lembarSaham : res.data.min_invest_share,

      })
    }).catch(err => console.log(err.response))
  }

  onBuySaham = (amount)=>{
    this.setState({modalConfirm : false, loading : true})
    const data = {
      "amount": amount, 
      "share" : this.state.lembarSaham 
    }
    const id = this.props.match.params.id
    API.investFundraise(id, data).then(res =>{
      Swal.fire({
        icon: 'success',
        title: `Saham berhasil di beli`,
        showConfirmButton: false,
        timer: 1500
      }).then(()=> {
        console.log(res)
      } )
    }).catch(err =>{
      this.setState({loading : false})
      Swal.fire({
        icon: 'error',
        title: `Saham gagal di beli`,
        text : `${Object.entries(err.response.data)} \n`
      })
      console.log(err.response)
    })
  }

  investConfirm = () => {
    const {name} = this.state.company
    const {code, price_per_share, shares_remaining} = this.state.data
    return(
      <div className="modal-confirm-invest">
        <i
          className="fas fa-times"
          onClick={() =>
            this.setState({ modalConfirm: !this.state.modalConfirm })
          }
        ></i>
        <img src={modalinvest} alt="modinv" />
        <div className="confirm">
          <p className="title">Konfirmasi pembelian Saham</p>
          <p className="inliner">
            {" "}
            <span>Saham</span> <span className="val"> {name}</span>
          </p>
          <p className="inliner">
            {" "}
            <span>Kode Saham</span> <span className="val"> {code}</span>
          </p>
          <p className="inliner">
            {" "}
            <span>Harga Saham</span> <span className="val"> Rp. {Math.round(price_per_share)}</span>
          </p>
          <p className="inliner">
            {" "}
            <span>Jumlah Saham</span> <span className="val"> {shares_remaining}</span>
          </p>
          <p className="inliner">
            {" "}
            <span>Total</span>{" "}
            <span className="val" style={{ fontWeight: 600, color: "black" }}>
              {" "}
              Rp. {this.state.lembarSaham * Math.round(price_per_share)}
            </span>
          </p>
          {/* <Button onClick={() => this.setState({ modalInputPin: true })}> */}
          <Button onClick={() => this.onBuySaham(this.state.lembarSaham * price_per_share)}>
            LANJUTKAN
          </Button>
        </div>
      </div>
    );
  }

  closeModPin = () => this.setState({ modalInputPin: false });
  closeModResPin = () => this.setState({ modalInputResetPin: false });
  closeModOtp = () => this.setState({ modalInputOtp: false });
  closeModSecPin = () => this.setState({ modalInputSecurePin: false });

  render() {

    console.log(this.state.data)
    const {min_invest_share,price_per_share} = this.state.data
    return (
      <>
        <Loading onOpen={this.state.loading} />

        <ModalTemplate
          onOpen={this.state.modalConfirm}
          // onClose={this.handleModalClose}
          component={this.investConfirm}
        />
        <ModalTemplate
          onOpen={this.state.modalInputPin}
          component={() =>
            InputPin(this.closeModPin, () =>
              this.setState({ modalInputResetPin: true })
            )
          }
        />
        <ModalTemplate
          onOpen={this.state.modalInputResetPin}
          component={() =>
            ResetPin(this.closeModResPin, () =>
              this.setState({ modalInputOtp: true })
            )
          }
        />
        <ModalTemplate
          onOpen={this.state.modalInputOtp}
          component={() => (
            <VerifyOtp
              close={this.closeModOtp}
              openModalNewPin={() =>
                this.setState({ modalInputSecurePin: true })
              }
            />
          )}
        />
        <ModalTemplate
          onOpen={this.state.modalInputSecurePin}
          component={() => SecurePin(this.closeModSecPin)}
        />

        <Navbar />
        <div className="invest">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pasal">
                <p className="title">
                  PERATURAN POJK 37 - 2018 - PASAL 42 - Ayat 2
                </p>
                <p className="desc">
                  Setiap pemodal dengan penghasilan sampai dengan Rp.500.000.000
                  (lima ratus juta rupiah) per tahun, maka batas maksimal
                  investasi pemodal tersebut di INVESTX adalah 5% dari jumlah
                  pendapatan per tahun.
                  <br />
                  <br />
                  contoh : jika pendapatan pertahun anda adalah Rp. 100.000.000
                  maka batas maksimal investasi anda di INVESTX adalah Rp.
                  5.000.000
                  <br />
                  <br />
                  Kriteria batasan kepemilikan saham diatas tidak berlaku jika :
                  <br />
                  <br />
                  1. pemodal merupakan badan hukum
                  <br />
                  <br />
                  2. pemodal memiliki rekening efek paling sedikit 2 (dua) tahun
                  <br />
                  <br />
                  Permohonan penghapusan limit kepemilikan saham dapat diajukan
                  melalui email customer support
                  (customer.support@investx.co.id), dengan melampirkan bukti
                  kepemilikan rekening efek atau bukti SK Kemenkumham badan
                  usaha
                </p>
              </div>
              <div className="col-md cal-invest"
                style={{
                  backgroundImage: `url(${payment1}), url(${payment2})`,
                }}
              >
                <div className="calculator">
                  <p className="title">
                    Masukan Jumlah saham yang ingin dibeli
                  </p>
                  <p className="desc">
                    *Jumlah saham yang dapat di beli Berlaku kelipatan <br />{" "}
                    contoh : 8, 16, 32 dan seterusnya.
                  </p>
                  <div className="wrap-cal">
                    <Fab onClick={() => this.setState({ lembarSaham: this.state.lembarSaham / 2,})}
                      disabled={this.state.lembarSaham <= min_invest_share}
                    >
                      <i className="fas fa-minus"></i>
                    </Fab>
                    <input type="number" readOnly value={this.state.lembarSaham} />
                    <Fab onClick={() =>this.setState({lembarSaham: this.state.lembarSaham * 2,})}
                    >
                      <i className="fas fa-plus"></i>
                    </Fab>
                  </div>
                  <p className="info">Min. {min_invest_share} lembar</p>
                  <p className="title">Total Harga saham</p>
                  <p className="total">
                    Rp. { helper.idr(Math.round(this.state.lembarSaham *price_per_share))}
                  </p>
                  <Button
                    classes={{
                      root: "beli-saham",
                    }}
                    onClick={() => this.setState({ modalConfirm: true })}
                  >
                    BELI SAHAM
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Ojk />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     dataDetail :  state.dataDetail,
//     // dataDetailCompany :  state.dataDetailCompany,
//     // dataDetailTags :  state.dataDetailTags,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendDetail: (data) => {
//       const action = { type: "POST_DETAIL", data : data };
//       dispatch(action);
//     },
//     sendDetailCompany: (data) => {
//       const action = { type: "POST_DETAIL_COMPANY", data : data };
//       dispatch(action);
//     },
//     sendDetailTags: (data) => {
//       const action = { type: "POST_DETAIL_TAGS", data : data };
//       dispatch(action);
//     },
//   };
// };

// export default connect(mapStateToProps, {})(Invest);
export default Invest

