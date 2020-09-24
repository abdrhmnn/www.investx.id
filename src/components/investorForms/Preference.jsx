import React, { Component } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'

import { Link } from 'react-router-dom';
import PopSuccessForm from '../shared/PopSuccessForm';
import { Formik } from "formik";
import * as Yup from 'yup'
import { InputSelect } from '../shared/InputComponents'
import StepsInvestor from './StepsInvestor';
import { Button, Fab } from '@material-ui/core';


class Preference extends Component {
    state = {
        borderActive: '',
        gender: '',
        tanggalLahir: null,
        successSubmit: false
    }

    borderBlue = (e) => {
        if (e.target.id.length !== 0) {
            console.log(e.target.id);
            this.setState({ borderActive: e.target.id })
            console.log();
        } else {
            console.log(e.target.id);
            console.log('kosong');
        }
    }

    onSubmit = ({ fields, errors, isValid }) => {
        if (isValid) {

        } else {
            // `errors` is also an object!
            console.log('Something is wrong:', errors);
        }
    }

    offModal = () => this.setState({ successSubmit: false }, () => window.location.href = '/')

    render() {
        const top100Films = [
            { label: 'The Shawshank Redemption', year: 1994, value: 'lala' },
            { label: 'The Godfather', year: 1972 },
            { label: 'The Godfather: Part II', year: 1974 },
            { label: 'The Dark Knight', year: 2008 },
        ]

        const initialValueObj = {
            pendidikan: null,
            pekerjaan: null,
            industri: null,
            pendapatan: null,
            sumberpendapatan: null,
        }

        const schemaObj = Yup.object({
            pendidikan: Yup.object().nullable().required(),
            pekerjaan: Yup.object().nullable().required(),
            industri: Yup.object().nullable().required(),
            pendapatan: Yup.object().nullable().required(),
            sumberpendapatan: Yup.object().nullable().required(),
        })

        return (
            <div className="all-forms-style">
                {this.state.successSubmit ? <PopSuccessForm offModal={this.offModal} /> : null}
                <div className="bg">
                    <div className="bg-round"></div>
                </div>
                <Link to='/investor-form-bank'>
                    <Fab className="back-button"><img src={arrowback} alt="" /></Fab>
                </Link>

                <div className="logo-invest">
                    <img src={logo} alt="" />
                </div>
                <p className="title">Selamat datang Cecillia</p>
                <p className="desc"> Terima kasih telah mendaftar di InvestX. <br /> Silahkan lengkapi daftar diri anda untuk mulai berinvestasi</p>

                <StepsInvestor active={5} />

                <div className="box-form-data">
                    {/* ///////////////////FORMS//////////////////// */}
                    <p className="title">Preference</p>
                    <Formik
                        initialValues={initialValueObj}
                        validationSchema={schemaObj}
                        onSubmit={(val) => {
                            console.log(val);
                        }}>
                        {
                            ({ handleChange, handleBlur, handleSubmit, errors, values, touched, setFieldValue }) => (
                                <form onSubmit={handleSubmit} id='investorForm'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <InputSelect
                                                label='Budget Investasi *'
                                                name='pendidikan'
                                                getOptionLabel={(val) => val.label}
                                                options={top100Films}
                                                helperText={touched.pendidikan && errors.pendidikan}
                                                error={touched.pendidikan && errors.pendidikan ? true : false}
                                                value={values.pendidikan}
                                                onBlur={handleBlur}
                                                onChange={(e, val) => setFieldValue('pendidikan', val)}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <InputSelect
                                                label='Preferensi Resiko Investasi *'
                                                name='pekerjaan'
                                                getOptionLabel={(val) => val.label}
                                                options={top100Films}
                                                helperText={touched.pekerjaan && errors.pekerjaan}
                                                error={touched.pekerjaan && errors.pekerjaan ? true : false}
                                                value={values.pekerjaan}
                                                onBlur={handleBlur}
                                                onChange={(e, val) => setFieldValue('pekerjaan', val)}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <InputSelect
                                                label='Preferensi Investasi *'
                                                name='industri'
                                                getOptionLabel={(val) => val.label}
                                                options={top100Films}
                                                helperText={touched.industri && errors.industri}
                                                error={touched.industri && errors.industri ? true : false}
                                                value={values.industri}
                                                onBlur={handleBlur}
                                                onChange={(e, val) => setFieldValue('industri', val)}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <InputSelect
                                                label='Darimana anda mengetahui tentang Invest X ? *'
                                                name='sumberpendapatan'
                                                getOptionLabel={(val) => val.label}
                                                options={top100Films}
                                                helperText={touched.sumberpendapatan && errors.sumberpendapatan}
                                                error={touched.sumberpendapatan && errors.sumberpendapatan ? true : false}
                                                value={values.sumberpendapatan}
                                                onBlur={handleBlur}
                                                onChange={(e, val) => setFieldValue('sumberpendapatan', val)}
                                            />
                                        </div>


                                    </div>
                                </form>
                            )}
                    </Formik>

                    {/* ///////////////////FORMS END//////////////////// */}

                </div>

                <div className="foot-data-diri">
                    <p className="agreement">*Saya menjamin bahwa informasi yang saya cantumkan diatas adalah benar dan siap bertanggung jawab atas segala konsekuensi yang terjadi di kemudian hari, serta memiliki kemampuan analisis resiko terhadap saham penerbit dan memenuhi kriteria pemodal sesuai peraturan yang berlaku.</p>

                    <Button
                        type='submit'
                        form='investorForm'
                        onClick={() => this.setState({ successSubmit: true })}
                    >
                        SIMPAN & LANJUTKAN
                    </Button>
                </div>
            </div>
        );
    }
}

export default Preference;