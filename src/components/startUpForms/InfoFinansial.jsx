import React, { Component } from "react";

// import { Link } from "react-router-dom";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputTextCurrency, InputSelect, InputText } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

import API from "../../api";
import Loading from "../shared/Loading";
import Swal from "sweetalert2";

class InfoFinansial extends Component {
  state = {
    pageName : "Informasi Finansial",
    dataBanks : [],
    loading : false,

    // datas 
    "nonce": "",
    "investment_needed": '',
    "average_monthly_turnover": '',
    "average_monthly_profit": '',
    "average_monthly_turnover_last_year": '',
    "average_monthly_profit_last_year": '',
    "total_debt": '',
    "paid_up_capital": '',
    "book_value_per_share": '',
    "bank": null,
    "number": "",
    "name": "",
    "branch": "",

    isEdit : false
  };

  componentDidMount(){
    // this.getBanks()
    // this.checkFormCompany()
  }
  
  checkFormCompany = ()=>{
    API.refCheckCompanyMe().then(res=>{
      this.setState({loading : true, nonce : res.data.results[0].nonce})
      console.log(res, 'ARRAY')
      // if (res.data.results[0].is_financial_complete) {
        console.log(res.data.results[0].nonce)
        var nonce = res.data.results[0].nonce
        API.getCompanyDetail(res.data.results[0].id62).then(val=>{
          this.setState({
            ...this.state,
            ...val.data,
            isEdit : res.data.results[0].is_financial_complete,
            loading : false,
            "nonce" : nonce
          })
          console.log(val)
          console.log(nonce)
        }).catch(err=>{
          console.log(err.response)
          this.setState({loading : false})
        })
      // }
      // this.setState({loading : true})
    }).catch(err => {
      this.setState({loading : false})
      console.log(err.response)
      Swal.fire({
        icon: 'error',
        title: 'Error 500',
        showConfirmButton: true,
      }).then((result)=> result.isConfirmed ? this.props.history.push('/') : null )
    })
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

  render() {
    const initialValueObj = {
      // "nonce": "",
      "investment_needed": this.state.investment_needed,
      "average_monthly_turnover": this.state.average_monthly_turnover,
      "average_monthly_profit": this.state.average_monthly_profit,
      "average_monthly_turnover_last_year": this.state.average_monthly_turnover_last_year,
      "average_monthly_profit_last_year": this.state.average_monthly_profit_last_year,
      "total_debt": this.state.total_debt,
      "paid_up_capital": this.state.paid_up_capital,
      "book_value_per_share": this.state.book_value_per_share,
      "bank": this.state.bank,
      "number": this.state.number,
      "name": this.state.name,
      "branch": this.state.branch,
    }

    const schemaObj = Yup.object({
      investment_needed: Yup.number().typeError("value have to be number").required(),
      average_monthly_turnover: Yup.number().typeError("value have to be number").required(),
      average_monthly_profit: Yup.number().typeError("value have to be number").required(),
      average_monthly_turnover_last_year: Yup.number().typeError("value have to be number").required(),
      average_monthly_profit_last_year: Yup.number().typeError("value have to be number").required(),
      total_debt: Yup.number().typeError("value have to be number").required(),
      paid_up_capital: Yup.number().typeError("value have to be number").required(),
      book_value_per_share: Yup.number().typeError("value have to be number").required(),

      bank: Yup.object().nullable().required('Nama bank tidak valid'),
      branch: Yup.string().required('Kantor cabang tidak valid'),
      name: Yup.string().required('Nama pemilik cabang tidak valid'),
      number: Yup.number().typeError("value have to be number").required('No. Rekening tidak valid'),
    });

    const formInputFinansial = [
      { fieldInput:'number', label : 'Besar dana yang dibutuhkan', key : 'investment_needed', placeholder : 'Contoh : 100.000.000'},
      { fieldInput:'number', label : 'Rata-rata omset per bulan tahun ini', key : 'average_monthly_turnover', placeholder : 'Contoh : 500.000.000'},
      { fieldInput:'number', label : 'Rata-Rata laba per bulan tahun ini', key : 'average_monthly_profit', placeholder : 'Contoh : 200.000.000'},
      { fieldInput:'number', label : 'Rata-rata omset per bulan tahun sebelumnya', key : 'average_monthly_turnover_last_year', placeholder : 'Contoh : 5.000.000.000'},
      { fieldInput:'number', label : 'Rata-rata laba per bulan tahun sebelumnya', key : 'average_monthly_profit_last_year', placeholder : 'Contoh : 2.000.000.000'},
      { fieldInput:'number', label : 'Total hutang bank/ lembaga pembiayaan', key : 'total_debt', placeholder : 'Contoh : 800.000.000'},
      { fieldInput:'number', label : 'Total modal disetor*', key : 'paid_up_capital', placeholder : 'Contoh : 20.000.000'},
      { fieldInput:'number', label : 'Nilai per lembar saham', key : 'book_value_per_share', placeholder : 'Contoh : 200.000'},


      { fieldInput:'select', label : 'Nama bank / lembaga pembiayaan', key : 'bank'}, 
      { fieldInput:'text', label : 'Kantor Cabang', key : 'branch'}, 
      { fieldInput:'text', label : 'Nama Pemilik Rekening', key : 'name'}, 
      { fieldInput:'text', label : 'No Rekening', key : 'number'}, 
    ]

    return (
      <div className="all-forms-style">
        <HeaderStartupForm backPath='/startup-form-informasi-perusahaan' activeStep={4} />
        <Loading onOpen={this.state.loading}/>

        <div className="box-form-data">
          <p className="title">Informasi Finansial</p>
          <Formik
            enableReinitialize
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
              const body = {
                "nonce": this.state.nonce,
                "investment_needed": val.investment_needed,
                "average_monthly_turnover": val.average_monthly_turnover,
                "average_monthly_profit": val.average_monthly_profit,
                "average_monthly_turnover_last_year": val.average_monthly_turnover_last_year,
                "average_monthly_profit_last_year": val.average_monthly_profit_last_year,
                "total_debt": val.total_debt,
                "bank_account": {
                  "bank": val.bank.id,
                  "number": val.number ,
                  "name": val.name ,
                  "branch": val.branch 
                },
                "paid_up_capital": val.paid_up_capital,
                "book_value_per_share": val.book_value_per_share
              }

              API.postCompanyFinancial(body).then(res =>{
                this.setState({loading : true})
                console.log(res)
                Swal.fire({
                  icon: 'success',
                  title: `Data ${this.state.pageName} berhasil di simpan`,
                  showConfirmButton: false,
                  timer: 1500
                }).then(()=> this.props.history.push('/startup-form-informasi-nonfinansial') )
              }).catch(err =>{
                this.setState({loading : false})
                Swal.fire({
                  icon: 'error',
                  title: `Data ${this.state.pageName} gagal di simpan`,
                  text : `${Object.entries(err.response.data)} \n`
                })
                console.log(err.response)
              })
              console.log(body)
            }}
          >
            {({ 
              handleSubmit, 
              errors, 
              touched,
              setFieldValue,
              handleBlur,
              values 
            }) => (
              <form onSubmit={handleSubmit} id="startupForm">
                <div className="row">
                  {
                    formInputFinansial.map((res,i)=>(
                      <div className="col-md-12" key={i}>
                      {
                        res.fieldInput === 'number'?
                        <InputTextCurrency
                          // as={InputTextCurrency}
                          label={res.label}
                          required
                          value={values[res.key]}
                          type="text"
                          name={res.key}
                          currencySymbol={"Rp"}
                          decimalPlaces={0}
                          textAlign='left'
                          decimalCharacter=","
                          digitGroupSeparator="."
                          // minimumValue='1'
                          placeholder={res.placeholder}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={
                            touched[`${res.key}`] && errors[`${res.key}`] ? true : false
                          }
                          onChange = {(e, val)=>setFieldValue( res.key , val )}
                        />
                        : res.fieldInput === 'select' ?
                        <InputSelect
                          label={res.label}
                          required
                          name={res.key}
                          getOptionLabel={(val) => val.display_name}
                          getOptionSelected={(option, value) => option.display_name === value.display_name}
                          options={this.state.dataBanks}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={touched[`${res.key}`] && errors[`${res.key}`] ? true : false}
                          // value={values.bank}
                          onBlur={handleBlur}
                          onChange={(e, val) => setFieldValue(res.key, val)}
                        />
                        : 
                        <Field
                          as={InputText}
                          label={res.label}
                          required
                          type='text'
                          name={res.key}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={touched[`${res.key}`] && errors[`${res.key}`] ? true : false}
                        />
                      }
                      </div>

                    ))
                  }
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
          {/* <Link to="/startup-form-informasi-nonfinansial"> */}
            <Button type="submit" form="startupForm">
              {this.state.isEdit ? "UBAH" : "SIMPAN"} & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default InfoFinansial;
