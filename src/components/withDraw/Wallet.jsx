import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import wallet from "../../images/withdraw/wallet.svg";
import tarik from "../../images/withdraw/tarik.svg";
import topup from "../../images/withdraw/topup.svg";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
    };
  }
  render() {
    const styleSaran = {
      display: "inline-block",
      border: "none",
      marginTop: "20px",
      marginRight: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
      background: "#DEDEDE",
      fontSize: "9pt",
    };

    const menu = [
      {
        id: 1,
        category: "topup",
        tanggal: "10 Aug 2020",
        jam: "08:30",
        transaksi:"(IVR/204151525/XX/VII/3333222626)",
        pemb:"20.000.000",
        nom:"20.000.000",
        status:"berhasil",
      },
      {
        id: 2,
        category: "pembelian",
        tanggal: "10 Aug 2020",
        jam: "08:30",
        transaksi:"(IVR/204151525/XX/VII/3333222626)",
        pemb:"20.000.000",
        nom:"20.000.000",
        status:"Dibatalkan",
      },
      {
        id: 3,
        category: "pembelian",
        tanggal: "10 Aug 2020",
        jam: "08:30",
        transaksi:"(IVR/204151525/XX/VII/3333222626)",
        pemb:"20.000.000",
        nom:"20.000.000",
        status:"Dibatalkan",
      },
      {
        id: 4,
        category: "topup",
        tanggal: "10 Aug 2020",
        jam: "08:30",
        transaksi:"(IVR/204151525/XX/VII/3333222626)",
        pemb:"20.000.000",
        nom:"20.000.000",
        status:"Dibatalkan",
      }
    ];

    return (
      <div className="all-forms-style wallet">
        <div className="bg">
          <div className="bg-round"></div>
        </div>
        <Link onClick={() => this.props.history.goBack()}>
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
                  <div className="">
                    <img className="dompet-img" src={wallet} alt="" />
                  </div>
                  <div className="ml-3 total">
                    <span className="total-saldo m-0">Total Saldo</span>
                    <p className="mb-0">Rp. 20.000.000</p>
                  </div>
                </div>
                <div className="box-detail-saldo">
                  <p className="saldo-detail">
                    Saldo Rupiah
                    <br />
                    <span>Rp. 15,000.000</span>
                  </p>
                  <p className="saldo-detail">
                    Total Saham
                    <br />
                    <span>Rp. 5,000.000</span>
                  </p>
                </div>

                <div className="know-more">
                  <span>Pelajari Lebih Lanjut</span>
                  <a href="#"> disini</a>
                </div>
              </div>
            </div>

            <div className="col-md-8 ">
              <div className="box-right topup-box">
                <div className="row">
                  <div className="col-md-9 input-nominal">
                    <p className="title-input">Nominal Top Up</p>
                    <div className="box-input">
                      <p>Rp</p>
                      <input
                        type="number"
                        class="textview"
                        name="textview"
                        value={this.state.input}
                        id="input-saran"
                      />
                    </div>
                  </div>
                  <div className="list-saran-mobile">
                    <Button
                      style={styleSaran}
                      onClick={() => this.setState({ input: 20000000 })}
                    >
                      20.000.000
                    </Button>
                    <Button
                      style={styleSaran}
                      onClick={() => this.setState({ input: 30000000 })}
                    >
                      30.000.000
                    </Button>
                    <Button
                      style={styleSaran}
                      onClick={() => this.setState({ input: 40000000 })}
                    >
                      40.000.000
                    </Button>
                    <Button
                      style={styleSaran}
                      onClick={() => this.setState({ input: 50000000 })}
                    >
                      50.000.000
                    </Button>
                    <Button
                      style={styleSaran}
                      onClick={() => this.setState({ input: 60000000 })}
                    >
                      60.000.000
                    </Button>
                    <Button
                      style={styleSaran}
                      onClick={() => this.setState({ input: 70000000 })}
                    >
                      70.000.000
                    </Button>
                  </div>
                  <div className="col-md buttons-topup">
                    <Link to="/topup">
                      <Button className="blue">
                        <span>TOP UP</span>
                      </Button>
                    </Link>
                    <Link to="/withdraw">
                      <Button className="line-blue">
                        <span>WITHDRAW</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <div class="list-saran">
                  <Button
                    style={styleSaran}
                    onClick={() => this.setState({ input: 20000000 })}
                  >
                    20.000.000
                  </Button>
                  <Button
                    style={styleSaran}
                    onClick={() => this.setState({ input: 30000000 })}
                  >
                    30.000.000
                  </Button>
                  <Button
                    style={styleSaran}
                    onClick={() => this.setState({ input: 40000000 })}
                  >
                    40.000.000
                  </Button>
                  <Button
                    style={styleSaran}
                    onClick={() => this.setState({ input: 50000000 })}
                  >
                    50.000.000
                  </Button>
                  <Button
                    style={styleSaran}
                    onClick={() => this.setState({ input: 60000000 })}
                  >
                    60.000.000
                  </Button>
                  <Button
                    style={styleSaran}
                    onClick={() => this.setState({ input: 70000000 })}
                  >
                    70.000.000
                  </Button>
                </div>
              </div>

              <div className="box-right mt-4">
                <div className="title-alt riwayat-trans">
                  <b>Riwayat Transaksi</b>
                </div>
                <br />
                 <div className="menu">
                  <Button type="button" data-id="semua" />Semua</Button>
                  <Button type="button" data-id="pembelian" />Pembelian</Button>
                  <Button type="button" data-id="topup" />Top Up</Button>
                  <Button type="button" data-id="withdraw" />WithDraw</Button>
                </div>

                <div className="menu-mobile">
                 <Button type="button" data-id="semua" />All</Button>
                  <Button type="button" data-id="pembelian" />Pembelian</Button>
                  <Button type="button" data-id="topup" />Top Up</Button>
                  <Button type="button" data-id="withdraw" />WithDraw</Button>
                </div>

                <div className="box-isi">
                  <div className="kotak berhasil">
                    <p className="tanggal-now">10 Aug 2020 | 08:30</p>
                    <br />
                    <div className="row">
                      <div className="col-md-8 input-nominal">
                        <p className="title-transaksi">No Transaksi</p>
                        <p className="no-transaksi">
                          (IVR/204151525/XX/VII/3333222626)
                        </p>
                      </div>
                      <div className="col-md total-pemb">
                        <p className="title-transaksi">
                          Total Pembayaran
                          <span> Rp 20.000.000</span>
                        </p>
                        <p className="no-transaksi">Lihat Detail Transaksi</p>
                      </div>
                    </div>

                    <div className="detail-kotak row mt-2">
                      <div className="col-md-4">
                        <img src={topup} className="mt-3" alt="" />
                        <span className="title-nominal">Top Up</span>
                        <p className="jumlah-nominal">+20.000.000</p>
                      </div>
                      <div className="col-md-4 total-pemb">
                        <span className="status-nom">Status</span>
                        <p className="status-">Transaksi Berhasil</p>
                      </div>
                      <div className="col-md but-topup">
                        <Button className="topup-but">Top Up Lagi</Button>
                      </div>
                    </div>
                  </div>

                  {/* kotak batal */}
                  <div className="kotak batal">
                    <p className="tanggal-now">10 Aug 2020 | 08:30</p>
                    <br />
                    <div className="row">
                      <div className="col-md-8 input-nominal">
                        <p className="title-transaksi">No Transaksi</p>
                        <p className="no-transaksi">
                          (IVR/204151525/XX/VII/3333222626)
                        </p>
                      </div>
                      <div className="col-md total-pemb">
                        <p className="title-transaksi">
                          Total Pembayaran
                          <span> Rp 20.000.000</span>
                        </p>
                        <p className="no-transaksi">Lihat Detail Transaksi</p>
                      </div>
                    </div>

                    <div className="detail-kotak row mt-2">
                      <div className="col-md-4">
                        <img src={tarik} className="mt-3" alt="" />
                        <span className="title-nominal">Penarikan</span>
                        <p className="jumlah-nominal">-20.000.000</p>
                      </div>
                      <div className="col-md-4 total-pemb">
                        <span className="status-nom">Status</span>
                        <p className="status-">Transaksi Dibatalkan</p>
                      </div>
                      <div className="col-md">
                        <Button className="topup-but">Tarik Ulang Lagi</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
