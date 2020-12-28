import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment'
// import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  InputText,
  InputSelect,
  InputTextArea,
} from "../shared/InputComponents";
import {
  Checkbox,
  ButtonGroup,
  Button,
  FormHelperText,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import HeaderInvestForm from "./HeaderInvestForm";
import kuki from '../../helpers/cookie'
import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";


class DataDiri extends Component {
  state = {
    loading : false,
    isBlurDate : false,
    provinceData : [],
    regencyData : [],
    districtData: [],
    villageData : [],

    //////OCCUPATION//////
    provinceDataOccupation : [],
    regencyDataOccupation : [],
    districtDataOccupation: [],
    villageDataOccupation : []
  };

  componentDidMount(){
    this.checkProfile()
    this.apiProvince()
  }

  checkProfile = () =>{
    this.setState({loading : true})
    const nextLink = '/investor-form-pendidikan-pekerjaan'
    const keyCheck = 'is_personal_id_complete'
    API.getProfileCheck().then(res=>{
      if (res.data.profile[`${keyCheck}`]) {
          this.props.history.push(nextLink)
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
  
  apiProvince = ()=>{
    API.getProvince().then((res) => {
      this.setState({ 
        provinceData: res.data.results,
        provinceDataOccupation: res.data.results,
       });
      // console.log(this.state,'state');
    }).catch((err) => {
      console.log(err.response);
    });
  }
  
  apiRegency = (occupation,id)=>{
    return API.getRegency(id).then((res) => {
      if (occupation) {
        // console.log('IM TRUUUUU')
        this.setState({ regencyDataOccupation: res.data.results });
      }else{
        // console.log('IM FALSE')
        this.setState({ regencyData: res.data.results });
      }
    }).catch((err) => {
      console.log(err.response);
    });
  }

  apiDistrict = (occupation, id)=>{
    API.getDistrict(id).then((res) => {
      if (occupation) {
        this.setState({ districtDataOccupation: res.data.results });
      }else{
        this.setState({ districtData: res.data.results });
      }
    }).catch((err) => {
      console.log(err.response);
    });
  }

  apiVillage = (occupation, id)=>{
    API.getVillage(id).then((res) => {
      if (occupation) {
        this.setState({ villageDataOccupation: res.data.results });
      }else{
        this.setState({ villageData: res.data.results });
      }
    }).catch((err) => {
      console.log(err.response);
    });
  }

  render() {
    // console.log(this.state, 'THIS.STATE')
    const maritalOpt = [
      { label: "Lajang", value: 1 },
      { label: "Menikah", value: 2 },
      { label: "Duda", value: 3 },
      { label: "Janda", value: 4 },
    ];

    const citizenshipOpt =[
      { label: "Warga Negara Indonesia", value: 1 },
      { label: "Warga Negara Asing", value: 2 },
    ];

    const initialValueObj = {
      name: kuki.get('full_name'),
      gender: "",
      birth_place : '',
      birth_date: "",
      marital_status : null,
      citizenship : null,
      phone: kuki.get('phone_number'),
      address: "",

      province : null,
      regency : null,
      district : null,
      village : null,
      postal_code : '',

      ////OCCUPATION/////
      addressOcc: "",
      provinceOcc : this.state.provinceIdOccupation,
      regencyOcc : null,
      districtOcc : null,
      villageOcc : null,
      postal_codeOcc : '',

      isSameAdd: false,
    };

    const schemaObj = Yup.object({
      gender: Yup.number().required(),
      birth_place: Yup.string().required(),
      birth_date: Yup.string().required(),
      marital_status : Yup.object().nullable().required(),
      citizenship : Yup.object().nullable().required(),
      address : Yup.string().required(),
      province : Yup.object().nullable().required(),
      regency : Yup.object().nullable().required(),
      district : Yup.object().nullable().required(),
      village : Yup.object().nullable().required(),
      postal_code : Yup.string().required(),

    });

    const locationInputForms =[
      {key : 'province', label : 'Provinsi', data : this.state.provinceData, getData : (id)=>this.apiRegency(false, id), clearData : ['regency', 'district', 'village']},
      {key : 'regency', label : 'Kota/Kabupaten', data : this.state.regencyData, getData : (id)=>this.apiDistrict(false,id), clearData : ['district', 'village'] },
      {key : 'district', label : 'Kecamatan', data : this.state.districtData, getData : (id)=>this.apiVillage(false, id), clearData : ['village']},
      {key : 'village', label : 'Kelurahan', data : this.state.villageData, getData : ()=> null, clearData : []},
    ]
    const locationInputFormsOcc =[
      {key : 'provinceOcc', label : 'Provinsi', data : this.state.provinceDataOccupation, getData : (id)=>this.apiRegency(true, id), clearData : ['regency', 'district', 'village']},
      {key : 'regencyOcc', label : 'Kota/Kabupaten', data : this.state.regencyDataOccupation, getData : (id)=>this.apiDistrict(true,id), clearData : ['district', 'village'] },
      {key : 'districtOcc', label : 'Kecamatan', data : this.state.districtDataOccupation, getData : (id)=>this.apiVillage(true, id), clearData : ['village']},
      {key : 'villageOcc', label : 'Kelurahan', data : this.state.villageDataOccupation, getData : ()=> null, clearData : []},
    ]

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading}/>
        <HeaderInvestForm activeStep={1} />
        <div className="box-form-data">
          <p className="title">Data Diri</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              let idCardAddress = {
                "address": val.address,
                "postal_code": val.postal_code,
                "province": val.province.id,
                "regency": val.regency.id,
                "district": val.district.id,
                "kelurahan" : val.village.id
              }
              let occupationAddress = {
                "address": val.addressOcc,
                "postal_code": val.postal_codeOcc,
                "province": val.provinceOcc.id,
                "regency": val.regencyOcc.id,
                "district": val.districtOcc.id,
                "kelurahan" : val.villageOcc.id
              }

              let data = {
                "gender": val.gender,
                "birth_place": val.birth_place,
                "birth_date": val.birth_date,
                "marital_status": val.marital_status.value,
                "citizenship": val.citizenship.value,
                "id_card_address": idCardAddress,
                "occupation_address": val.isSameAdd ? idCardAddress : occupationAddress
              }
              API.postPersonalAccount(data).then(res =>{
                this.setState({loading : true})
                console.log(res)
                Swal.fire({
                  icon: 'success',
                  title: 'Data Diri berhasil di simpan',
                  showConfirmButton: false,
                  timer: 1500
                }).then(()=> this.props.history.push('/investor-form-pendidikan-pekerjaan'))
              }).catch(err =>{
                this.setState({loading : false})
                Swal.fire({
                  icon: 'error',
                  title: 'Data Diri gagal di simpan!',
                  text : `${Object.entries(err.response.data)} \n`
                })
                // console.log(err.response)
              })
              // console.log(data)
            }}
          >
            {({handleBlur,handleSubmit,errors,values,touched,setFieldValue,}) => (
              <form onSubmit={handleSubmit} id="dataDiriForm" autoComplete="off">
                <div className="row">
                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Name"
                      type="text"
                      name="name"
                      placeholder="Nama Lengkap"
                      disabled={true}
                      // errorsMessage={touched.name && errors.name}
                      // error ={touched.name && errors.name}
                    />
                  </div>
                  <div className="col-md-12">
                    <ButtonGroup
                      className={
                        errors.gender
                          ? "button-gender line-error"
                          : "button-gender"
                      }
                    >
                      <Button
                        className={values.gender === 1 ? "act-gen" : null}
                        onClick={() => setFieldValue("gender", 1)}
                      >
                        Pria
                      </Button>
                      <Button
                        className={
                          values.gender === 2 ? "act-gen" : null
                        }
                        onClick={() => setFieldValue("gender", 2)}
                      >
                        Wanita
                      </Button>
                    </ButtonGroup>
                    <FormHelperText
                      className="help-gender"
                      error={touched.gender && errors.gender ? true : false}
                      id="my-helper-text"
                    >
                      {errors.gender}
                    </FormHelperText>
                  </div>
                  <div className="col-md-6">
                    <Field
                      as={InputText}
                      label="Tempat Lahir"
                      type="text"
                      name="birth_place"
                      placeholder="Tempat Lahir"
                      required
                      helperText={touched.birth_place && errors.birth_place}
                      error={touched.birth_place && errors.birth_place ? true : false}
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      name="birth_date"
                      type="date"
                      required
                      label="Tanggal Lahir"
                      helperText={touched.birth_date && errors.birth_date}
                      error={touched.birth_date && errors.birth_date? true: false}
                      InputLabelProps={{
                        shrink: true
                      }}
                      as={InputText}
                    />
                  </div>
                  <div className="col-md-12">
                    <InputSelect
                      label="Status Pernikahan"
                      name="marital_status"
                      required
                      getOptionLabel={(val) => val.label}
                      options={maritalOpt}
                      helperText={touched.marital_status && errors.marital_status}
                      error={touched.marital_status && errors.marital_status ? true : false}
                      // value={values.marital_status}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("marital_status", val)}
                    />
                  </div>
                  <div className="col-md-12">
                    <InputSelect
                      label="Status Kewarganegaraan"
                      name="citizenship"
                      getOptionLabel={(val) => val.label}
                      options={citizenshipOpt}
                      helperText={touched.citizenship && errors.citizenship}
                      error={touched.citizenship && errors.citizenship ? true : false}
                      // value={values.citizenship}
                      onBlur={handleBlur}
                      required
                      onChange={(e, val) => setFieldValue("citizenship", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      as={InputText}
                      label="Phone"
                      type="text"
                      name="phone"
                      disabled={true}
                    />
                  </div>

                  <div className="col-md-12">
                    <Field
                      as={InputTextArea}
                      label="Alamat Sesuai KTP"
                      required
                      type="text"
                      name="address"
                      rows={5}
                      helperText={touched.address && errors.address}
                      error={touched.address && errors.address ? true : false}
                    />
                  </div>
                  
                  {/* ////TEST//// */}
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


                  {/* ///////END TEST /////  */}
                 

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


                  <pre>
                    {JSON.stringify(values, null, 4)}
                  </pre>

                  
                  <div className="col-md-12 mb-3">
                    <label
                      className="d-inline mb-4"
                      style={{ fontSize: 14, cursor : !values.address || !values.province || !values.regency || !values.district || !values.village || !values.postal_code ? 'not-allowed' : 'pointer'}}
                    >
                      <Checkbox
                        style={
                          !values.address || !values.province || !values.regency || !values.district || !values.village || !values.postal_code ?  
                          { marginBottom: 3 }
                          :
                          { color: "#01579B", marginBottom: 3 } 
                        }
                        name="isSameAdd"
                        disabled = {!values.address || !values.province || !values.regency || !values.district || !values.village || !values.postal_code}
                        onChange={(e)=>{
                          setFieldValue("isSameAdd", e.target.checked)
                          if (e.target.checked) {
                            setFieldValue("addressOcc", values.address)
                            setFieldValue("provinceOcc", values.province)
                            setFieldValue("regencyOcc", values.regency)
                            setFieldValue("districtOcc", values.district)
                            setFieldValue("villageOcc", values.village)
                            setFieldValue("postal_codeOcc", values.postal_code)
                          } else {
                            setFieldValue("addressOcc", '')
                            setFieldValue("provinceOcc", '')
                            setFieldValue("regencyOcc", '')
                            setFieldValue("districtOcc", '')
                            setFieldValue("villageOcc", '')
                            setFieldValue("postal_codeOcc", '')
                          }
                        }}
                      />
                      Sama Seperti KTP
                    </label>
                  </div>


              {/* ///// OCCUPATION ADDRESS  */}
              

              <Fade cascade duration={500} when={!values.isSameAdd} >
                  <div className="col-md-12" style={values.isSameAdd ? { display: "none" } : null}>
                    <Field
                      as={InputTextArea}
                      label="Alamat Tinggal Sekarang"
                      type="text"
                      name="addressOcc"
                      required
                      rows={5}
                      // placeholder=''
                      helperText={touched.addressOcc && errors.addressOcc}
                      error={touched.addressOcc && errors.addressOcc ? true : false}
                    />
                  </div>


                  {
                    locationInputFormsOcc.map((res,i)=>{
                      return(
                        <div className="col-md-6" key={i} style={values.isSameAdd ? { display: "none" } : null}>
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
                                setFieldValue("postal_codeOcc", '')
                                setFieldValue(`${c}Occ`, '')
                                this.setState({[`${c}DataOccupation`] : [] })
                              }
                            }
                            if (reason === "select-option") {
                              setFieldValue(`${res.key}`, val)
                              if (val.postal_code) {
                                setFieldValue("postal_codeOcc", val.postal_code)
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

                    <div className="col-md-6" style={values.isSameAdd ? { display: "none" } : null}>
                      <Field
                        as={InputText}
                        required
                        label="Kode Pos"
                        type="text"
                        name="postal_codeOcc"
                        helperText={touched.postal_codeOcc && errors.postal_codeOcc}
                        error={touched.postal_codeOcc && errors.postal_codeOcc ? true : false}
                      />
                    </div>

                  </Fade>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="foot-data-diri">
          <p className="agreement">
            *Saya menjamin bahwa informasi yang saya cantumkan diatas adalah
            benar dan siap bertanggung jawab atas segala konsekuensi yang
            terjadi di kemudian hari, serta memiliki kemampuan analisis resiko
            terhadap saham penerbit dan memenuhi kriteria pemodal sesuai
            peraturan yang berlaku.
          </p>
            <Button type="submit" form="dataDiriForm">
              SIMPAN & LANJUTKAN
            </Button>
        </div>
      </div>
    );
  }
}

export default DataDiri;
