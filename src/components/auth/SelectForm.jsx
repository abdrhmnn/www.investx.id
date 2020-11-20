import React, { Component } from "react";
import select from "../../images/bg/select.jpg";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import kuki from "../../helpers/cookie";
import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

class SelectForm extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    console.log("====================================");
    console.log(this.props.match.params.code);
    console.log("====================================");
    this.apiVerify();
  }

  apiVerify = () => {
    const body = { code: this.props.match.params.code };
    this.setState({ loading: true });
    API.verifyEmail(body)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Verifikasi Email berhasil!",
          showConfirmButton: false,
          timer: 1500,
        });
        kuki.set("status", { phone: kuki.get("status").phone, email: true });
        this.setState({ loading: false });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Verify Email gagal!",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            window.location.href = "/000";
          }
        });
      });

    console.log(kuki.get("status"));
    console.log(this.props.match.params.code);
  };

  render() {
    return (
      <div className="selectform" style={{ backgroundImage: `url(${select})` }}>
        <Loading onOpen={this.state.loading} />
        <div className="container box-con">
          <img className="bglog" src={logo} alt="icon" />

          <div className="box-select">
            <img src={logo} alt="icon" />
            <p className="title">Verifikasi email berhasil !</p>
            <p className="desc">Silakan isi formulir sesuai kebutuhan kamu</p>
            <div className="wbut">
              <Link to="/investor-form-data-diri">
                <Button className="inv">Saya adalah Investor</Button>
              </Link>
              <Link to="/startup-form-data-diri">
                <Button className="start">Ajukan Pendanaan</Button>
              </Link>
            </div>
            <hr className="mid" />
            <span className="atau">Atau</span>
            <br />
            <Link to="/how">
              <Button className="bfun">Pelajari Selengkapnya</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectForm;
