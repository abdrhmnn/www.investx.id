import React, { Component } from "react";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";

import plusblue from "../../../images/profile/plusblue.svg";

class BusinessIndex extends Component {
  render() {
    const steps = ["Under Review", "Approved", "Pra-Listing", "Listing"];
    return (
      <div className="profile-business-menu">
        <div className="box-title">
          <p>BISNIS SAYA</p>
          <Button>
            Daftarkan Bisnis <img src={plusblue} alt="daftar bisnis" />
          </Button>
        </div>

        {this.props.businesses &&
          this.props.businesses.map((business) => (
            <div className="list-businessbox" key={business.nonce}>
              <div className="listheader">
                <div className="box-head">
                  <img
                    className="comp-logo"
                    src="https://placeimg.com/640/480/tech"
                    alt="logo"
                  />
                </div>
                <div className="box-head">
                  <p className="title">Nama Perusahaan</p>
                  <p className="value">{business.trademark}</p>
                </div>
                <div className="box-head">
                  <p className="title">Kode pengajuan</p>
                  <p className="value">{business.nonce}</p>
                </div>
                <div className="box-head">
                  <p className="title">Tanggal pengajuan</p>
                  <p className="value">
                    {new Date(business.created_at.utc).toLocaleDateString(
                      'id-id',
                      { day: 'numeric', month: 'long', year: 'numeric' }
                    )}
                  </p>
                </div>
                <div className="box-head">
                  <p className="title">Komentar</p>
                  <p className="value">-</p>
                </div>
                <div className="box-head">
                  <p className="action">Edit</p>
                  <p className="action">Hapus</p>
                </div>
              </div>

              <div className="listvalue">
                <div className="listval-child">Status</div>
                <div className="listval-stepper">
                  <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div>
                {/* <div className='listval-child'>Detail</div> */}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default BusinessIndex;
