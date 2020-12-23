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

class DataDiri extends Component {
  state = {
    isBlurDate : false,
    provinceData : [],
    provinceId: null,
    regencyData : [],
    regencyId: null,
    districtData: [],
    districtId: null,
    villageData : [],

    //////OCCUPATION//////
    provinceDataOccupation : [],
    provinceIdOccupation: '',
    regencyDataOccupation : [],
    regencyIdOccupation: '',
    districtDataOccupation: [],
    districtIdOccupation: '',
    villageDataOccupation : []
  };

  componentDidMount(){
    this.apiProvince()
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
  
  apiRegency = (occupation)=>{
    if (occupation) {
      const id = this.state.provinceIdOccupation !== null? this.state.provinceIdOccupation.id : ''
      return API.getRegency(id).then((res) => {
        // console.log(res.data.results,'regency');
        this.setState({ regencyDataOccupation: res.data.results });
      }).catch((err) => {
        console.log(err.response);
      });
    }else{
      // console.log('running HEREEE!!')
      const id = this.state.provinceId !== null? this.state.provinceId.id : ''
      return API.getRegency(id).then((res) => {
        // console.log(res.data.results,'regency');
        this.setState({ regencyData: res.data.results });
      }).catch((err) => {
        console.log(err.response);
      });
    }
  }

  apiDistrict = (occupation)=>{
    if (occupation) {
      const id = this.state.regencyIdOccupation !== null? this.state.regencyIdOccupation.id : ''
      API.getDistrict(id).then((res) => {
        // console.log(res.data.results,'distric');
        this.setState({ districtDataOccupation: res.data.results });
      }).catch((err) => {
        console.log(err.response);
      });
    }else{
      const id = this.state.regencyId !== null? this.state.regencyId.id : ''
      API.getDistrict(id).then((res) => {
        // console.log(res.data.results,'distric');
        this.setState({ districtData: res.data.results });
      }).catch((err) => {
        console.log(err.response);
      });
    }
  }

  apiVillage = (occupation)=>{
    if (occupation) {
      const id = this.state.districtIdOccupation !== null? this.state.districtIdOccupation.id : ''
      API.getVillage(id).then((res) => {
        // console.log(res.data.results,'village/desa');
        this.setState({ villageDataOccupation: res.data.results });
      }).catch((err) => {
        console.log(err.response);
      });
    }else{
      const id = this.state.districtId !== null? this.state.districtId.id : ''
      API.getVillage(id).then((res) => {
        // console.log(res.data.results,'village/desa');
        this.setState({ villageData: res.data.results });
      }).catch((err) => {
        console.log(err.response);
      });
    }
  }

  render() {
    // console.log(this.state, 'THIS.STATE')
    const maritalOpt = [
      { label: "Lajang", value: 0 },
      { label: "Menikah", value: 1 },
    ];

    const citizenshipOpt =[
      { label: "Warga Negara Indonesia", value: 1 },
      { label: "Warga Negara Asing", value: 0 },
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

      province : this.state.provinceId,
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

    return (
      <div className="all-forms-style">
        <HeaderInvestForm activeStep={1} />
        <div className="box-form-data">
          <p className="title">Data Diri</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
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
                          values.gender === 0 ? "act-gen" : null
                        }
                        onClick={() => setFieldValue("gender", 0)}
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
                      value={values.marital_status}
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
                      value={values.citizenship}
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
                  <div className="col-md-6">
                    <InputSelect
                      label="Provinsi"
                      required
                      name="province"
                      getOptionLabel={(val) => val? val.name : ''}
                      options={this.state.provinceData}
                      helperText={touched.province && errors.province}
                      error={touched.province && errors.province ? true : false}
                      value={values.province}
                      onBlur={handleBlur}
                      onChange={(e, val) => {
                       
                        if (val === null) {
                          setFieldValue("province", '')
                          setFieldValue("regency", '')
                          setFieldValue("district", '')
                          setFieldValue("village", '')
                          setFieldValue("postal_code", '')
                          this.setState({
                            regencyData : [],
                            districtData : [],
                            villageData : []
                          })
                        }else{
                          setFieldValue("province", val)
                          this.setState({provinceId : val})
                        }
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Kota/Kabupaten"
                      required
                      name="regency"
                      getOptionLabel={(val) => val? val.name : ''}
                      options={this.state.regencyData}
                      helperText={touched.regency && errors.regency}
                      error={touched.regency && errors.regency ? true : false}
                      value={values.regency}
                      onBlur={handleBlur}
                      onChange={(e, val) =>{
                        if (val === null) {
                          setFieldValue("regency", '')
                          setFieldValue("district", '')
                          setFieldValue("village", '')
                          setFieldValue("postal_code", '')
                          this.setState({
                            districtData : [],
                            villageData : []
                          })
                        }else{
                          setFieldValue("regency", val)
                          this.setState({regencyId : val})
                        }
                      }}
                      onClick={()=>this.apiRegency(false)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Kecamatan"
                      required
                      name="district"
                      getOptionLabel={(val) => val? val.name : ''}
                      options={this.state.districtData}
                      helperText={touched.district && errors.district}
                      error={touched.district && errors.district ? true : false}
                      value={values.district}
                      onBlur={handleBlur}
                      onChange={(e, val) =>{
                        if (val === null) {
                          setFieldValue("district", '')
                          setFieldValue("village", '')
                          setFieldValue("postal_code", '')
                          this.setState({
                            villageData : []
                          })
                        }else{
                          setFieldValue("district", val)
                          this.setState({districtId : val})
                        }
                      }}
                      onClick={()=>this.apiDistrict(false)}
                    />
                  </div>

                  <div className="col-md-6">
                    <InputSelect
                      label="Kelurahan"
                      required
                      name="village"
                      getOptionLabel={(val) => val? val.name : ''}
                      options={this.state.villageData}
                      helperText={touched.village && errors.village}
                      error={touched.village && errors.village ? true : false}
                      value={values.village}
                      onBlur={handleBlur}
                      onChange={(e, val) =>{
                        if (val === null) {
                          setFieldValue("postal_code", '')
                        }else{
                          setFieldValue("village", val)
                          setFieldValue("postal_code", val ? val.postal_code : '')
                        }
                      }}
                      onClick={()=>this.apiVillage(false)}
                    />
                  </div>

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


                  {/* <pre>
                    {JSON.stringify(values, null, 4)}
                  </pre> */}

                  
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
                    
                    <div className="col-md-6" style={values.isSameAdd ? { display: "none" } : null}>
                    <InputSelect
                      label="Provinsi"
                      required
                      name="provinceOcc"
                      getOptionLabel={(val) => val? val.name : ''}
                      // getOptionSelected={(option, value) => option.id === value.id}
                      options={this.state.provinceDataOccupation}
                      helperText={touched.provinceOcc && errors.provinceOcc}
                      error={touched.provinceOcc && errors.provinceOcc ? true : false}
                      value={values.provinceOcc }
                      onBlur={handleBlur}
                      onChange={(e, val) => {
                        
                        if (val === null) {
                          setFieldValue("provinceOcc", '')
                          setFieldValue("regencyOcc", '')
                          setFieldValue("districtOcc", '')
                          setFieldValue("villageOcc", '')
                          setFieldValue("postal_codeOcc", '')
                          this.setState({
                            regencyDataOccupation : [],
                            districtDataOccupation : [],
                            villageDataOccupation : []
                          })
                        }else{
                          setFieldValue("provinceOcc", val)
                          this.setState({provinceIdOccupation : val})
                        }
                      }}
                    />
                  </div>
                  <div className="col-md-6" style={values.isSameAdd ? { display: "none" } : null}>
                    <InputSelect
                      label="Kota/Kabupaten"
                      required
                      name="regencyOcc"
                      getOptionLabel={(val) => val? val.name : ''}
                      options={this.state.regencyDataOccupation}
                      helperText={touched.regencyOcc && errors.regencyOcc}
                      error={touched.regencyOcc && errors.regencyOcc ? true : false}
                      value={values.regencyOcc}
                      onBlur={handleBlur}
                      onChange={(e, val) =>{
                           if (val === null) {
                            setFieldValue("regencyOcc", '')
                            setFieldValue("districtOcc", '')
                            setFieldValue("villageOcc", '')
                            setFieldValue("postal_codeOcc", '')
                            this.setState({
                              districtDataOccupation : [],
                              villageDataOccupation : []
                            })
                          }else{
                            setFieldValue("regencyOcc", val)
                            this.setState({regencyIdOccupation : val})
                          }
                      }}
                      onClick={()=>this.apiRegency(true)}
                    />
                  </div>
                  <div className="col-md-6" style={values.isSameAdd ? { display: "none" } : null}>
                    <InputSelect
                      label="Kecamatan"
                      required
                      name="districtOcc"
                      getOptionLabel={(val) => val? val.name : ''}
                      options={this.state.districtDataOccupation}
                      helperText={touched.districtOcc && errors.districtOcc}
                      error={touched.districtOcc && errors.districtOcc ? true : false}
                      value={values.districtOcc}
                      onBlur={handleBlur}
                      onChange={(e, val) =>{
                        if (val === null) {
                          setFieldValue("districtOcc", '')
                          setFieldValue("villageOcc", '')
                          setFieldValue("postal_codeOcc", '')
                          this.setState({
                            villageDataOccupation : []
                          })
                        }else{
                          setFieldValue("districtOcc", val)
                          this.setState({districtIdOccupation : val})
                        }
                      }}
                      onClick={()=>this.apiDistrict(true)}
                    />
                  </div>

                  <div className="col-md-6" style={values.isSameAdd ? { display: "none" } : null}>
                    <InputSelect
                      label="Kelurahan"
                      required
                      name="villageOcc"
                      getOptionLabel={(val) => val? val.name : ''}
                      options={this.state.villageDataOccupation}
                      helperText={touched.villageOcc && errors.villageOcc}
                      error={touched.villageOcc && errors.villageOcc ? true : false}
                      value={values.villageOcc}
                      onBlur={handleBlur}
                      onChange={(e, val) =>{
                        if (val === null) {
                          setFieldValue("postal_codeOcc", "")
                        }else{
                          setFieldValue("villageOcc", val)
                          setFieldValue("postal_codeOcc", val ? val.postal_code : '')
                        }
                      }}
                      onClick={()=>this.apiVillage(true)}
                    />
                  </div>

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
