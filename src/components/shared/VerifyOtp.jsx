import React from "react";
import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Button, Fab } from "@material-ui/core";
import { Formik } from "formik";
import mailbox from "../../images/mailbox.png";
import kuki from "../../helpers/kuki";
import API from "../../api";
import Swal from "sweetalert2";
import helper from "../../helpers/helper";

class VerifyOtp extends React.Component {
  state = {
    onStartCount: 30,
  };

  counting = () => {
    API.resendOtp()
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Sukses",
          text: "OTP berhasil dikirim ke nomor anda!",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "OTP gagal dikirim ke nomor anda!",
        });
      });
    const countdown = () =>
      this.setState({ onStartCount: this.state.onStartCount - 1 });
    const reset = (t) => this.setState({ onStartCount: t });
    helper.counter(this.state.onStartCount, countdown, reset);
  };

  render() {
    const { close, openModalNewPin } = this.props;

    return (
      <div className="pin_components">
        <div className="bg">
          <div className="bg-round"></div>
        </div>
        <Fab className="back-button" onClick={close}>
          <img src={arrowback} alt="" />
        </Fab>
        <div className="logo-invest">
          <img src={logo} alt="logo" />
        </div>

        <div className="box_inp_otp">
          <img src={mailbox} alt="" />
          <p className="title">Verifikasi Kode OTP</p>
          <p className="desc">Kode verifikasi telah dikirimkan ke nomor</p>
          <p className="num">
            {" "}
            <b>+{kuki.get("phone_number")}</b>{" "}
          </p>
          <Formik
            initialValues={{
              box1: "",
              box2: "",
              box3: "",
              box4: "",
              box5: "",
              box6: "",
            }}
            onSubmit={(val) => {
              // openModalNewPin()
              var { box1, box2, box3, box4, box5, box6 } = val;
              let otpCode = `${box1}${box2}${box3}${box4}${box5}${box6}`;
              console.log(otpCode);
              API.otp(otpCode)
                .then((res) => {
                  console.log(res);
                  Swal.fire({
                    icon: "success",
                    title: "Verifikasi OTP berhasil!",
                    showConfirmButton: false,
                    timer: 1500,
                  });

                  if (openModalNewPin) {
                    openModalNewPin();
                  } else {
                    window.location.href = "/";
                  }
                  kuki.set("status", {
                    phone: true,
                    email: kuki.get("status").email,
                  });
                })
                .catch((err) => {
                  console.log(err.response);
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Verifikasi OTP gagal!`,
                  });
                });
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit} id="otp">
                <input
                  required
                  onInput={(e) => e.target.nextElementSibling.focus()}
                  type="number"
                  maxLength="1"
                  name="box1"
                  value={values.box1}
                  onChange={handleChange}
                />
                <input
                  required
                  onInput={(e) => e.target.nextElementSibling.focus()}
                  type="number"
                  maxLength="1"
                  name="box2"
                  value={values.box2}
                  onChange={handleChange}
                />
                <input
                  required
                  onInput={(e) => e.target.nextElementSibling.focus()}
                  type="number"
                  maxLength="1"
                  name="box3"
                  value={values.box3}
                  onChange={handleChange}
                />
                <input
                  required
                  onInput={(e) => e.target.nextElementSibling.focus()}
                  type="number"
                  maxLength="1"
                  name="box4"
                  value={values.box4}
                  onChange={handleChange}
                />
                <input
                  required
                  onInput={(e) => e.target.nextElementSibling.focus()}
                  type="number"
                  maxLength="1"
                  name="box5"
                  value={values.box5}
                  onChange={handleChange}
                />
                <input
                  required
                  type="number"
                  maxLength="1"
                  name="box6"
                  value={values.box6}
                  onChange={handleChange}
                />
              </form>
            )}
          </Formik>
          <Button type="submit" form="otp">
            Verifikasi
          </Button>
          <p className="info">
            Belum menerima OTP aktivasi?
            {this.state.onStartCount === 30 ? (
              <span onClick={this.counting} style={{ cursor: "pointer" }}>
                {" "}
                Kirim Ulang
              </span>
            ) : (
              <span> {this.state.onStartCount} Detik</span>
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default VerifyOtp;
