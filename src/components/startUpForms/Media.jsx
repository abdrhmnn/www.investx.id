import React, { Component } from "react";

// import { Link } from "react-router-dom";
import InputFiles from "react-input-files";

// import { Formik, Field } from "formik";
// import * as Yup from "yup";
import { InputText } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";
import imageFileToBase64 from 'image-file-to-base64-exif'


class Media extends Component {
  state = {
    pageName : 'Media',
    "cover": "",
    "video_url": "",
    loading : false,
    // isAgree : false,
    dataCompanyBefore : []
  }

  componentDidMount(){
    this.checkFormCompany()
  }

  checkFormCompany = ()=>{
    API.refCheckCompanyMe().then(res=>{
      console.log(res.data.results[0], 'CHECK')
      this.setState({dataCompanyBefore : res.data.results})
      const data = res.data.results[0]
      const checkArr = [
        {label :'is_general_complete', nonCompleteLink : ()=>this.props.history.push('/startup-form-informasi-perusahaan') },
        {label :'is_financial_complete', nonCompleteLink : ()=>this.props.history.push('/startup-form-informasi-finansial') },
        {label :'is_nonfinancial_complete',  nonCompleteLink : ()=>this.props.history.push('/startup-form-informasi-nonfinansial') },
        {label :'is_media_complete', nonCompleteLink : ()=> {}},
      ]
      for (const val of checkArr) {
        if (data[`${val.label}`] === false) {
            val.nonCompleteLink()
            console.log(val.nonCompleteLink)
        }
        if (data[`${val.label}`] === true && val.label === 'is_media_complete') {
          Swal.fire({
            icon: 'success',
            title: 'Data perusahaan sudah komplit',
            allowOutsideClick: false,
            showConfirmButton: true,
          }).then((result)=> result.isConfirmed ? this.props.history.push('/company-list') : null )
        }
      }
    }).catch(err => {
      console.log(err.response)
      Swal.fire({
        icon: 'error',
        title: 'Error 500',
        showConfirmButton: true,
        allowOutsideClick: false
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
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

  handleChange = (e)=>{
    this.setState({[e.target.name] : e.target.value})
    console.log(e.target.name)
  }

  handleSubmit = (e)=>{
    const body = {
      "nonce": this.state.dataCompanyBefore[0].nonce,
      "cover": this.state.cover.url,
      "video_url": this.state.video_url
    }
    API.postCompanyMedia(body).then(res =>{
      this.setState({loading : true})
      console.log(res)
      //remove agreement back to begin
      localStorage.removeItem('formAgree')
      Swal.fire({
        icon: 'success',
        title: `Data ${this.state.pageName} berhasil di simpan`,
        showConfirmButton: false,
        timer: 1500
      }).then(()=> this.props.history.push('/company-list') )
    }).catch(err =>{
      this.setState({loading : false})
      Swal.fire({
        icon: 'error',
        title: `Data ${this.state.pageName} gagal di simpan`,
        text : `${Object.entries(err.response.data)} \n`
      })
      console.log(err.response)
    })
    console.log(body)
    e.preventDefault()
  }

  render() {

    return (
      <div className="all-forms-style">
        <HeaderStartupForm activeStep={6} />
        <Loading onOpen={this.state.loading} />

        <div className="box-form-data">
          <p className="title">Media</p>
          {/* <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
            }}
          >
            {({ handleSubmit, errors, touched }) => ( */}
              <form onSubmit={this.handleSubmit} id="startupForm">
                <div className="row">
                  <div className="col-md-12 startup-company-logo">
                    <div className="label-cus">Cover Company*</div>
                    <div className="file-frame">
                      <span>{this.state.cover ? this.state.cover.name : 'Select File...' }</span>
                      <InputFiles
                        required
                        onChange={(files) =>
                          this.handleFileUpload(files, "cover")
                        }
                      >
                        <Button type="button">Browse</Button>
                      </InputFiles>
                    </div>
                  </div>

                  <div className="col-md-12 mb-5">
                    <InputText
                      label="Video tentang usaha anda"
                      type="text"
                      name="video_url"
                      value={this.state.video_url}
                      onChange={this.handleChange}
                      required
                    />
                    <p className="info-file m-0">
                      *Masukan Link Video tentang usaha anda yang di unggah di Youtube
                    </p>
                  </div>

                  {/* <div className="col-md-12 syarat">
                    <p className="title"> <b>Pernyataan Informasi</b> </p>
                    <p>
                      1. Dengan ini saya menyatakan bahwa informasi yang saya
                      sampaikan di dalam form ini adalah sesuaidengan keadaan yang
                      sebenar-benarnya.
                    </p>
                    <p>
                      2. Bahwa saya menerima setiap hasil yang dikeluarkan oleh menu
                      daftarkan bisnis ini dengan penuh kesadaran.
                    </p>
                    <p>
                      3. Dengan disetujuinya surat pernyataan ini, maka saya tunduk
                      pada ketentuan internal perihal seleksi penerbit yang
                      dijalankan oleh platform InvestX.
                    </p>
                    <p className="mt-5">
                      Apakah anda setuju dengan Syarat dan ketentuan diatas?
                    </p>
                  </div> */}

                  {/* <div className="col-md-12">
                    <div className="w-addnow">
                      <div className="w-check">
                        <div
                          className="cbox"
                          onClick={() =>
                            this.setState({
                              isAgree: !this.state.isAgree,
                            })
                          }
                        >
                          {this.state.isAgree ? (
                            <i className="fas fa-check"></i>
                          ) : null}
                        </div>
                        <span>Ya, saya setuju</span>
                      </div>
                    </div>
                  </div> */}
                  
                </div>
              </form>
            {/* )}
          </Formik> */}

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
          {/* <Link to="startup-form-syarat"> */}
            <Button type="submit" form="startupForm" >
              SIMPAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Media;
