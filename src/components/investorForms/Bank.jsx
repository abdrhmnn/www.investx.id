import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { InputText, InputSelect } from "../shared/InputComponents";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";

import StepsInvestor from "./StepsInvestor";
import { Button, Fab } from "@material-ui/core";

class Bank extends Component {
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

    onSubmit = ({ fields, errors, isValid }) => {
        if (isValid) {
        } else {
            // `errors` is also an object!
            console.log("Something is wrong:", errors);
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
            namabank: null,
            kantorcabang: "",
            namapemilikrekening: "",
            norekening: "",
        };

        const schemaObj = Yup.object({
            namabank: Yup.object().nullable().required(),
            kantorcabang: Yup.string().required(),
            namapemilikrekening: Yup.string().required(),
            norekening: Yup.string().required(),
        });

        return (
            <div className="all-forms-style">
                <div className="bg">
                    <div className="bg-round"></div>
                </div>
                <Link to="/investor-form-dokumen">
                    <Fab className="back-button">
                        <img src={arrowback} alt="" />
                    </Fab>
                </Link>

                <div className="logo-invest">
                    <img src={logo} alt="" />
                </div>
                <p className="title">Selamat datang Cecillia</p>
                <p className="desc">
                    {" "}
                    Terima kasih telah mendaftar di InvestX. <br /> Silahkan
                    lengkapi daftar diri anda untuk mulai berinvestasi
                </p>

                <StepsInvestor active={4} />

                <div className="box-form-data">
                    {/* ///////////////////FORMS//////////////////// */}
                    <p className="title">BANK</p>
                    <Formik
                        initialValues={initialValueObj}
                        validationSchema={schemaObj}
                        onSubmit={(val) => {
                            console.log(val);
                        }}
                    >
                        {({
                            handleChange,
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
                                            label="Nama Bank *"
                                            name="namabank"
                                            getOptionLabel={(val) => val.label}
                                            options={top100Films}
                                            helperText={
                                                touched.namabank &&
                                                errors.namabank
                                            }
                                            error={
                                                touched.namabank &&
                                                errors.namabank
                                                    ? true
                                                    : false
                                            }
                                            value={values.namabank}
                                            onBlur={handleBlur}
                                            onChange={(e, val) =>
                                                setFieldValue("namabank", val)
                                            }
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Kantor Cabang *"
                                            type="text"
                                            name="kantorcabang"
                                            errorsMessage={
                                                touched.kantorcabang &&
                                                errors.kantorcabang
                                            }
                                            error={
                                                touched.kantorcabang &&
                                                errors.kantorcabang
                                            }
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="Nama Pemilik Rekening *"
                                            type="text"
                                            name="namapemilikrekening"
                                            errorsMessage={
                                                touched.namapemilikrekening &&
                                                errors.namapemilikrekening
                                            }
                                            error={
                                                touched.namapemilikrekening &&
                                                errors.namapemilikrekening
                                            }
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <Field
                                            as={InputText}
                                            label="No Rekening"
                                            type="text"
                                            name="norekening"
                                            errorsMessage={
                                                touched.norekening &&
                                                errors.norekening
                                            }
                                            error={
                                                touched.norekening &&
                                                errors.norekening
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
                    <Link to="/investor-form- preference">
                        <Button type="submit" form="investorForm">
                            SIMPAN & LANJUTKAN
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Bank;
