import React, { Component } from "react";
import {  CheckCircle} from 'react-feather';

import InputFiles from "react-input-files";
// import ReactLoading from "react-loading";
// import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import minifile from "../../images/formdokumen/minifile.svg";
import popktp from "../../images/formdokumen/popktp.svg";
import popselfie from "../../images/formdokumen/popselfie.svg";
import popnpwp from "../../images/formdokumen/popnpwp.svg";

import { InputText } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderInvestForm from "./HeaderInvestForm";
import imageFileToBase64 from 'image-file-to-base64-exif'

import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

import { ToastContainer, toast } from 'react-toastify';
import HeaderStartupForm from "../startUpForms/HeaderStartupForm";
import { Redirect } from "react-router-dom";

class Dokumen extends Component {
  state = {
    "id_card": null,
    "id_card_selfie": null,
    "npwp": null,
    modalFile: {},
    loading : false,
    pageName: 'Dokumen',
    pageNameStartUp: 'Dokumen Calon Penerbit',
    isStartUp : window.location.pathname === "/startup-form-dokumen",
    isRedirect : false
  };

  componentDidMount(){
    this.checkProfile()
  }

  checkProfile = () =>{
    this.setState({loading : true})
    const keyCheck = 'is_document_complete'
    API.getProfileCheck().then(res=>{
      if (res.data.profile[`${keyCheck}`]) {
        this.setState({ isRedirect: true });
      }else{
        this.setState({loading : false})
      }
    }).catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Error 500',
        showConfirmButton: true,
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
    })
  }

  apiFileToLink = (name , value, initialName)=>{
    const body ={
      "name": name,
      "file_base64": value
    }
    API.refPostFile(body).then(res =>{
      console.log(res.data.url, 'INI HASIL URLNYA')
      this.setState({
        [name] : {url : res.data.url, name : initialName},
        loading : false
      })
    }).catch(err=>{
      this.setState({loading: false})
      console.log(err.response)
      Swal.fire({
        icon: 'error',
        title: 'Gagal upload file',
        showConfirmButton: true,
      })
    })

  }

  handleFileUpload = (file, name) => {
    this.setState({loading: true})
    console.log(file[0].name);
    const initialName = file[0].name
    const maxWidth = 800
    const maxHeight = 400
    const quality = 0.9
    imageFileToBase64(file[0], maxWidth, maxHeight, quality).then((res)=>{
      this.apiFileToLink(name, res, initialName )
          // console.log(res)
    })
    this.setState({ modalFile: {} });
  };

  modalFileComp = () => {
    var indCode = this.state.modalFile.id;
    const codeModal = [
      {
        name: "ktp",
        title: "Foto Kartu Tanda Penduduk",
        desc:"Foto KTP milikmu seperti foto dibawah ini, perhatikan foto tidak terlalu gelap, dan tidak blur",
        image: popktp,
        button: () => (
          <InputFiles onChange={(files) => this.handleFileUpload(files, "id_card")}>
            <Button>Ok, Upload Sekarang</Button>
          </InputFiles>
        ),
      },
      {
        name: "selfie",
        title: "Foto Selfie KTP",
        desc:"Foto diri kamu dengan KTP seperti foto dibawah ini, usahakan foto tidak terlalu gelap dan tidak blur",
        image: popselfie,
        button: () => (
          <InputFiles onChange={(files) => this.handleFileUpload(files, "id_card_selfie")}>
            <Button>Ok, Upload Sekarang</Button>
          </InputFiles>
        ),
      },
      {
        name: "npwp",
        title: "Foto kartu NPWP",
        desc:"Foto NPWP milikmu seperti foto dibawah ini, perhatikan foto tidak terlalu gelap, dan tidak blur",
        image: popnpwp,
        button: () => (
          <InputFiles onChange={(files) => this.handleFileUpload(files, "npwp")}>
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


  render() {
    console.log(this.state)
    const initialValueObj = {
        "id_card_num": "",
        "npwp_num": "",
    }
    const schemaObj = Yup.object({
      id_card_num: Yup.string().required().length(16, 'This field has to be exactly 16 characters!'), 
      npwp_num: Yup.string().length(16, 'This field has to be exactly 16 characters!')
    });

    if (this.state.isRedirect) {
      const nextLink = '/investor-form-bank';
      const nextLinkStartUp = '/startup-form-informasi-perusahaan';
      return (
        <Redirect to={this.state.isStartUp ? nextLinkStartUp : nextLink} />
      );
    }

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading} />
        {this.state.modalFile.open ? this.modalFileComp() : null}
        {
          this.state.isStartUp ?
          <HeaderStartupForm activeStep={2} />
          :
          <HeaderInvestForm backPath='/investor-form-pendidikan-pekerjaan' activeStep={3} />
        }
        <div className="box-form-data">
          {/* ///////////////////FORMS//////////////////// */}
          <p className="title">{this.state.isStartUp ? this.state.pageNameStartUp : this.state.pageName}</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              const body = {
                "id_card_num": val.id_card_num,
                "npwp_num": val.npwp_num,
                "id_card": this.state.id_card? this.state.id_card.url : toast.warn("Silahkan isi Foto KTP dahulu") ,
                "id_card_selfie": this.state.id_card_selfie? this.state.id_card_selfie.url : toast.warn("Silahkan isi Foto selfie dengan KTP dahulu") ,
                "npwp": this.state.npwp? this.state.npwp.url : toast.warn("Silahkan isi Foto NPWP dahulu") 
              }
              if (this.state.id_card || this.state.id_card_selfie || this.state.npwp) {
                API.postDocument(body).then(res =>{
                  this.setState({loading : true})
                  console.log(res)
                  Swal.fire({
                    icon: 'success',
                    title: `Data ${this.state.isStartUp ? this.state.pageNameStartUp : this.state.pageName} berhasil di simpan`,
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=> this.props.history.push( this.state.isStartUp ? '/startup-form-informasi-perusahaan' : '/investor-form-bank'))
                }).catch(err =>{
                  this.setState({loading : false})
                  Swal.fire({
                    icon: 'error',
                    title: `Data ${this.state.isStartUp ? this.state.pageNameStartUp : this.state.pageName} gagal di simpan`,
                    text : `${Object.entries(err.response.data)} \n`
                  })
                  console.log(err.response)
                })
                
              }
              // console.log(body);
            }}
          >
            {({ handleSubmit, errors, touched }) => {
              return(
                <form onSubmit={handleSubmit} id="investorForm">
                  <div className="row">
                    <div className="col-md-12">
                      <Field
                        as={InputText}
                        label="No. KTP"
                        required
                        type="text"
                        name="id_card_num"
                        helperText={touched.id_card_num && errors.id_card_num}
                        error={touched.id_card_num && errors.id_card_num ? true : false}
                      />
                    </div>
                    <div className="col-md-12">
                      <Field
                        as={InputText}
                        label="No. NPWP"
                        type="text"
                        name="npwp_num"
                        helperText={touched.npwp_num && errors.npwp_num}
                        error={touched.npwp_num && errors.npwp_num ? true : false}
                      />
                    </div>
  
                    <div className="col-md-12">
                      <p className="info-dok">
                        {/* * Jika Anda belum memiliki NPWP dan ingin berinvestasi,
                        bisa dikosongkan terlebih dahulu. Namun, */}
                        <span>
                          {" "}
                          NPWP merupakan syarat wajib untuk bisa melakukan
                          penarikan deviden pada Saldo InvestX.{" "}
                        </span>
                        Anda bisa membuat NPWP secara online di{" "}
                        <a href="https://ereg.pajak.go.id/daftar" target="__blank">
                          ereg.pajak.go.id
                        </a>
                      </p>
                    </div>
  
                    <ToastContainer />
  
                    <p className="tit-unggah w-100">
                      Unggah foto :
                    </p>
                      {/* <ReactLoading
                        type={"spokes"}
                        color={"#3D5215"}
                        height={21}
                        width={21}
                      /> */}
                    <div className="box-upload-dok col-md-12">
                      <div>
                        <p className="tag">Foto KTP *</p>
                        <Button type="button" onClick={() =>
                            this.setState({
                              modalFile: { open : true, id: 0} 
                            })
                          }
                        > 
                        {
                          this.state.id_card ?
                          <>{this.state.id_card.name } <CheckCircle style={{width: 20, color : '#AFE843', marginLeft : 10}} /> </>
                          :
                          <>Choose File <img src={minifile} alt="file" /></>
                        } 
                        </Button>
                      </div>
                      <div>
                        <p className="tag"> Foto selfie dengan KTP *</p>
                        <Button type="button" onClick={() =>
                            this.setState({
                              modalFile: { open : true, id: 1} 
                            })
                          }
                        > 
                        {
                          this.state.id_card_selfie ?
                          <>{this.state.id_card_selfie.name } <CheckCircle style={{width: 20, color : '#AFE843', marginLeft : 10}} /> </>
                          :
                          <>Choose File <img src={minifile} alt="file" /></>
                        } 
                        </Button>
                      </div>
                      <div>
                        <p className="tag">NPWP *</p>
                        <Button type="button" onClick={() =>
                            this.setState({
                              modalFile: { open : true, id: 2} 
                            })
                          }
                        > 
                        {
                          this.state.npwp ?
                          <>{this.state.npwp.name } <CheckCircle style={{width: 20, color : '#AFE843', marginLeft : 10}} /> </>
                          :
                          <>Choose File <img src={minifile} alt="file" /></>
                        } 
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              )
            } 
            }
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
          {/* <Link to="/investor-form-bank"> */}
            <Button type="submit" form="investorForm">
              SIMPAN & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Dokumen;
