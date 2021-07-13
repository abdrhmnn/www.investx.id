import React, { Component } from "react";

// import { Link } from "react-router-dom";
import InputFiles from "react-input-files";
// import imageFileToBase64 from 'image-file-to-base64-exif'
// import pdf2base64 from 'pdf-to-base64'

import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  InputText,
  InputSelect,
  InputTextArea,
} from "../shared/InputComponents";
import { Button, InputAdornment } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

import uuid from 'react-uuid'

// import { ToastContainer, toast } from 'react-toastify';
import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";
// import ModalTemplate from "../shared/ModalTemplate";
import Syarat from "./Syarat";
import helper from "../../helpers/helper";

class InfoPerusahaan extends Component {
  state = {
    pageName : 'Informasi Perusahaan',
    business_typeData : [],
    company_type : [],
    information_source : [],

    provinceData : [],
    regencyData : [],
    districtData: [],
    villageData : [],

    // datas 
    "name": "",
    "trademark": "",
    "business_type": null,

    "address": "",
    "province": null,
    "regency": null,
    "district": null,
    "village" : null,
    "postal_code": "",

    "prospectus" : null,
    "logo": null,
    "type": null,
    "company_age": '',
    "number_of_branches": '',
    "number_of_employees": '',
    "description": "",
    "website_url" : "",

    ///
    modalFile: {},
    loading : false,
    uuid : uuid(),
    // checkPoinData:  [],

    modalSyarat : true,

    isEdit : false,
  };

  componentDidMount(){
    this.getObjOpt()
    this.apiProvince()
    this.checkall()
  }
  
  checkall =()=>{
    API.refCheckCompanyMe().then(res=>{
      console.log(res, 'ARRAY')
      if (res.data.results.length !== 0) {
        const {
          is_general_complete, 
          is_financial_complete, 
          is_nonfinancial_complete, 
          is_media_complete
        } = res.data.results[0]
        if (!is_general_complete && !is_financial_complete && !is_nonfinancial_complete && !is_media_complete) {
          var nonce = res.data.results[0].nonce
          this.setState({loading : true})
          API.getCompanyDetail(res.data.results[0].id62).then(val=>{
            this.setState({
              ...this.state,
              ...val.data,
              ...val.data.address[0],
              village : val.data.address[0].kelurahan,
              isEdit : true,
              uuid : nonce,
              loading : false,
              modalSyarat : false
            })
          }).catch(err=>{
            this.setState({loading : false})
            console.log(err.response)
          })
        }else{
          this.setState({loading : false}) 
        }

      }

      // if (res.data.results.length !== 0) {
      //   const data = res.data.results[0]
      //   // console.log(res)
      //   const checkArr = [
      //     {label :'is_general_complete'},
      //     {label :'is_financial_complete'},
      //     {label :'is_nonfinancial_complete'}, 
      //     {label :'is_media_complete'},
      //   ]
      //   for (const val of checkArr) {
      //     if (!data[`${val.label}`] ) {
      //       this.checkFormCompany()
      //     }
      //   }
      // }
    }).catch(err => {
      this.setState({loading : false})
      console.log(err.response)
      Swal.fire({
        icon: 'error',
        title: 'Error 5000',
        showConfirmButton: true,
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
    })
  }

  checkFormCompany = ()=>{
      const data = this.state.checkPoinData[0]
      const checkArr = [
        {label :'is_general_complete', isCompleteLink : '/startup-form-informasi-finansial'},
      ]
      for (const val of checkArr ) {
        if (data[`${val.label}`]) {
            this.props.history.push(val.isCompleteLink)
        }
      }
  }


  getObjOpt = () =>{
    API.refCompanyGeneral().then(res=>{
      console.log(res)
      this.setState({ 
        business_typeData : res.data.business_type,
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

  apiFileToLink = (name , value, initialName, setFieldValue)=>{
    const body ={
      "name": name,
      "file_base64": value
    }
    API.refPostFile(body).then(res =>{
      console.log(res.data.url, 'INI HASIL URLNYA')

      setFieldValue(name , {name : initialName, url : res.data.url})

      this.setState({loading: false})
      // this.setState({
      //   [name] : {url : res.data.url, name : initialName},
      //   loading : false
      // })
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

  handleFileUpload = (file, name,setFieldValue ) => {
    this.setState({loading: true})
    console.log(file.name);
    console.log(file);
    const initialName = file.name
    // const maxWidth = 800
    // const maxHeight = 400
    // const quality = 0.9
    // imageFileToBase64(file[0], maxWidth, maxHeight, quality).then((res)=>{
    // })
    helper.getBase64(file).then(res=>{
      this.apiFileToLink(name, res, initialName, setFieldValue )
    })
    this.setState({ modalFile: {} });
  };

  handleFileUploadPdf = (file, name, setFieldValue) => {
    this.setState({loading: true})
    console.log(file, 'INI FILE PDF');
    const initialName = file[0].name
    // pdf2base64(file).then((res)=>{
    //   const addMime = `data:text/pdf;base64,${res}`
    //   // console.log(addMime, 'STRING PDF')
    //   this.apiFileToLink(name, addMime, initialName, setFieldValue )
    // })
    helper.getBase64(file[0]).then(res=>{
      this.apiFileToLink(name, res, initialName, setFieldValue )
    })
    this.setState({ modalFile: {} });
  };

  render() {
    const initialValueObj = {
      "name": this.state.name,
      "trademark": this.state.trademark,
      "business_type": this.state.business_type,

      address: this.state.address,
      province : this.state.province,
      regency : this.state.regency,
      district : this.state.district,
      village : this.state.village,
      postal_code : this.state.postal_code,

      "type": this.state.type,
      "company_age": this.state.company_age,
      "number_of_branches": this.state.number_of_branches,
      "number_of_employees": this.state.number_of_employees,
      "description": this.state.description,
      "website_url" : this.state.website_url,
      "prospectus" : this.state.prospectus,
      "logo" : this.state.logo,
    }

    const schemaObj = Yup.object({
      name: Yup.string().required(),
      trademark: Yup.string().required(),
      business_type: Yup.object().nullable().required(),
      address: Yup.string().required(),
      province: Yup.object().nullable().required(),
      regency: Yup.object().nullable().required(),
      district: Yup.object().nullable().required(),
      village: Yup.object().nullable().required(),

      prospectus: Yup.object().nullable().required(),
      logo: Yup.object().nullable().required(),
      company_age: Yup.number().typeError("value have to be number").required(),
      number_of_branches: Yup.number().typeError("value have to be number").required(),
      number_of_employees: Yup.number().typeError("value have to be number").required(),
      description: Yup.string().required().max(500),
      website_url: Yup.string().required().url(),
    });

    const locationInputForms =[
      {key : 'province', label : 'Provinsi', data : this.state.provinceData,getData : null, clearData : ['regency', 'district', 'village'],  prevId : null },
      {key : 'regency', label : 'Kota/Kabupaten', data : this.state.regencyData, getData : (id)=>this.apiRegency(id), clearData : ['district', 'village'], prevId : 'province' },
      {key : 'district', label : 'Kecamatan', data : this.state.districtData, getData : (id)=>this.apiDistrict(id), clearData : ['village'], prevId : 'regency'},
      {key : 'village', label : 'Kelurahan', data : this.state.villageData, getData : (id)=>this.apiVillage(id), clearData : [], prevId : 'district'},
      
    ]

    console.log(this.state, 'STATE')

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading}/>
        <HeaderStartupForm backPath='/' activeStep={3} />
        {this.state.modalSyarat ? <Syarat onClose={()=>this.setState({modalSyarat : false})}/> : null}

        <div className="box-form-data">
          <p className="title">Informasi Perusahaan</p>
          <Formik
            enableReinitialize
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
                  "kelurahan": val.village.id
                },
                "type": val.type.id,
                "company_age": val.company_age,
                "number_of_branches": val.number_of_branches,
                "number_of_employees": val.number_of_employees,
                "description": val.description,
                "website_url" : val.website_url,
                "prospectus": val.prospectus,
                "logo": val.logo
              }
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
                      options={this.state.business_typeData}
                      helperText={touched.business_type && errors.business_type}
                      error={touched.business_type && errors.business_type ? true : false}
                      value={values.business_type}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("business_type", val)}
                    />
                  </div>

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
                          options={res.data.length === 0 ? [{name : 'Loading...'}] : res.data}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={touched[`${res.key}`] && errors[`${res.key}`] ? true : false}
                          onBlur={handleBlur}
                          value={values[`${res.key}`]}
                          onChange={(e, val, reason)=>{
                            if (reason === "clear") {
                              setFieldValue(`${res.key}`, null)
                              setFieldValue("postal_code", '')
                              for (const c of res.clearData) {
                                // console.log(c)
                                setFieldValue(`${c}`, '')
                                this.setState({[`${c}Data`] : [] })
                              }
                            }
                            if (reason === "select-option") {
                              setFieldValue(`${res.key}`, val)
                              if (val.postal_code) {
                                setFieldValue("postal_code", val.postal_code)
                              }
                            }
                            for (const c of res.clearData) {
                              // console.log(c)
                              setFieldValue(`${c}`, '')
                              this.setState({[`${c}Data`] : [] })
                            }
                            console.log(reason)
                          }}
                          onOpen={()=> res.prevId !== null && res.getData !== null && values[res.prevId] !== null ? res.getData(values[res.prevId].id): null}
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
                      error={touched.number_of_employees && errors.number_of_employees ? true : false}
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

                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      required
                      label="Website Perusahaan"
                      type="text"
                      name="website_url"
                      helperText={touched.website_url && errors.website_url}
                      error={touched.website_url && errors.website_url ? true : false}
                    />
                  </div>

                  {/* <pre>
                    {JSON.stringify(values, null, 4)}
                  </pre>
                  <pre>
                    {JSON.stringify(errors, null, 4)}
                  </pre> */}

                  {/* <div className="col-md-12 startup-company-logo mb-4">
                    <div className="label-cus">Prospectus *</div>
                    <div className="file-frame">
                      <span>{values.prospectus ? values.prospectus.name : 'Select File...' }</span>
                      <InputFiles
                        accept="application/pdf"
                        onChange={(files) =>
                          this.handleFileUploadPdf(files, "prospectus", setFieldValue)
                        }
                      >
                        <Button type="button">Browse</Button>
                      </InputFiles>
                    </div>
                    <p className="info-file mb-0">
                      *File data <span>Pdf</span> dan tidak lebih dari <span>5MB</span>
                    </p>
                  </div>

                  <div className="col-md-12 startup-company-logo">
                    {
                      values.logo?
                      <img src={values.logo.url} alt="logo" style={{width : '40%'}}/>
                      : null
                    }
                    <div className="label-cus">Logo perusahaan *</div>
                    <div className="file-frame">
                    <span>{values.logo ? values.logo.name : 'Select File...' }</span>
                      <InputFiles onChange={(files) => this.handleFileUpload(files, "logo", setFieldValue)} onClick={(e)=> { e.currentTarget.value = null}}>
                        <Button type="button">Browse</Button>
                      </InputFiles>
                    </div>
                    <p className="info-file">
                      *File data <span>Jpeg / PNG</span> dan tidak lebih dari <span>5MB</span>{" "}
                    </p>
                  </div> */}

                  <div className="col-md-12" >
                    <Field
                        as={InputText}
                        label="Prospectus"
                        required
                        type="text"
                        name="prospectus"
                        value={values.prospectus?values.prospectus.name:''}
                        helperText={touched.prospectus && errors.prospectus}
                        error={touched.prospectus && errors.prospectus ? true : false}
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                              <InputAdornment position="end">
                                <InputFiles
                                  accept="application/pdf"
                                  onChange={(files) =>
                                    this.handleFileUploadPdf(files, "prospectus", setFieldValue)
                                  }
                                >
                                  <Button >Browse</Button>
                                </InputFiles>
                              </InputAdornment>
                          )
                      }}
                      />
                  </div>

                  <div className="col-md-12" >
                    {
                      values.logo?
                      <img src={values.logo.url} alt="logo" style={{width : '40%', marginBottom : 20, borderRadius: '4px'}}/>
                      : null
                    }
                    <Field
                        as={InputText}
                        label="Logo perusahaan"
                        required
                        type="text"
                        name="logo"
                        value={values.logo?values.logo.name:''}
                        helperText={touched.logo && errors.logo}
                        error={touched.logo && errors.logo ? true : false}
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                              <InputAdornment position="end">
                                <InputFiles
                                  accept="image/*"
                                  onChange={(files) =>
                                    this.handleFileUpload(files[0], "logo", setFieldValue)
                                  }
                                >
                                  <Button >Browse</Button>
                                </InputFiles>
                              </InputAdornment>
                          )
                      }}
                      />
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
              {this.state.isEdit ?"UBAH" : "SIMPAN"} & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default InfoPerusahaan;
