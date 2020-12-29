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
    loading : false,
    budgetOpt : [],
    infoOpt : [],
    riskOpt : [],
    invOpt : []

  };

  componentDidMount(){
    this.checkProfileAll()
    this.getObjOpt()
  }

  checkProfileAll = () =>{
    const arrCheckAll = [
      { key : 'is_personal_id_complete', link : ()=>this.props.history.push('/investor-form-data-diri')}, 
      { key : 'is_educational_complete', link : ()=>this.props.history.push('/investor-form-pendidikan-pekerjaan')}, 
      { key : 'is_document_complete', link : ()=>this.props.history.push('/investor-form-dokumen')}, 
      { key : 'bank_accounts', link : ()=>this.props.history.push('/investor-form-bank')}, 
      { key : 'is_preference_complete', link : ()=> {}}, 
    ]
    
    API.getProfileCheck().then(res=>{
      this.setState({loading : true})
      for (const keyCheck of arrCheckAll) {
        // console.log(keyCheck);
        if (!res.data.profile[`${keyCheck.key}`] || res.data.profile[`${keyCheck.key}`].length === 0 ) {
          // console.log(res.data.profile[`${keyCheck.key}`]=== true)
          // console.log(keyCheck, 'IM HERE')
          return keyCheck.link()
        }else{
          this.setState({loading : false},)
        }
      }
      if(res.data.profile.is_preference_complete){
        return this.setState({completeInvestFormModal : true, loading : false},)
      }
    }).catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Error 500',
        showConfirmButton: true,
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
    })
  }

  getObjOpt = () =>{
    API.refInvPreference().then(res=>{
      console.log(res)
      this.setState({ 
        budgetOpt : res.data.budget_preference,
        infoOpt : res.data.information_source,
        riskOpt : res.data.risk_preference,
      })
    }).catch(err => console.log(err.response))
    API.refTags().then(res=>{
      console.log(res)
      this.setState({ 
        invOpt : res.data,
      })
    }).catch(err => console.log(err.response))
  }



  offModal = () =>this.setState({ completeInvestFormModal: false }, () => (window.location.href = "/company-list"));

  render() {
    // const invOpt = [
    //   { text: "Otomotiv", id: 1 },
    //   { text: "Finansial", id: 2 },
    //   { text: "Travel", id: 3 },
    //   { text: "Pertanian", id: 4 },
    //   { text: "Teknologi", id: 5 },
    //   { text: "Pertanian", id: 6 },
    //   { text: "Penginapan", id: 7 },
    //   { text: "Retail", id: 0 },
    // ];

    const initialValueObj = {
        "budget_preference": null,
        "risk_preference": null,
        "information_source": null,
        investment_preference : []
      }

    const schemaObj = Yup.object({
      budget_preference: Yup.object().nullable().required(),
      risk_preference: Yup.object().nullable().required(),
      information_source: Yup.object().nullable().required(),
      investment_preference : Yup.array().min(1, 'Harus di isi minimal 1')
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
              const body = {
                "budget_preference": val.budget_preference.id,
                "risk_preference": val.risk_preference.id,
                "information_source": val.information_source.id,
                "investment_preference" :val.investment_preference.map(res=> res.id)
              }
              console.log(body);
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
              values,
              touched,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit} id="investorForm">
                <div className="row">
                  <div className="col-md-12">
                    <InputSelect
                      label="Budget Investasi"
                      // required
                      name="budget_preference"
                      getOptionLabel={(val) => val.text}
                      options={this.state.budgetOpt}
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
                      // required
                      name="risk_preference"
                      getOptionLabel={(val) => val.text}
                      options={this.state.riskOpt}
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
                      // required
                      multiple
                      filterSelectedOptions
                      name="investment_preference"
                      getOptionLabel={(val) => val.name}
                      options={this.state.invOpt}
                      helperText={touched.investment_preference && errors.investment_preference}
                      error={touched.investment_preference && errors.investment_preference ? true : false}
                      onBlur={handleBlur}
                      value={values.investment_preference}
                      onChange={(e, val) => {
                        setFieldValue("investment_preference", val)
                      }}
                    />
                  </div>
                  {/* <pre>
                    {JSON.stringify(values, null, 4)}
                  </pre> */}
                  <div className="col-md-12">
                    <InputSelect
                      label="Darimana anda mengetahui tentang Invest X ? *"
                      name="information_source"
                      // required
                      getOptionLabel={(val) => val.text}
                      options={this.state.infoOpt}
                      helperText={
                        touched.information_source && errors.information_source
                      }
                      error={
                        touched.information_source && errors.information_source
                          ? true
                          : false
                      }
                      // value={values.information_source}
                      onBlur={handleBlur}
                      onChange={(e, val) =>
                        setFieldValue("information_source", val)
                      }
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
