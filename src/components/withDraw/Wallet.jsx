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
    const jumlahSaran = [
      "20.000.000",
      "30.000.000",
      "40.000.000",
      "50.000.000",
      "60.000.000",
      "70.000.000",
    ];

    const listSaran = jumlahSaran.map((saran) => {
      return <Button>{saran}</Button>;
    });

    const butBlue = {
      marginBottom: "10px",
      width: "197px",
      height: "36px",
      fontSize: "14px",
      textTransform: "uppercase",
      color: "#ffffff",
      background: "#01579b",
      borderRadius: "8px",
      border: "none",
      outline: "none",
    };
    const but = {
      width: "100px",
      width: "197px",
      height: "36px",
      fontSize: "14px",
      color: "#0288d1",
      borderRadius: "8px",
      border: "1px solid #0288d1",
      backgroundColor: "white",
      fontSize: "16px",
      outline: "unset !important",
    };
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
          <p className="title">MY WALLET</p>
        </div>
        <div className="box saldo">
          <img className="wallet" src={wallet} alt="" />
          <span className="total-saldo">Total Saldo</span>
          <div className="uang jumlah-uang">
            Rp. <span className="jumlah">20.000.000</span>
          </div>

          <div className="wallet-bawah">
            <div className="kiri uang-saldo-rupiah">
              <div className="uang uang-jumlah-saldo">
                <span className="jumlah" style={{ fontWeight: "400" }}>
                  Saldo Rupiah
                </span>
              </div>

              <div className="uang saldo-black">
                Rp. <span className="jumlah">15.000.000</span>
              </div>
            </div>

            <div className="kiri uang-ku">
              <div className="uang ku-ada">
                <span className="jumlah" style={{ fontWeight: "400" }}>
                  Total Rupiah
                </span>
              </div>

              <div className="uang ku-kan">
                Rp. <span className="jumlah">5.000.000</span>
              </div>
            </div>
            <br />

            <div className="know-more uang-lagi">
              <span className="jumlah" style={{ fontWeight: "400" }}>
                Pelajari Lebih Lanjut
              </span>
              <a href="#" style={{ color: "#01579B", fontWeight: "500" }}>
                {" "}
                disini
              </a>
            </div>
          </div>
        </div>
        <div className="box nominal">
          <div className="box-form-data">
            <div className="title-alt nomina">Nominal Top Up.</div>
            <div className="topup-div">
              <Link to="/topup-method">
                <Button className="but-blue" style={butBlue}>
                  TOP UP
                </Button>
              </Link>

              <Button className="but" style={but}>
                WITHDRAW
              </Button>
            </div>
            <div className="input-border-underline inputan-uang">
              <input type="number" name="username" />
            </div>

            <div className="geser button-saran-nih">{listSaran}</div>
          </div>
        </div>
        <div className="box riwayat">
          <div className="title-alt riwayat-trans">Riwayat Transaksi</div>
          <div className="menu">
            <a
              style={{
                background: "#4CB5EF",
                color: "white",
              }}
            >
              Semua
            </a>
            <a className="satu-link">Pembelian</a>
            <a className="dua-link">Top Up</a>
            <a className="tiga-link">With Draw</a>
          </div>

          <div className="card-history">
            <Card>
              <p className="tanggal-now">10 Aug 2020 | 08:30</p>
              <br />

              <div className="title-alt no-trans">No Transaksi</div>
              <p className="kode">(IVR/200804/XX/VII/469044911)</p>

              <div className="Total" style={{ borderLeft: "" }}>
                <div className="title-alt total-pemb">
                  Total Pembayaran{" "}
                  <span style={{ color: "#F27272" }}>Rp. 20.000.000</span>
                </div>
                <p className="lihat-detail-trans">Lihat Detail Transaksi</p>
              </div>
              <hr />
              <div>
                <div className="title-alt topup-yu">Top Up</div>
                <img src={topup} />
                <p className="nominal-topupx">+20.000.000</p>

                <div className="status">
                  <img />
                  <div className="title-alt status-ku">Status</div>
                  <p className="berhasil">Transaksi Berhasil</p>
                </div>
                <div className="pinggir-sikit">
                  <Button className="but" style={but}>
                    Top Up Lagi
                  </Button>
                </div>
                <hr />
              </div>

              <p className="tanggal-now">12 Aug 2020 | 00:30</p>
              <br />

              <div className="title-alt no-trans">No Transaksi</div>
              <p className="kode">(IVR/200804/XX/VII/469044911)</p>

              <div className="Total">
                <div className="title-alt total-pemb">
                  Total Pembayaran{" "}
                  <span style={{ color: "#F27272" }}>Rp. 20.000.000</span>
                </div>
                <p className="lihat-detail-trans">Lihat Detail Transaksi</p>
              </div>
              <hr />
            </Card>
            <div>
              <div className="title-alt topup-yu">Top Up</div>
              <img src={tarik} />
              <p className="nominal-topupx">-20.000.000</p>

              <div className="status">
                <img />
                <div className="title-alt status-ku">Status</div>
                <p className="gagal">Transaksi Dibatalkan</p>
              </div>
              <div className="pinggir-sikit">
                <Button className="but" style={but}>
                  Tarik Uang Lagi
                </Button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
