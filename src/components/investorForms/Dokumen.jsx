import React, { Component } from "react";

import InputFiles from "react-input-files";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import minifile from "../../images/formdokumen/minifile.svg";
import popktp from "../../images/formdokumen/popktp.svg";
import popselfie from "../../images/formdokumen/popselfie.svg";
import popnpwp from "../../images/formdokumen/popnpwp.svg";

import { InputText } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderInvestForm from "./HeaderInvestForm";

class Dokumen extends Component {
  state = {
    borderActive: "",
    modalFile: {},
  };

  borderBlue = (e) => {
    if (e.target.id.length !== 0) {
      console.log(e.target.id);
      this.setState({ borderActive: e.target.id });
      console.log();
    } else {
      console.log(e.target.id);
      console.log("kosong");
    }
  };

  handleFileUpload = (file, name) => {
    console.log("====================================");
    console.log(file[0]);
    console.log(name);
    console.log("====================================");
    this.setState({ modalFile: {} });
  };

  modalFileComp = () => {
    var indCode = this.state.modalFile.id;

    const codeModal = [
      {
        name: "ktp",
        title: "Foto Kartu Tanda Penduduk",
        desc:
          "Foto KTP milikmu seperti foto dibawah ini, perhatikan foto tidak terlalu gelap, dan tidak blur",
        image: popktp,
        button: () => (
          <InputFiles onChange={(files) => this.handleFileUpload(files, "ktp")}>
            <Button>Ok, Upload Sekarang</Button>
          </InputFiles>
        ),
      },
      {
        name: "selfie",
        title: "Foto Selfie KTP",
        desc:
          "Foto diri kamu dengan KTP seperti foto dibawah ini, usahakan foto tidak terlalu gelap dan tidak blur",
        image: popselfie,
        button: () => (
          <InputFiles
            onChange={(files) => this.handleFileUpload(files, "selfie")}
          >
            <Button>Ok, Upload Sekarang</Button>
          </InputFiles>
        ),
      },
      {
        name: "npwp",
        title: "Foto kartu NPWP",
        desc:
          "Foto NPWP milikmu seperti foto dibawah ini, perhatikan foto tidak terlalu gelap, dan tidak blur",
        image: popnpwp,
        button: () => (
          <InputFiles
            onChange={(files) => this.handleFileUpload(files, "npwp")}
          >
            <Button>Ok, Upload Sekarang</Button>
          </InputFiles>
        ),
      },
    ];
    return (
      <div
        className="mod-file"
        id="overlay"
        onClick={(e) =>
          e.target.id === "overlay" ? this.setState({ modalFile: {} }) : null
        }
      >
        <div className="box-mod">
          <p className="title-mod">{codeModal[indCode].title}</p>
          <p className="desc-mod">{codeModal[indCode].desc}</p>
          <img
            className={`popic ${codeModal[indCode].title}`}
            src={codeModal[indCode].image}
            alt="ktp"
          />
          {codeModal[indCode].button()}
          <p className="info">
            *File data <span>Pdf / Jpeg / PNG</span> dan tidak lebih dari{" "}
            <span>5MB</span>{" "}
          </p>
        </div>
      </div>
    );
  };

  onSubmit = ({ errors, isValid }) => {
    if (isValid) {
    } else {
      // `errors` is also an object!
      console.log("Something is wrong:", errors);
    }
  };

  render() {
    const initialValueObj = {
      noktp: "",
      nonpwp: "",
    };

    const schemaObj = Yup.object({
      noktp: Yup.string().required(),
      nonpwp: Yup.string().required(),
    });
    return (
      <div className="all-forms-style">
        {this.state.modalFile.open ? this.modalFileComp() : null}
        <HeaderInvestForm activeStep={3} />
        <div className="box-form-data">
          {/* ///////////////////FORMS//////////////////// */}
          <p className="title">Dokumen</p>

          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit} id="investorForm">
                <div className="row">
                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="No. KTP *"
                      type="text"
                      name="noktp"
                      errorsMessage={touched.noktp && errors.noktp}
                      error={touched.noktp && errors.noktp}
                    />
                  </div>
                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="No. NPWP *"
                      type="text"
                      name="nonpwp"
                      errorsMessage={touched.nonpwp && errors.nonpwp}
                      error={touched.nonpwp && errors.nonpwp}
                    />
                  </div>

                  <div className="col-md-12">
                    <p className="info-dok">
                      * Jika Anda belum memiliki NPWP dan ingin berinvestasi,
                      bisa dikosongkan terlebih dahulu. Namun,
                      <span>
                        {" "}
                        NPWP merupakan syarat wajib untuk bisa melakukan
                        penarikan deviden pada Saldo InvestX.{" "}
                      </span>
                      Anda bisa membuat NPWP secara online di{" "}
                      <a href="#" target="__blank">
                        ereg.pajak.go.id
                      </a>
                    </p>
                  </div>

                  <p className="tit-unggah w-100">
                    Unggah foto :
                    <ReactLoading
                      type={"spokes"}
                      color={"#3D5215"}
                      height={21}
                      width={21}
                    />
                  </p>

                  <div className="box-upload-dok col-md-12">
                    <div>
                      <p className="tag">Foto KTP *</p>
                      <Button
                        type="button"
                        onClick={() =>
                          this.setState({
                            modalFile: {
                              open: true,
                              id: 0,
                            },
                          })
                        }
                      >
                        Choose File <img src={minifile} alt="file" />
                      </Button>
                    </div>
                    <div>
                      <p className="tag"> Foto selfie dengan KTP *</p>
                      <Button
                        type="button"
                        onClick={() =>
                          this.setState({
                            modalFile: {
                              open: true,
                              id: 1,
                            },
                          })
                        }
                      >
                        Choose File <img src={minifile} alt="file" />
                      </Button>
                    </div>
                    <div>
                      <p className="tag">NPWP</p>
                      <Button
                        type="button"
                        onClick={() =>
                          this.setState({
                            modalFile: {
                              open: true,
                              id: 2,
                            },
                          })
                        }
                      >
                        Choose File <img src={minifile} alt="file" />
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>

          {/* ///////////////////FORMS END//////////////////// */}
        </div>

        <div className="foot-data-diri">
          <p className="agreement">
            *Saya menjamin bahwa informasi yang saya cantumkan diatas adalah
            benar dan siap bertanggung jawab atas segala konsekuensi yang
            terjadi di kemudian hari, serta memiliki kemampuan analisis resiko
            terhadap saham penerbit dan memenuhi kriteria pemodal sesuai
            peraturan yang berlaku.
          </p>
          <Link to="/investor-form-bank">
            <Button type="submit" form="investorForm">
              SIMPAN & LANJUTKAN
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dokumen;
