import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { InputSelect } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderInvestForm from "./HeaderInvestForm";

class Pendidikan extends Component {
  state = {
    borderActive: "",
    gender: "",
    tanggalLahir: null,
  };

  borderBlue = (e) => {
    if (e.target.id.length !== 0) {
      console.log(e.target.id);
      this.setState({ borderActive: e.target.id });
      console.log();
    } else {
      console.log(e.target.id);
      console.log("kosong");
    }
  };

  onSubmit = ({ errors, isValid }) => {
    if (isValid) {
    } else {
      // `errors` is also an object!
      console.log("Something is wrong:", errors);

      // for (const property in errors) {
      //     console.log(`${property}: ${errors[property]}`);
      //     if (errors[property] !== null) {
      //         this[property].focus()
      //         break
      //     }
      // }
    }
  };

  render() {
    const top100Films = [
      { label: "The Shawshank Redemption", year: 1994, value: "lala" },
      { label: "The Godfather", year: 1972 },
      { label: "The Godfather: Part II", year: 1974 },
      { label: "The Dark Knight", year: 2008 },
    ];

    const initialValueObj = {
      budget: null,
      preferensiresiko: null,
      preferensi: null,
      darimana: null,
    };

    const schemaObj = Yup.object({
      budget: Yup.object().nullable().required(),
      preferensiresiko: Yup.object().nullable().required(),
      preferensi: Yup.object().nullable().required(),
      darimana: Yup.object().nullable().required(),
    });

    return (
      <div className="all-forms-style">
        <HeaderInvestForm activeStep={2} />
        <div className="box-form-data">
          {/* ///////////////////FORMS//////////////////// */}
          <p className="title">Pendidikan dan Pekerjaan</p>
          <Formik
            initialValues={initialValueObj}
            validationSchema={schemaObj}
            onSubmit={(val) => {
              console.log(val);
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
                      label="Pendikan Terakhir"
                      name="budget"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.budget && errors.budget}
                      error={touched.budget && errors.budget ? true : false}
                      value={values.budget}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("budget", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Pekerjaan Saat Ini"
                      name="preferensiresiko"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={
                        touched.preferensiresiko && errors.preferensiresiko
                      }
                      error={
                        touched.preferensiresiko && errors.preferensiresiko
                          ? true
                          : false
                      }
                      value={values.preferensiresiko}
                      onBlur={handleBlur}
                      onChange={(e, val) =>
                        setFieldValue("preferensiresiko", val)
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Industri Pekerjaan"
                      name="preferensi"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.preferensi && errors.preferensi}
                      error={
                        touched.preferensi && errors.preferensi ? true : false
                      }
                      value={values.preferensi}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("preferensi", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Pendapatan Perbulan"
                      name="darimana"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.darimana && errors.darimana}
                      error={touched.darimana && errors.darimana ? true : false}
                      value={values.darimana}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("darimana", val)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputSelect
                      label="Sumber Pendapatan"
                      name="darimana"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.darimana && errors.darimana}
                      error={touched.darimana && errors.darimana ? true : false}
                      value={values.darimana}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("darimana", val)}
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
          <Link to="/investor-form-dokumen">
            <Button type="submit" form="investorForm">
              SIMPAN & LANJUTKAN
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Pendidikan;
