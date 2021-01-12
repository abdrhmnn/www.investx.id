import React, { Component } from "react";

// import { Link } from "react-router-dom";
import InputFiles from "react-input-files";
import imageFileToBase64 from 'image-file-to-base64-exif'

import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  InputText,
  InputSelect,
  InputTextArea,
} from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

import uuid from 'react-uuid'

import { ToastContainer, toast } from 'react-toastify';
import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";
// import ModalTemplate from "../shared/ModalTemplate";
import Syarat from "./Syarat";

class InfoPerusahaan extends Component {
  state = {
    pageName : 'Informasi Perusahaan',
    business_type : [],
    company_type : [],
    information_source : [],

    provinceData : [],
    regencyData : [],
    districtData: [],
    villageData : [],

    "logo": null,
    modalFile: {},
    loading : false,
    uuid : uuid(),
    checkPoinData:  [],

    modalSyarat : true
  };

  componentDidMount(){
    this.getObjOpt()
    this.apiProvince()
    this.checkall()
  }
  
  checkall =()=>{
    API.refCheckCompanyMe().then(res=>{
      this.setState({checkPoinData : res.data.results})
      const data = res.data.results[0]
      const checkArr = [
        {label :'is_general_complete'},
        {label :'is_financial_complete'},
        {label :'is_nonfinancial_complete'}, 
        {label :'is_media_complete'},
      ]
      for (const val of checkArr) {
        if (!data[`${val.label}`]) {
          this.checkFormCompany()
        }
      }
    }).catch(err => {
      console.log(err.response)
      Swal.fire({
        icon: 'error',
        title: 'Error 500',
        showConfirmButton: true,
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
    })
  }

  checkFormCompany = ()=>{

      const data = this.state.checkPoinData[0]
      const checkArr = [
        {label :'is_general_complete', isCompleteLink : '/startup-form-informasi-finansial'},
      ]
      for (const val of checkArr) {
        if (data[`${val.label}`]) {
            this.props.history.push(val.isCompleteLink)
        }
      }
  }


  getObjOpt = () =>{
    API.refCompanyGeneral().then(res=>{
      console.log(res)
      this.setState({ 
        business_type : res.data.business_type,
        company_type : res.data.company_type,
        information_source : res.data.information_source,
      })
    }).catch(err => console.log(err.response))
  }

  apiProvince = ()=>{
    API.getProvince().then((res) => {
      this.setState({ 
        provinceData: res.data.results,
       });
      // console.log(this.state,'state');
    }).catch((err) => {
      console.log(err.response);
    });
  }

  apiRegency = (id)=>{
    return API.getRegency(id).then((res) => {
      this.setState({ regencyData: res.data.results });
    }).catch((err) => {
      console.log(err.response);
    });
  }

  apiDistrict = (id)=>{
    API.getDistrict(id).then((res) => {
      this.setState({ districtData: res.data.results });
    }).catch((err) => {
      console.log(err.response);
    });
  }

  apiVillage = (id)=>{
    API.getVillage(id).then((res) => {
      this.setState({ villageData: res.data.results });
    }).catch((err) => {
      console.log(err.response);
    });
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

  render() {
    const initialValueObj = {
      "name": "",
      "trademark": "",
      "business_type": null,
      "address": "",
      "postal_code": "",
      "province": null,
      "regency": null,
      "district": null,
      "kelurahan": null,

      "type": null,
      "company_age": '',
      "number_of_branches": '',
      "number_of_employees": '',
      "description": "",
    }

    const schemaObj = Yup.object({
      name: Yup.string().required(),
      trademark: Yup.string().required(),
      business_type: Yup.object().nullable().required(),
      address: Yup.string().required(),
      province: Yup.object().nullable().required(),
      regency: Yup.object().nullable().required(),
      district: Yup.object().nullable().required(),
      kelurahan: Yup.object().nullable().required(),

      company_age: Yup.number().typeError("value have to be number").required(),
      number_of_branches: Yup.number().typeError("value have to be number").required(),
      number_of_employees: Yup.number().typeError("value have to be number").required(),
      description: Yup.string().required(),
    });

    const locationInputForms =[
      {key : 'province', label : 'Provinsi', data : this.state.provinceData, getData : (id)=>this.apiRegency(id), clearData : ['regency', 'district', 'kelurahan']},
      {key : 'regency', label : 'Kota/Kabupaten', data : this.state.regencyData, getData : (id)=>this.apiDistrict(id), clearData : ['district', 'kelurahan'] },
      {key : 'district', label : 'Kecamatan', data : this.state.districtData, getData : (id)=>this.apiVillage(id), clearData : ['kelurahan']},
      {key : 'kelurahan', label : 'Kelurahan', data : this.state.villageData, getData : ()=> null, clearData : []},
    ]

    console.log(this.state, 'STATE')

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading}/>
        <HeaderStartupForm activeStep={3} />
        {this.state.modalSyarat ? <Syarat onClose={()=>this.setState({modalSyarat : false})}/> : null}

        <div className="box-form-data">
          <p className="title">Informasi Perusahaan</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
              const body = {
                "nonce": this.state.uuid,
                "name": val.name,
                "trademark": val.trademark,
                "business_type": val.business_type.id,
                // "business_subtype": "string",
                // "city": "string",
                "address": {
                  "address": val.address,
                  "postal_code": val.postal_code,
                  "province": val.province.id,
                  "regency": val.regency.id,
                  "district": val.district.id,
                  "kelurahan": val.kelurahan.id
                },
                "type": val.type.id,
                "company_age": val.company_age,
                "number_of_branches": val.number_of_branches,
                "number_of_employees": val.number_of_employees,
                "description": val.description,
                "logo": this.state.logo ? this.state.logo.url : toast.warn("Silahkan isi Foto KTP dahulu")
              }
              if (this.state.logo) {
                this.setState({loading : true})
                API.postCompanyGeneral(body).then(res =>{
                  localStorage.setItem("uuid", this.state.uuid);
                  this.setState({loading : false})
                  console.log(res)
                  Swal.fire({
                    icon: 'success',
                    title: `Data ${this.state.pageName} berhasil di simpan`,
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=> this.props.history.push('/startup-form-informasi-finansial'))
                }).catch(err =>{
                  this.setState({loading : false})
                  Swal.fire({
                    icon: 'error',
                    title: `Data ${this.state.pageName} gagal di simpan`,
                    text : `${Object.entries(err.response.data)} \n`
                  })
                  console.log(err.response)
                })
              }

            }}
          >
            {({
              handleBlur,
              handleSubmit,
              errors,
              values,
              touched,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit} id="startupForm">
                <div className="row">
                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Nama Perusahaan"
                      type="text"
                      required
                      name="name"
                      // placeholder='Tempat Lahir *'
                      helperText={touched.name && errors.name}
                      error={
                        touched.name && errors.name ? true : false
                      }
                    />
                  </div>

                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Merk Dagang"
                      type="text"
                      required
                      name="trademark"
                      // placeholder='Tempat Lahir *'
                      helperText={touched.trademark && errors.trademark}
                      error={
                        touched.trademark && errors.trademark ? true : false
                      }
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Jenis Usaha"
                      required
                      name="business_type"
                      getOptionLabel={(val) => val.text}
                      options={this.state.business_type}
                      helperText={touched.business_type && errors.business_type}
                      error={touched.business_type && errors.business_type ? true : false}
                      value={values.business_type}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("business_type", val)}
                    />
                  </div>

                  {/* <div className="col-md-12 ">
                    <InputSelect
                      label="Sub Jenis Usaha *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div> */}

                  {/* <div className="col-md-12 ">
                    <InputSelect
                      label="Kota Lokasi Usaha *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div> */}

                  <div className="col-md-12 ">
                    <Field
                      as={InputTextArea}
                      label="Alamat Lengkap Perusahaan"
                      required
                      type="text"
                      name="address"
                      rows={5}
                      // placeholder=''
                      helperText={touched.address && errors.address}
                      error={touched.address && errors.address ? true : false}
                    />
                  </div>

                  {
                    locationInputForms.map((res,i)=>{
                      return(
                        <div className="col-md-6" key={i}>
                        <InputSelect
                          label={res.label}
                          required
                          name={res.key}
                          getOptionLabel={(val) => val? val.name : ""}
                          getOptionSelected ={(option, val) => option.name  === val.name  }
                          options={res.data}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={touched[`${res.key}`] && errors[`${res.key}`] ? true : false}
                          onBlur={handleBlur}
                          value={values[`${res.key}`] || ""}
                          onChange={(e, val, reason)=>{
                            if (reason === "clear") {
                              setFieldValue(`${res.key}`, '')
                              for (const c of res.clearData) {
                                // console.log(c)
                                setFieldValue(`${c}`, '')
                                setFieldValue("postal_code", '')
                                this.setState({[`${c}Data`] : [] })
                              }
                            }
                            if (reason === "select-option") {
                              setFieldValue(`${res.key}`, val)
                              if (val.postal_code) {
                                setFieldValue("postal_code", val.postal_code)
                              }
                              res.getData(val.id)
                            }
                            console.log(reason)
                          }}
                        />
                        </div>
                      )
                    })
                  }

                  <div className="col-md-6">
                    <Field
                      as={InputText}
                      required
                      label="Kode Pos"
                      type="text"
                      name="postal_code"
                      helperText={touched.postal_code && errors.postal_code}
                      error={touched.postal_code && errors.postal_code ? true : false}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Bentuk Badan Usaha"
                      required
                      name="type"
                      getOptionLabel={(val) => val.text}
                      options={this.state.company_type}
                      helperText={touched.type && errors.type}
                      error={touched.type && errors.type ? true : false}
                      value={values.type}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("type", val)}
                    />
                  </div>

                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Lama Usaha ( Bulan )"
                      required
                      type="text"
                      name="company_age"
                      helperText={touched.company_age && errors.company_age}
                      error={
                        touched.company_age && errors.company_age ? true : false
                      }
                    />
                  </div>

                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Jumlah Cabang"
                      required
                      type="text"
                      name="number_of_branches"
                      // placeholder='Tempat Lahir *'
                      helperText={touched.number_of_branches && errors.number_of_branches}
                      error={
                        touched.number_of_branches && errors.number_of_branches ? true : false
                      }
                    />
                  </div>

                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Jumlah Karyawan"
                      required
                      type="text"
                      name="number_of_employees"
                      // placeholder='Tempat Lahir *'
                      helperText={touched.number_of_employees && errors.number_of_employees}
                      error={
                        touched.number_of_employees && errors.number_of_employees ? true : false
                      }
                    />
                  </div>

                  <div className="col-md-12 ">
                    <Field
                      as={InputTextArea}
                      label="Deskripsi Singkat Perusahaan ( Maksimal 500 karakter )"
                      required
                      type="text"
                      name="description"
                      rows={5}
                      // placeholder=''
                      helperText={touched.description && errors.description}
                      error={touched.description && errors.description ? true : false}
                    />
                  </div>

                  {/* <pre>
                    {JSON.stringify(values, null, 4)}
                  </pre>
                  <pre>
                    {JSON.stringify(errors, null, 4)}
                  </pre> */}
                  <ToastContainer />
                  <div className="col-md-12 startup-company-logo">
                    <div className="label-cus">Logo perusahaan *</div>
                    <div className="file-frame">
                      <span>{this.state.logo ? this.state.logo.name : 'Select File...' }</span>
                      <InputFiles
                        onChange={(files) =>
                          this.handleFileUpload(files, "logo")
                        }
                      >
                        <Button type="button">Browse</Button>
                      </InputFiles>
                    </div>
                    <div className="error-input p-0">
                      {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                    </div>
                    <p className="info-file">
                      *File data <span>Pdf / Jpeg / PNG</span> dan tidak lebih
                      dari <span>5MB</span>{" "}
                    </p>
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
          {/* <Link to="/startup-form-informasi-finansial"> */}
            <Button type="submit" form="startupForm">
              SIMPAN & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default InfoPerusahaan;
