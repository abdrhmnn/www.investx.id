import React, { Component } from "react";
// import { Link } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import { InputSelect } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

class InfoNonFinansial extends Component {
  state = {
    loading : false,
    "financial_data_collection_system": [],
    "credit_reputation": [],
    "market_position": [],
    "future_strategy": [],
    "location_status": [],
    "competition_level": [],
    "managerial_skill": [],
    "technical_skill": [],
    dataCompanyBefore : [],
    pageName : "Informasi Non Finansial",
  };

  componentDidMount(){
    this.getObjOpt()
    this.checkFormCompany()
  }

  checkFormCompany = ()=>{
    API.refCheckCompanyMe().then(res=>{
      console.log(res.data.results[0], 'CHECK')
      this.setState({dataCompanyBefore : res.data.results})
      const data = res.data.results[0]
      const checkArr = [
        // {label :'is_general_complete', isCompleteLink : '/startup-form-informasi-finansial'},
        // {label :'is_financial_complete', isCompleteLink : '/startup-form-informasi-nonfinansial'},
        {label :'is_nonfinancial_complete',  isCompleteLink : '/startup-form-media'},
        // {label :'is_media_complete', isCompleteLink : '/startup'},
      ]
      for (const val of checkArr) {
        if (data[`${val.label}`]) {
            this.props.history.push(val.isCompleteLink)
            console.log(val.isCompleteLink)
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

  getObjOpt = () =>{
    API.refCompanyNonFinancial().then(res=>{
      console.log(res)
      this.setState({ 
        "financial_data_collection_system": res.data.financial_data_collection_system,
        "credit_reputation": res.data.credit_reputation,
        "market_position": res.data.market_position,
        "future_strategy": res.data.future_strategy,
        "location_status": res.data.location_status,
        "competition_level": res.data.competition_level,
        "managerial_skill": res.data.managerial_skill,
        "technical_skill": res.data.technical_skill
      })
    }).catch(err => console.log(err.response))
  }

  render() {
    const initialValueObj = {
      // "nonce": "",
      "financial_data_collection_system": null,
      "credit_reputation": null,
      "market_position": null,
      "future_strategy": null,
      "location_status": null,
      "competition_level": null,
      "managerial_skill": null,
      "technical_skill": null
    }

    const schemaObj = Yup.object({
      financial_data_collection_system: Yup.object().nullable().required(),
      credit_reputation: Yup.object().nullable().required(),
      market_position: Yup.object().nullable().required(),
      future_strategy: Yup.object().nullable().required(),
      location_status: Yup.object().nullable().required(),
      competition_level: Yup.object().nullable().required(),
      managerial_skill: Yup.object().nullable().required(),
      technical_skill: Yup.object().nullable().required(),
    });

    const inputFieldNonFinansial = [
      {label :'Sistem Pencatatan Keuangan', key : 'financial_data_collection_system'},
      {label :'Reputasi Pinjaman Bank/Lainya', key : 'credit_reputation'},
      {label :'Posisi Pasar atas Produk/Jasa', key : 'market_position'},
      {label :'Strategi Kedepan', key : 'future_strategy'},
      {label :'Status Lokasi / Kantor / Tempat Usaha', key : 'location_status'},
      {label :'Tingkat Persaingan', key : 'competition_level'},
      {label :'Kemampuan Manajerial', key : 'managerial_skill'},
      {label :'Kemampuan Teknis', key : 'technical_skill'},
    ]
    

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading} />
        <HeaderStartupForm activeStep={5} />
        <div className="box-form-data">
          <p className="title">Informasi Non Finansial</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              const body = { 
                "nonce": this.state.dataCompanyBefore[0].nonce,
                "financial_data_collection_system": val.financial_data_collection_system.id,
                "credit_reputation": val.credit_reputation.id,
                "market_position": val.market_position.id,
                "future_strategy": val.future_strategy.id,
                "location_status": val.location_status.id,
                "competition_level": val.competition_level.id,
                "managerial_skill": val.managerial_skill.id,
                "technical_skill": val.technical_skill.id
              }
              console.log(val);
              API.postCompanyNonFinancial(body).then(res =>{
                this.setState({loading : true})
                console.log(res)
                Swal.fire({
                  icon: 'success',
                  title: `Data ${this.state.pageName} berhasil di simpan`,
                  showConfirmButton: false,
                  timer: 1500
                }).then(()=> this.props.history.push('/startup-form-media') )
              }).catch(err =>{
                this.setState({loading : false})
                Swal.fire({
                  icon: 'error',
                  title: `Data ${this.state.pageName} gagal di simpan`,
                  text : `${Object.entries(err.response.data)} \n`
                })
                console.log(err.response)
              })
              console.log(body);
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
              <form onSubmit={handleSubmit} id="startupForm">
                <div className="row">

                  {
                    inputFieldNonFinansial.map((res, i)=>(
                      <div className="col-md-12 " key={i}>
                        <InputSelect
                          label={res.label}
                          name={res.key}
                          getOptionLabel={(val) => val.text}
                          options={this.state[`${res.key}`]}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={touched[`${res.key}`] && errors[`${res.key}`] ? true : false}
                          // value={values[`${res.key}`]}
                          onBlur={handleBlur}
                          onChange={(e, val) => setFieldValue(res.key, val)}
                        />
                      </div>
                    ))
                  }

                  
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
          {/* <Link to="/startup-form-media"> */}
            <Button type="submit" form="startupForm">
              SIMPAN & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default InfoNonFinansial;
