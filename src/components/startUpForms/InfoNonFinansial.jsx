import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import { InputSelect } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

class InfoNonFinansial extends Component {
  state = {};

  render() {
    const top100Films = [
      { label: "The Shawshank Redemption", year: 1994, value: "lala" },
      { label: "The Godfather", year: 1972 },
      { label: "The Godfather: Part II", year: 1974 },
      { label: "The Dark Knight", year: 2008 },
    ];

    const initialValueObj = {
      dummy: null,
    };

    const schemaObj = Yup.object({
      dummy: Yup.object().nullable().required(),
    });

    return (
      <div className="all-forms-style">
        <HeaderStartupForm activeStep={5} />
        <div className="box-form-data">
          <p className="title">Informasi Non Finansial</p>
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
              <form onSubmit={handleSubmit} id="startupForm">
                <div className="row">
                  <div className="col-md-12 ">
                    <InputSelect
                      label="Sistem Pencatatan Keuangan *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Reputasi Pinjaman Bank/Lainya *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Posisi Pasar atas Produk / Jasa *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Strategi Kedepan *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Status Lokasi / Kantor / Tempat Usaha *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Tingkat Persaingan *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Kemampuan Manajerial *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
                    />
                  </div>

                  <div className="col-md-12 ">
                    <InputSelect
                      label="Kemampuan Teknis *"
                      name="dummy"
                      getOptionLabel={(val) => val.label}
                      options={top100Films}
                      helperText={touched.dummy && errors.dummy}
                      error={touched.dummy && errors.dummy ? true : false}
                      value={values.dummy}
                      onBlur={handleBlur}
                      onChange={(e, val) => setFieldValue("dummy", val)}
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
          <Link to="/startup-form-media">
            <Button type="submit" form="startupForm">
              SIMPAN & LANJUTKAN
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default InfoNonFinansial;
