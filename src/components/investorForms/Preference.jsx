import React, { Component } from "react";

import PopSuccessForm from "../shared/PopSuccessForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputSelect } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderInvestForm from "./HeaderInvestForm";

import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

class Preference extends Component {
  state = {
    pageName : 'preference',
    completeInvestFormModal : false,
    loading : false
  };

  componentDidMount(){
    this.checkProfileAll()
  }

  checkProfileAll = () =>{
    // this.setState({loading : true})
    const arrCheckAll = [
      { key : 'is_personal_id_complete', link : '/investor-form-preference'}, 
      { key : 'is_educational_complete', link : '/investor-form-pendidikan-pekerjaan'}, 
      { key : 'is_document_complete', link : '/investor-form-dokumen'}, 
      { key : 'bank_accounts.number', link : '/investor-form-bank'}, 
      { key : 'is_preference_complete', link : '/investor-form-preference'}, 
    ]
    API.getProfileCheck().then(res=>{
      for (const keyCheck of arrCheckAll) {
        console.log(keyCheck);
        if (res.data.profile[`${keyCheck.key}`] === true && res.data.profile[`${keyCheck.key}`] !== "") {
          // console.log(res.data.profile[`${keyCheck.key}`]=== true)
          if (res.data.profile[`${keyCheck.key}`] === true && keyCheck.key === 'is_preference_complete') {
              this.setState({completeInvestFormModal : true, loading : false})
          }
        }else{
          this.props.history.push(keyCheck.link)
          console.log('nonpnppp')
        }

      }
    }).catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Error 500',
        showConfirmButton: true,
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
    })
  }



  offModal = () =>this.setState({ completeInvestFormModal: false }, () => (window.location.href = "/"));

  render() {
    const budgetObj = [
      { label: "<10.000.000", value: 1 },
      { label: ">10.000.000", value: 2 },
      // { label: "300.000", value: 2 },
      // { label: "400.000", value: 3 },
      // { label: "500.000", value: 4 },
    ];

    const riskObj = [
      { label: "Rendah", value: 1 },
      { label: "Sedang", value: 2 },
      { label: "Tinggi", value: 3 },
    ];

    const sourceObj = [
      { label: "Otomotiv", value: 1 },
      { label: "Finansial", value: 2 },
      { label: "Travel", value: 3 },
      { label: "Pertanian", value: 4 },
      // { label: "Teknologi", value: 5 },
      // { label: "Pertanian", value: 6 },
      // { label: "Penginapan", value: 7 },
      // { label: "Retail", value: 0 },
    ];

    const initialValueObj = {
        "budget_preference": null,
        "risk_preference": null,
        "information_source": null
      }

    const schemaObj = Yup.object({
      budget_preference: Yup.object().nullable().required(),
      risk_preference: Yup.object().nullable().required(),
      information_source: Yup.object().nullable().required(),
    });

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading}/>
        {this.state.completeInvestFormModal ? (
          <PopSuccessForm offModal={this.offModal} />
        ) : null}
        <HeaderInvestForm activeStep={5} />

        <div className="box-form-data">
          {/* ///////////////////FORMS//////////////////// */}
          <p className="title">Preference</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
              const body = {
                "budget_preference": val.budget_preference.value,
                "risk_preference": val.risk_preference.value,
                "information_source": val.information_source.value
              }
              API.postPreference(body).then(res =>{
                this.setState({loading : true})
                console.log(res)
                Swal.fire({
                  icon: 'success',
                  title: `Data ${this.state.pageName} berhasil di simpan`,
                  showConfirmButton: false,
                  timer: 1500
                }).then(()=> this.setState({completeInvestFormModal : true, loading : false}))
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
              // values,
              touched,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit} id="investorForm">
                <div className="row">
                  <div className="col-md-12">
                    <InputSelect
                      label="Budget Investasi"
                      required
                      name="budget_preference"
                      getOptionLabel={(val) => val.label}
                      options={budgetObj}
                      helperText={touched.budget_preference && errors.budget_preference}
                      error={
                        touched.budget_preference && errors.budget_preference ? true : false
                      }
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("budget_preference", val)}
                    />
                  </div>
                  <div className="col-md-12">
                    <InputSelect
                      label="Preferensi Resiko Investasi"
                      required
                      name="risk_preference"
                      getOptionLabel={(val) => val.label}
                      options={riskObj}
                      helperText={touched.risk_preference && errors.risk_preference}
                      error={
                        touched.risk_preference && errors.risk_preference ? true : false
                      }
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("risk_preference", val)}
                    />
                  </div>
                  <div className="col-md-12">
                    <InputSelect
                      label="Preferensi Investasi"
                      required
                      name="information_source"
                      getOptionLabel={(val) => val.label}
                      options={sourceObj}
                      helperText={touched.information_source && errors.information_source}
                      error={touched.information_source && errors.information_source ? true : false}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("information_source", val)}
                    />
                  </div>
                  {/* <div className="col-md-12">
                    <InputSelect
                      label="Darimana anda mengetahui tentang Invest X ? *"
                      name="sumberpendapatan"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={
                        touched.sumberpendapatan && errors.sumberpendapatan
                      }
                      error={
                        touched.sumberpendapatan && errors.sumberpendapatan
                          ? true
                          : false
                      }
                      value={values.sumberpendapatan}
                      onBlur={handleBlur}
                      onChange={(e, val) =>
                        setFieldValue("sumberpendapatan", val)
                      }
                    />
                  </div> */}
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

          <Button
            type="submit"
            form="investorForm"
            // onClick={() => this.setState({ completeInvestFormModal: true })}
          >
            SIMPAN & LANJUTKAN
          </Button>
        </div>
      </div>
    );
  }
}

export default Preference;
