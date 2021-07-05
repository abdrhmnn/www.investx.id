import React, { Component } from 'react';
import { Button, Stepper, Step, StepLabel } from '@material-ui/core';

import plusblue from '../../../images/profile/plusblue.svg';
import Swal from 'sweetalert2';
import API from '../../../api';

const Stepping = ({ companyStatus }) => {
  const steps = ['Under Review', 'Approved', 'Published'];
  let stepCount = 1;
  if (companyStatus.approved) stepCount = 2;
  if (companyStatus.published) stepCount = 3;
  if (companyStatus.rejected) {
    steps[2] = 'Rejected';
    stepCount = 3;
  }
  return (
    <Stepper activeStep={stepCount} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

class BusinessIndex extends Component {
  deleteCompany = async (id62) => {
    try {
      const deletedCompany = await API.deleteCompany(id62);
      Swal.fire(
        deletedCompany.data.message,
        'Company has been deleted',
        deletedCompany.data.status
      );
      const companiesResp = await API.getCompanies()
      this.props.refreshBusinesses(companiesResp.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
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
                  <img className="comp-logo" src={business.logo} alt="logo" />
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
                  <p
                    className="action"
                    onClick={() => {
                      Swal.fire({
                        title: 'Do you want to delete this company?',
                        showCancelButton: true,
                        confirmButtonText: `Yes`,
                      }).then(() => {
                        this.deleteCompany(business.id62);
                      });
                    }}
                  >
                    Hapus
                  </p>
                </div>
              </div>

              <div className="listvalue">
                <div className="listval-child">Status</div>
                <div className="listval-stepper">
                  <Stepping companyStatus={business.status} />
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
