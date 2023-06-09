import React, { Component } from "react";
import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Fab } from "@material-ui/core";
import StepsStartUp from "./StepsStartUp";
import { Link } from "react-router-dom";
import kuki from "../../helpers/kuki";

class HeaderStartupForm extends Component {
  render() {
    const { activeStep, backPath} = this.props;
    return (
      <>
        <div className="bg">
          <div className="bg-round"></div>
        </div>
        <Link to={backPath}>
          <Fab className="back-button">
            <img src={arrowback} alt="" />
          </Fab>
        </Link>
        <div className="logo-invest">
          <img src={logo} alt="" />
        </div>

        <p className="title">Selamat datang {kuki.get("full_name")}</p>
        <p className="desc">
          {" "}
          Terima kasih telah mendaftar di InvestX. <br /> Silahkan lengkapi
          daftar diri anda untuk mengajukan funding
        </p>

        <StepsStartUp active={activeStep} />
      </>
    );
  }
}

export default HeaderStartupForm;
