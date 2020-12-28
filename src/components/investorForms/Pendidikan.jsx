import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { InputSelect } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderInvestForm from "./HeaderInvestForm";

import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

class Pendidikan extends Component {
  state = {
    loading : false,
    pageName : 'Pendidikan dan Pekerjaan',
    lastEdu : [],
    profession : [],
    jobIndustry : [],
    monthlySalary : [],
    incomeSource : []
  };

  componentDidMount(){
    this.checkProfile()
    this.getObjOpt()
  }

  checkProfile = () =>{
    this.setState({loading : true})
    const nextLink = '/investor-form-dokumen'
    const keyCheck = 'is_educational_complete'
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

  getObjOpt = () =>{
    API.refInvEducation().then(res=>{
      // console.log(res)
      this.setState({ 
        lastEdu : res.data.last_education,
        profession : res.data.profession,
        jobIndustry : res.data.job_industry,
        monthlySalary : res.data.monthly_salary,
        incomeSource : res.data.income_source
      })
    }).catch(err => console.log(err.response))
  }



  render() {

    const initialValueObj = {
      "last_education":null,
      "profession":null,
      "job_industry":null,
      "monthly_salary":null,
      "income_source":null
    };

    const schemaObj = Yup.object({
      last_education: Yup.object().nullable().required(),
      profession: Yup.object().nullable().required(),
      job_industry: Yup.object().nullable().required(),
      monthly_salary: Yup.object().nullable().required(),
      income_source: Yup.object().nullable().required(),
    });

    return (
      <div className="all-forms-style">
        <Loading onOpen={this.state.loading}/>
        <HeaderInvestForm activeStep={2} />
        <div className="box-form-data">
          {/* ///////////////////FORMS//////////////////// */}
          <p className="title">{this.state.pageName}</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              const data = {
                "last_education": val.last_education.id,
                "profession": val.profession.id,
                "job_industry":val.job_industry.id,
                "monthly_salary":val.monthly_salary.id,
                "income_source":val.income_source.id
              }
              API.postEducation(data).then(res =>{
                this.setState({loading : true})
                console.log(res)
                Swal.fire({
                  icon: 'success',
                  title: `Data ${this.state.pageName} berhasil di simpan`,
                  showConfirmButton: false,
                  timer: 1500
                }).then(()=> this.props.history.push('/investor-form-dokumen'))
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
                      label="Pendikan Terakhir"
                      name="last_education"
                      getOptionLabel={(val) => val.text}
                      getOptionSelected={(option, value) => option.text === value.text}
                      options={this.state.lastEdu}
                      helperText={touched.last_education && errors.last_education}
                      error={touched.last_education && errors.last_education ? true : false}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("last_education", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Pekerjaan Saat Ini"
                      name="profession"
                      getOptionLabel={(val) => val.text}
                      getOptionSelected={(option, value) => option.text === value.text}
                      options={this.state.profession}
                      helperText={touched.profession && errors.profession}
                      error={touched.profession && errors.profession ? true : false}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("profession", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Industri Pekerjaan"
                      name="job_industry"
                      getOptionLabel={(val) => val.text}
                      getOptionSelected={(option, value) => option.text === value.text}
                      options={this.state.jobIndustry}
                      helperText={touched.job_industry && errors.job_industry}
                      error={touched.job_industry && errors.job_industry ? true : false}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("job_industry", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Pendapatan Perbulan"
                      name="monthly_salary"
                      getOptionLabel={(val) => val.text}
                      getOptionSelected={(option, value) => option.text === value.text}
                      options={this.state.monthlySalary}
                      helperText={touched.monthly_salary && errors.monthly_salary}
                      error={touched.monthly_salary && errors.monthly_salary ? true : false}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("monthly_salary", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Sumber Pendapatan"
                      name="income_source"
                      getOptionLabel={(val) => val.text}
                      getOptionSelected={(option, value) => option.text === value.text}
                      options={this.state.incomeSource}
                      helperText={touched.income_source && errors.income_source}
                      error={touched.income_source && errors.income_source ? true : false}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("income_source", val)}
                    />
                  </div>
                  {/* <pre>
                    {JSON.stringify(values, null, 4)}
                  </pre> */}
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
          {/* <Link to="/investor-form-dokumen"> */}
            <Button type="submit" form="investorForm">
              SIMPAN & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Pendidikan;
