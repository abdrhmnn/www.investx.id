
import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  InputText,
  InputSelect,
  InputTextArea,
} from "../../shared/InputComponents";
import {
  Checkbox,
  ButtonGroup,
  Button,
  FormHelperText,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
// import HeaderInvestForm from "./HeaderInvestForm";
import kuki from '../../../helpers/kuki'
import API from "../../../api";
import Loading from "../../shared/Loading";
import Swal from "sweetalert2";
// import HeaderStartupForm from "../../startUpForms/HeaderStartupForm";


class DataDiriProfile extends Component {
  state = {
    loading : false,
    isBlurDate : false,
    objMaritalStatus : [],
    objGender : [],
    objCitizen :[],

    provinceData : [],
    regencyData : [],
    districtData: [],
    villageData : [],

    //////OCCUPATION//////
    provinceDataOccupation : [],
    regencyDataOccupation : [],
    districtDataOccupation: [],
    villageDataOccupation : [],
    isStartUp : window.location.pathname === "/startup-form-data-diri",

    // data 
    gender: "",
    birth_place : '',
    birth_date: "",
    marital_status : null,
    citizenship : null,
    address: "",
    "province": null,
    "regency": null,
    "district": null,
    "village" : null,
    "postal_code": "",

    ////OCCUPATION/////
    addressOcc: "",
    // provinceOcc : this.state.provinceIdOccupation,
    provinceOcc : null,
    regencyOcc : null,
    districtOcc : null,
    villageOcc : null,
    postal_codeOcc : '',

    isSameAdd: false,
    isEdit : false,
    isActiveEdit : false
  };

  componentDidMount(){
    this.checkProfile()
    this.apiProvince()
    this.getObjOpt()
  }

  checkProfile = () =>{
    this.setState({loading : true})
    API.getProfileCheck().then(res=>{
      console.log(res)
      const {is_personal_id_complete} = res.data.profile
      // if (this.state.isStartUp && is_personal_id_complete && is_document_complete) {
      //   this.props.history.push('/startup-form-informasi-perusahaan')
      // }
      if (is_personal_id_complete) {
        this.setState({
          ...res.data.profile,
          ...res.data.profile.id_card_address,
          village : res.data.profile.id_card_address.kelurahan,
          isSameAdd : JSON.stringify(res.data.profile.id_card_address) === JSON.stringify(res.data.profile.occupation_address),
          // data occupation
          addressOcc: res.data.profile.occupation_address.address,
          provinceOcc : res.data.profile.occupation_address.province,
          regencyOcc : res.data.profile.occupation_address.regency,
          districtOcc : res.data.profile.occupation_address.district,
          villageOcc : res.data.profile.occupation_address.kelurahan,
          postal_codeOcc : res.data.profile.occupation_address.postal_code,
  
          isEdit : res.data.profile.is_personal_id_complete,
  
          loading : false
        })
      }
      this.setState({loading : false})
    }).catch(()=>{
      this.setState({loading : false})
      Swal.fire({
        icon: 'error',
        title: 'Error 500',
        showConfirmButton: true,
      })
    })
  }
  
  apiProvince = ()=>{
    API.getProvince().then((res) => {
      this.setState({ 
        provinceData: res.data.results,
        provinceDataOccupation: res.data.results,
       });
      // console.log(res,'privince');
    }).catch((err) => {
      console.log(err.response);
    });
  }

  getObjOpt = () =>{
    API.refInvPersonal().then(res=>{
      console.log(res.data)
      this.setState({ 
        objMaritalStatus : res.data.marital_status,
        objGender : res.data.gender,
        objCitizen :res.data.citizenship
      })
    }).catch(err => console.log(err.response))
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

  deactiveEdit = ()=>{
    this.setState({
      isActiveEdit: false,
    }, ()=> this.checkProfile())
  }

  render() {
  
    const initialValueObj = {
      name: kuki.get('full_name'),
      gender: this.state.gender === 'Male' ? 1 :this.state.gender === 'Female'? 2 : 0,
      birth_place : this.state.birth_place,
      birth_date: this.state.birth_date,
      marital_status : this.state.marital_status,
      citizenship : this.state.citizenship,
      phone: kuki.get('phone_number'),
      address: this.state.address,

      province : this.state.province,
      regency : this.state.regency,
      district : this.state.district,
      village : this.state.village,
      postal_code : this.state.postal_code,

      ////OCCUPATION/////
      addressOcc: this.state.addressOcc,
      provinceOcc : this.state.provinceOcc,
      regencyOcc : this.state.regencyOcc,
      districtOcc : this.state.districtOcc,
      villageOcc : this.state.villageOcc,
      postal_codeOcc : this.state.postal_codeOcc,

      isSameAdd: this.state.isSameAdd,
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
      {key : 'province', label : 'Provinsi', data : this.state.provinceData,getData : null, clearData : ['regency', 'district', 'village'],  prevId : null },
      {key : 'regency', label : 'Kota/Kabupaten', data : this.state.regencyData, getData : (id)=>this.apiRegency(false, id), clearData : ['district', 'village'], prevId : 'province' },
      {key : 'district', label : 'Kecamatan', data : this.state.districtData, getData : (id)=>this.apiDistrict(false,id), clearData : ['village'], prevId : 'regency'},
      {key : 'village', label : 'Kelurahan', data : this.state.villageData, getData : (id)=>this.apiVillage(false, id), clearData : [], prevId : 'district'},
      
    ]
    const locationInputFormsOcc =[
      {key : 'provinceOcc', label : 'Provinsi', data : this.state.provinceDataOccupation, getData : null, clearData : ['regency', 'district', 'village'],  prevId : null },
      {key : 'regencyOcc', label : 'Kota/Kabupaten', data : this.state.regencyDataOccupation,  getData : (id)=>this.apiRegency(true, id), clearData : ['district', 'village'], prevId : 'province' },
      {key : 'districtOcc', label : 'Kecamatan', data : this.state.districtDataOccupation,  getData : (id)=>this.apiDistrict(true,id), clearData : ['village'], prevId : 'regency'},
      {key : 'villageOcc', label : 'Kelurahan', data : this.state.villageDataOccupation,  getData : (id)=>this.apiVillage(true, id), clearData : [], prevId : 'district'},
    ]

    return (
      <div className="all-forms-style p-0" style={{backgroundColor : 'unset'}}>
        <Loading onOpen={this.state.loading}/>
        {/* {
          this.state.isStartUp ?
          <HeaderStartupForm backPath='/' activeStep={1} />
          :
          <HeaderInvestForm backPath='/' activeStep={1} />
        } */}
        <div className="box-form-data" style={{border : 0, marginBottom: 0}}>
          <div className='mb-4 editprofile' style={{display : 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p className="title mb-0">
                Data Diri
            </p>
            {
              !this.state.isActiveEdit?
              <Button onClick={()=> this.setState({isActiveEdit : true})}>
                Ubah <i className="fas fa-pen ml-1"></i>
              </Button>
              : null
            }

          </div>
          <Formik
            enableReinitialize
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
                "marital_status": val.marital_status.id,
                "citizenship": val.citizenship.id,
                "id_card_address": idCardAddress,
                "occupation_address": val.isSameAdd ? idCardAddress : occupationAddress
              }

              this.setState({loading : true})
              API.postPersonalAccount(data).then(res =>{
                this.setState({loading : false, isActiveEdit : false})
                console.log(res)
                Swal.fire({
                  icon: 'success',
                  title: 'Data Diri berhasil di simpan',
                  showConfirmButton: false,
                  timer: 1500
                })
                // .then(()=> this.props.history.push( this.state.isStartUp ? '/startup-form-dokumen' : '/investor-form-pendidikan-pekerjaan'))
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
              <form onSubmit={handleSubmit} id="dataDiriProfileForm">
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
                      disabled={!this.state.isActiveEdit}
                    >
                      <Button className={values.gender === 1 ? "act-gen" : null}
                        onClick={() => setFieldValue("gender", 1)}
                      >
                        Pria
                      </Button>
                      <Button className={
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
                      onBlur={handleBlur}
                      required
                      helperText={touched.birth_place && errors.birth_place}
                      error={touched.birth_place && errors.birth_place ? true : false}
                      disabled={!this.state.isActiveEdit}
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      name="birth_date"
                      type="date"
                      id='birth_date'
                      InputProps={{inputProps: { min: "1945-01-01", max: `${new Date().getFullYear() - 17}-01-01`} }}
                      required
                      label="Tanggal Lahir"
                      helperText={touched.birth_date && errors.birth_date}
                      error={touched.birth_date && errors.birth_date? true: false}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onBlur={handleBlur}
                      as={InputText}
                      disabled={!this.state.isActiveEdit}
                    />
                  </div>
                  <div className="col-md-12">
                    <InputSelect
                      label="Status Pernikahan"
                      name="marital_status"
                      required
                      value={values.marital_status}
                      getOptionLabel={(val) => val.text}
                      getOptionSelected ={(option, val) => option.text  === val.text  }
                      options={this.state.objMaritalStatus}
                      helperText={touched.marital_status && errors.marital_status}
                      error={touched.marital_status && errors.marital_status ? true : false}
                      // value={values.marital_status}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("marital_status", val)}
                      disabled={!this.state.isActiveEdit}
                    />
                  </div>
                  <div className="col-md-12">
                    <InputSelect
                      label="Status Kewarganegaraan"
                      name="citizenship"
                      value={values.citizenship}
                      getOptionLabel={(val) => val.text.toString()}
                      getOptionSelected ={(option, val) => option.text  === val.text  }
                      options={this.state.objCitizen}
                      helperText={touched.citizenship && errors.citizenship}
                      error={touched.citizenship && errors.citizenship ? true : false}
                      // value={values.citizenship}
                      onBlur={handleBlur}
                      required
                      onChange={(e, val) => setFieldValue("citizenship", val)}
                      disabled={!this.state.isActiveEdit}
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
                      value={values.address}
                      rows={5}
                      helperText={touched.address && errors.address}
                      error={touched.address && errors.address ? true : false}
                      disabled={!this.state.isActiveEdit}
                    />
                  </div>
                  
                  {/* ////LOCATION//// */}
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
                          disabled={!this.state.isActiveEdit}
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
                      disabled={!this.state.isActiveEdit}
                    />
                  </div>


                  {/* <pre>
                    {JSON.stringify(values, null, 4)}
                  </pre>
                  <pre>
                    {JSON.stringify(errors, null, 4)}
                  </pre> */}


              <div className="col-md-12 mb-3">
                <label className="d-inline mb-4"
                  style={{ fontSize: 14, cursor : values.address.length === 0 || !values.province || !values.regency || !values.district || !values.village || !values.postal_code ? 'not-allowed' : 'pointer'}}
                >
                        <Checkbox
                          style={
                            values.address.length === 0 || !values.province || !values.regency || !values.district || !values.village || !values.postal_code ?  
                            { marginBottom: 3 }
                            :
                            { color: "#01579B", marginBottom: 3 } 
                          }
                          name="isSameAdd"
                          disabled={values.address.length === 0 || !values.province || !values.regency || !values.district || !values.village || !values.postal_code ||!this.state.isActiveEdit}
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
                              setFieldValue("addressOcc", null)
                              setFieldValue("provinceOcc", null)
                              setFieldValue("regencyOcc", null)
                              setFieldValue("districtOcc", null)
                              setFieldValue("villageOcc", null)
                              setFieldValue("postal_codeOcc", '')
                            }
                          }}
                          checked={values.isSameAdd}
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
                      disabled={!this.state.isActiveEdit}
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
                          options={res.data.length === 0 ? [{name : 'Loading...'}] : res.data}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={touched[`${res.key}`] && errors[`${res.key}`] ? true : false}
                          onBlur={handleBlur}
                          value={values[`${res.key}`]}
                          onChange={(e, val, reason)=>{
                            if (reason === "clear") {
                              setFieldValue(`${res.key}`, null)
                              setFieldValue("postal_codeOcc", '')
                              for (const c of res.clearData) {
                                // console.log(c)
                                setFieldValue(`${c}Occ`, '')
                                this.setState({[`${c}DataOccupation`] : [] })
                              }
                            }
                            if (reason === "select-option") {
                              setFieldValue(`${res.key}`, val)
                              if (val.postal_code) {
                                setFieldValue("postal_codeOcc", val.postal_code)
                              }
                              // res.getData(val.id)
                            }
                            for (const c of res.clearData) {
                              setFieldValue(`${c}Occ`, '')
                              this.setState({[`${c}DataOccupation`] : [] })
                            }
                            console.log(reason)
                          }}
                          disabled={!this.state.isActiveEdit}
                          onOpen={()=> res.prevId !== null && res.getData !== null && values[`${res.prevId}Occ`] !== null ? res.getData(values[`${res.prevId}Occ`].id): null}
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
                        disabled={!this.state.isActiveEdit}
                      />
                    </div>

                  </Fade>
                </div>
              </form>
            )}
          </Formik>
        </div>
        {
          this.state.isActiveEdit?
        <div className="foot-data-diri mb-5">
          {/* <p className="agreement">
            *Saya menjamin bahwa informasi yang saya cantumkan diatas adalah
            benar dan siap bertanggung jawab atas segala konsekuensi yang
            terjadi di kemudian hari, serta memiliki kemampuan analisis resiko
            terhadap saham penerbit dan memenuhi kriteria pemodal sesuai
            peraturan yang berlaku.
          </p> */}
            <Button type="submit" form="dataDiriProfileForm">
              {this.state.isEdit ? "UBAH" : "SIMPAN"}
            </Button>
            <Button variant='contained' onClick={this.deactiveEdit}>
              Batal
            </Button>
        </div>
        : null
        }

      </div>
    );
  }
}

export default DataDiriProfile;
