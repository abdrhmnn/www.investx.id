import React, { Component } from "react";

// import { Link } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import { InputTextCurrency } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

class InfoFinansial extends Component {
  state = {};

  render() {
    const initialValueObj = {
      // "nonce": "",
      "investment_needed": '',
      "average_monthly_turnover": '',
      "average_monthly_profit": '',
      "average_monthly_turnover_last_year": '',
      "average_monthly_profit_last_year": '',
      "total_debt": '',
      "paid_up_capital": '',
      "book_value_per_share": ''
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
    });

    const formInputFinansial = [
      { label : 'Besar dana yang dibutuhkan', key : 'investment_needed', placeholder : 'Contoh : 100.000.000'},
      { label : 'Rata-rata omset per bulan tahun ini', key : 'average_monthly_turnover', placeholder : 'Contoh : 500.000.000'},
      { label : 'Rata-Rata laba per bulan tahun ini', key : 'average_monthly_profit', placeholder : 'Contoh : 200.000.000'},
      { label : 'Rata-rata omset per bulan tahun sebelumnya', key : 'average_monthly_turnover_last_year', placeholder : 'Contoh : 5.000.000.000'},
      { label : 'Rata-rata laba per bulan tahun sebelumnya', key : 'average_monthly_profit_last_year', placeholder : 'Contoh : 2.000.000.000'},
      { label : 'Total hutang bank/ lembaga pembiayaan', key : 'total_debt', placeholder : 'Contoh : 800.000.000'},

      // { label : 'Nama bank / lembaga pembiayaan', key : 0, placeholder : 'gkjgkj'}, /// nothing on payload

      { label : 'Total modal disetor*', key : 'paid_up_capital', placeholder : 'Contoh : 20.000.000'},
      { label : 'Nilai per lembar saham', key : 'book_value_per_share', placeholder : 'Contoh : 200.000'},
    ]

    return (
      <div className="all-forms-style">
        <HeaderStartupForm activeStep={4} />

        <div className="box-form-data">
          <p className="title">Informasi Finansial</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
            }}
          >
            {({ 
              handleSubmit, 
              errors, 
              touched,
              setFieldValue,
              // values 
            }) => (
              <form onSubmit={handleSubmit} id="startupForm">
                <div className="row">
                  {
                    formInputFinansial.map((res,i)=>(
                      <div className="col-md-12" key={i}>
                        <InputTextCurrency
                          // as={InputTextCurrency}
                          label={res.label}
                          required
                          type="text"
                          name={res.key}
                          currencySymbol={"Rp"}
                          decimalPlaces={0}
                          textAlign='left'
                          decimalCharacter=","
                          digitGroupSeparator="."
                          minimumValue='1'
                          placeholder={res.placeholder}
                          helperText={touched[`${res.key}`] && errors[`${res.key}`]}
                          error={
                            touched[`${res.key}`] && errors[`${res.key}`] ? true : false
                          }
                          onChange = {(e, val)=>setFieldValue( res.key , val )}
                        />
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
              SIMPAN & LANJUTKAN
            </Button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default InfoFinansial;
