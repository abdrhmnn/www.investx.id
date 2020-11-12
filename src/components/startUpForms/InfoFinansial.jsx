import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "../shared/InputComponents";
import { Button } from "@material-ui/core";
import HeaderStartupForm from "./HeaderStartupForm";

class InfoFinansial extends Component {
    state = {};

    render() {
        const initialValueObj = {
            dummyText: "",
        };

        const schemaObj = Yup.object({
            dummyText: Yup.string().required(),
        });

        return (
            <div className="all-forms-style">
                <HeaderStartupForm activeStep={4}/>

                <div className="box-form-data">
                    <p className="title">Informasi Finansial</p>
                    <Formik
                        initialValues={initialValueObj}
                        validationSchema={schemaObj}
                        onSubmit={(val) => {
                            console.log(val);
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit} id="startupForm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Besar dana yang dibutuhkan *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Rata-rata omset per bulan tahun ini *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Rata-Rata laba per bulan tahun ini *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Rata-rata omset per bulan tahun sebelumnya *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Rata-rata laba per bulan tahun sebelumnya *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Total hutang bank / lembaga pembiayaan *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Nama bank / lembaga pembiayaan *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Total modal disetor *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Nilai per lembar saham *"
                                            type="text"
                                            name="dummyText"
                                            // placeholder='Tempat Lahir *'
                                            helperText={
                                                touched.dummyText &&
                                                errors.dummyText
                                            }
                                            error={
                                                touched.dummyText &&
                                                errors.dummyText
                                                    ? true
                                                    : false
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
                        *Saya menjamin bahwa informasi yang saya cantumkan
                        diatas adalah benar dan siap bertanggung jawab atas
                        segala konsekuensi yang terjadi di kemudian hari, serta
                        memiliki kemampuan analisis resiko terhadap saham
                        penerbit dan memenuhi kriteria pemodal sesuai peraturan
                        yang berlaku.
                    </p>
                    <Link to="/startup-form-informasi-nonfinansial">
                        <Button type="submit" form="startupForm">
                            SIMPAN & LANJUTKAN
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default InfoFinansial;
