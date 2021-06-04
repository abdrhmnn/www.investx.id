import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText, InputSelect } from "../shared/InputComponents";

import { Button } from "@material-ui/core";
import HeaderInvestForm from "./HeaderInvestForm";

import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

class Bank extends Component {
  state ={
    loading : false,
    pageName : 'bank',
    dataBanks : [],
  }

  componentDidMount(){
    this.checkProfile()
    this.getBanks()
  }

  getBanks = () =>{
    const param = {
      limit : 200
    }
    API.refBanks(param).then(res=>{
     console.log(res.data)
     this.setState({dataBanks : res.data.results})
    }).catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Error get banks',
        showConfirmButton: true,
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
    })
  }

  checkProfile = () =>{
    this.setState({loading : true})
    const nextLink = '/investor-form-preference'
    // const keyCheck = 'is_educational_complete'
    API.getProfileCheck().then(res=>{
      if (res.data.profile.bank_accounts.length !== 0) {
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
  
  render() {

    const initialValueObj = {
      "bank": "",
      "number": "",
      "name": "",
      "branch": ""
    }

    const schemaObj = Yup.object({
      bank: Yup.object().required(),
      branch: Yup.string().required(),
      name: Yup.string().required(),
      number: Yup.string().required(),
    });

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading}/>
        <HeaderInvestForm activeStep={4} />
        <div className="box-form-data">
          {/* ///////////////////FORMS//////////////////// */}
          <p className="title">BANK</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val.bank)
              // console.log(typeof(val.bank.value))
              const body = {
                "bank": parseInt(val.bank.id),
                "number": val.number,
                "name": val.name,
                "branch": val.branch
              }
              console.log("BODY BANK",body)
              API.postBank(body).then(res =>{
                // this.setState({loading : true})
                console.log(res)
                Swal.fire({
                  icon: 'success',
                  title: `Data ${this.state.pageName} berhasil di simpan`,
                  showConfirmButton: false,
                  timer: 1500
                }).then(()=> this.props.history.push('/investor-form-preference'))
              }).catch(err =>{
                this.setState({loading : false})
                Swal.fire({
                  icon: 'error',
                  title: `Data ${this.state.pageName} gagal di simpan`,
                  text : `${Object.entries(err.response.data)} \n`
                })
              //   console.log(err.response)
              })

            }}
          >
            {({
              handleBlur,
              handleSubmit,
              errors,
              // values,
              touched,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit} id="investorForm">
                <div className="row">
                  <div className="col-md-12">
                    <InputSelect
                      label="Nama Bank"
                      required
                      name="bank"
                      getOptionLabel={(val) => val.display_name}
                      getOptionSelected={(option, value) => option.display_name === value.display_name}
                      options={this.state.dataBanks}
                      helperText={touched.bank && errors.bank}
                      error={touched.bank && errors.bank ? true : false}
                      // value={values.bank}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("bank", val)}
                    />
                  </div>
                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Kantor Cabang"
                      required
                      type="text"
                      name="branch"
                      helperText={
                        touched.branch && errors.branch
                      }
                      error={touched.branch && errors.branch ? true : false}
                    />
                  </div>
                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="Nama Pemilik Rekening"
                      required
                      type="text"
                      name="name"
                      helperText={touched.name &&errors.name}
                      error={touched.name && errors.name ? true : false}
                    />
                  </div>
                  <div className="col-md-12">
                    <Field
                      as={InputText}
                      label="No Rekening"
                      required
                      type="number"
                      name="number"
                      helperText={touched.number && errors.number}
                      error={touched.number && errors.number ? true : false}
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
          {/* <Link to="/investor-form-preference"> */}
            <Button type="submit" form="investorForm">
              SIMPAN & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Bank;
