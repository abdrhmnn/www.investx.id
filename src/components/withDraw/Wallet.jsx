import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card } from "@material-ui/core";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import wallet from "../../images/withdraw/wallet.svg";
import tarik from "../../images/withdraw/tarik.svg";
import topup from "../../images/withdraw/topup.svg";

class Wallet extends Component {
  render() {
    const styleSaran = {
      display: 'inline-block',
      border: 'none',
      marginTop: '20px',
      marginRight: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      background: '#DEDEDE',
      fontSize: '9pt',
    }

    const jumlahSaran = [
      "20.000.000",
      "30.000.000",
      "40.000.000",
      "50.000.000",
      "60.000.000",
      "70.000.000",
    ];

    const listSaran = jumlahSaran.map((saran) => {
      return <Button style={styleSaran}>{saran}</Button>;
    });

    return (
      <div className="all-forms-style wallet">
        <div className="bg">
          <div className="bg-round"></div>
        </div>
        <Link to="/">
          <div className="back-button">
            <img src={arrowback} alt="" />
          </div>
        </Link>
        <div className="logo-invest">
          <img src={logo} alt="" />
        </div>
        <div className="container withdraw">
          <p className="title-wallet title">MY WALLET</p>
          <div className="row">
            <div className="col-md-4 ">
              <div className=" box-left p-3">

                <div className="box-saldo">
                  <div className=""><img className="dompet-img" src={wallet} alt="" /></div>
                  <div className="ml-3 total">
                    <span className="total-saldo m-0">Total Saldo</span>
                    <p className="mb-0"> Rp. 20.000.000</p>
                  </div>
                </div>

                <div className="box-detail-saldo">
                  <p className="saldo-detail">
                    Saldo Rupiah <br /> <span>Rp. 15,000.000</span>
                  </p>
                  <p className="saldo-detail">
                    Total Saham <br /> <span>Rp. 5,000.000</span>
                  </p>
                </div>

                <div className="know-more">
                  <span>Pelajari Lebih Lanjut</span>
                  <a href="#"> disini</a></div>


              </div>
            </div>

            <div className="col-md-8 ">
              <div className="box-right">
                <div className="row">
                  <div className="col-md-9 input-nominal">
                    <p className="title-input">Nominal Top Up</p>
                    <div className="box-input">
                      <p>Rp</p>
                      <input type="number" />
                    </div>
                  </div>
                  <div className="col-md buttons-topup">
                    <Link to="/topup">
                      <Button className='blue'><span>TOP UP</span></Button>
                    </Link>
                    <Link to="/withdraw">
                      <Button className='line-blue'><span>WITHDRAW</span></Button>
                    </Link>
                  </div>
                </div>
                <div className="list-saran">{listSaran}</div>
              </div>

              <div className="box-right mt-4">
                <div className="title-alt riwayat-trans"> <b>Riwayat Transaksi</b> </div> <br />
                <div className="menu">
                  <a
                    style={{
                      background: "#4CB5EF",
                      color: "white",
                    }}
                  >
                    Semua
                  </a>
                  <a>Pembelian</a>
                  <a>Top Up</a>
                  <a>WithDraw</a>
                </div>

                <div className="box-isi">

                  <div className="kotak berhasil">

                    <p className="tanggal-now">10 Aug 2020 | 08:30</p><br />
                    <div className="row">
                      <div className="col-md-8 input-nominal">
                        <p className="title-transaksi">No Transaksi</p>
                        <p className="no-transaksi">
                          (IVR/204151525/XX/VII/3333222626)
                          </p>
                      </div>
                      <div className="col-md total-pemb">
                        <p className="title-transaksi">Total Pembayaran <span>Rp 20.000.000</span></p>
                        <p className="no-transaksi">
                          Lihat Detail Transaksi
                          </p>
                      </div>
                    </div>

                    <div className="detail-kotak row mt-2">
                      <div className="col-md-4">
                        <img src={topup} className="mt-3" alt="" />
                        <span className="title-nominal">Top Up</span>
                        <p className="jumlah-nominal">+20.000.000</p>

                      </div>
                      <div className="col-md-4 total-pemb">
                        <span className="status-nom"> Status</span>
                        <p className="status-">Transaksi Berhasil</p>
                      </div>
                      <div className="col-md but-topup">
                        <Button className='topup-but'>Top Up Lagi</Button>
                      </div>
                    </div>
                  </div>

                  {/* kotak batal */}
                  <div className="kotak batal">

                    <p className="tanggal-now">10 Aug 2020 | 08:30</p><br />
                    <div className="row">
                      <div className="col-md-8 input-nominal">
                        <p className="title-transaksi">No Transaksi</p>
                        <p className="no-transaksi">
                          (IVR/204151525/XX/VII/3333222626)
                          </p>
                      </div>
                      <div className="col-md total-pemb">
                        <p className="title-transaksi">Total Pembayaran <span>Rp 20.000.000</span></p>
                        <p className="no-transaksi">
                          Lihat Detail Transaksi
                          </p>
                      </div>
                    </div>

                    <div className="detail-kotak row mt-2">
                      <div className="col-md-4">
                        <img src={tarik} className="mt-3" alt="" />
                        <span className="title-nominal">Penarikan</span>
                        <p className="jumlah-nominal">+20.000.000</p>

                      </div>
                      <div className="col-md-4 total-pemb">
                        <span className="status-nom"> Status</span>
                        <p className="status-">Transaksi Dibatalkan</p>
                      </div>
                      <div className="col-md">
                        <Button className='topup-but'>Tarik Ulang Lagi</Button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Wallet;
