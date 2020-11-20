import React, { Component } from "react";
import mailbox from "../../images/mailbox.png";

import { Button } from "@material-ui/core";
import Swal from "sweetalert2";

class Otp extends Component {
  state = {
    box1: "",
    box2: "",
    box3: "",
    box4: "",
  };
  handleChange = (e) => {
    let boxes = ["box1", "box2", "box3", "box4"];
    for (let i = 0; i < 3; i++) {
      if (e.target.name === boxes[i] && e.target.value !== "") {
        this[`boxFoc${i + 2}`].focus();
      }
    }

    const regex = /[0-9]/g;
    var val = e.target.value.match(regex);
    this.setState(
      {
        [e.target.name]: val == null ? "" : e.target.value,
      },
      () => {
        var { box1, box2, box3, box4 } = this.state;
        if (box1 !== "" && box2 !== "" && box3 !== "" && box4 !== "") {
        }
      }
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();

    var { box1, box2, box3, box4 } = this.state;
    let inCode = box1 + box2 + box3 + box4;
    const validCode = 1234;
    if (Number(inCode) === validCode) {
      this.props.history.push("/invoice");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Verifikasi OTP gagal!`,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="otp">
          <div className="box-otp">
            <img src={mailbox} alt="" />
            <h2>Verifikasi Kode OTP</h2>
            <p>
              Hi, Maria.. untuk melanjutkan transaksi, kamu harus memasukkan
              kode OTP
            </p>
            <p className="desc">Kode verifikasi telah dikirimkan ke nomor</p>
            <p className="num">0 8 5 7 * * * * 1 2 1 2</p>
            <form onSubmit={this.handleSubmit} id="otp">
              <input
                required
                ref={(input) => {
                  this.boxFoc1 = input;
                }}
                type="number"
                maxLength="1"
                name="box1"
                value={this.state.box1}
                onChange={this.handleChange}
              />
              <input
                required
                ref={(input) => {
                  this.boxFoc2 = input;
                }}
                type="number"
                maxLength="1"
                name="box2"
                value={this.state.box2}
                onChange={this.handleChange}
              />
              <input
                required
                ref={(input) => {
                  this.boxFoc3 = input;
                }}
                type="number"
                maxLength="1"
                name="box3"
                value={this.state.box3}
                onChange={this.handleChange}
              />
              <input
                required
                ref={(input) => {
                  this.boxFoc4 = input;
                }}
                type="number"
                maxLength="1"
                name="box4"
                value={this.state.box4}
                onChange={this.handleChange}
              />
            </form>
            <Button type="submit" form="otp" className="verif">
              Verifikasi
            </Button>
            <p className="info">
              Belum menerima email aktivasi? <span>kirim ulang</span> dalam 30
              detik
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Otp;
