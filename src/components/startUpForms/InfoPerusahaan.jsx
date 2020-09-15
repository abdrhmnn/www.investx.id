import React, { Component, Fragment } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'

import { Link } from 'react-router-dom';
import InputFiles from 'react-input-files';

import { Formik , Field} from "formik";
import * as Yup from 'yup'
import {InputText, InputSelect, InputTextArea} from '../shared/InputComponents'
import {Checkbox, ButtonGroup, Button, FormHelperText, Fab} from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import StepsStartUp from './StepsStartUp';


import Select from 'react-dropdown-select';
import { FormValidation } from "calidation";


class InfoPerusahaan extends Component {
    state={
        // borderActive : '',
    }

    // borderBlue = (e)=>{
    //     if (e.target.id.length !== 0) {
    //         console.log(e.target.id);
    //         this.setState({borderActive : e.target.id})
    //         console.log();
    //     }else{
    //         console.log(e.target.id);
    //         console.log('kosong');
    //     }
    // }

    handleFileUpload = (file, name)=>{
        console.log('====================================');
        console.log(file[0]);
        console.log(name);
        console.log('====================================');
        this.setState({modalFile : {}})
    } 

    // onSubmit = ({ fields, errors, isValid }) => {
    //     if (isValid) {
         
    //     } else {
    //       // `errors` is also an object!
    //       console.log('Something is wrong:', errors);
    //     }
    // }

    render() {
        const top100Films = [
            { label: 'The Shawshank Redemption', year: 1994, value: 'lala'},
            { label: 'The Godfather', year: 1972 },
            { label: 'The Godfather: Part II', year: 1974 },
            { label: 'The Dark Knight', year: 2008 },
        ]

        const initialValueObj = {
            dummyText : '',
            address: '',
            dummy : null,
        }

        const schemaObj = Yup.object({
            dummyText : Yup.string().required(),
            address : Yup.string().required(),
            dummy : Yup.object().nullable().required(),
        })

        return (
           <div className="all-forms-style" >
                <div className="bg">
                        <div className="bg-round"></div> 
                </div>
                <Link to='/startup-form-dokumen'>
                        <Fab className="back-button">
                            <img src={arrowback} alt="arrback"/>
                        </Fab>
                </Link>
                <div className="logo-invest">
                    <img src={logo} alt=""/>
                </div>
                <p className="title">Selamat datang Cecillia</p>
                <p className="desc"> Terima kasih telah mendaftar di InvestX. <br/> Silahkan lengkapi daftar diri anda untuk untuk mengajukan funding</p>
                
                <StepsStartUp active={3} />

                
               <div className="box-form-data">
                    <p className="title">Informasi Perusahaan</p>
                    <Formik
                    initialValues={initialValueObj}
                    validationSchema={schemaObj}
                    onSubmit={(val)=>{
                        console.log(val);
                    }}>
                        {
                            ({handleChange, handleBlur, handleSubmit, errors, values, touched, setFieldValue})=>(
                                <form onSubmit={handleSubmit} id='startupForm'>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <Field 
                                                as={InputText}
                                                label='Nama Perusahaan *'
                                                type='text'
                                                name='dummyText'
                                                // placeholder='Tempat Lahir *'
                                                helperText={touched.dummyText && errors.dummyText}
                                                error ={touched.dummyText && errors.dummyText? true : false}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                             <Field 
                                                as={InputText}
                                                label='Merk Dagang *'
                                                type='text'
                                                name='dummyText'
                                                // placeholder='Tempat Lahir *'
                                                helperText={touched.dummyText && errors.dummyText}
                                                error ={touched.dummyText && errors.dummyText? true : false}
                                            />
                                        </div>

                                        <div className="col-md-12 ">
                                            <InputSelect 
                                                label='Jenis Usaha *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                error ={touched.dummy && errors.dummy? true : false}
                                                value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div>

                                        <div className="col-md-12 ">
                                            <InputSelect 
                                                label='Sub Jenis Usaha *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                error ={touched.dummy && errors.dummy? true : false}
                                                value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div>

                                        <div className="col-md-12 ">
                                            <InputSelect 
                                                label='Kota Lokasi Usaha *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                error ={touched.dummy && errors.dummy? true : false}
                                                value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div>

                                        <div className="col-md-12 ">
                                            <Field 
                                                as={InputTextArea}
                                                label='Alamat Lengkap Perusahaan *'
                                                type='text'
                                                name='address'
                                                rows={5}
                                                // placeholder=''
                                                helperText={touched.address && errors.address}
                                                error ={touched.address && errors.address? true : false}
                                            />
                                        </div>

                                        <div className="col-md-12 ">
                                            <InputSelect 
                                                label='Bentuk Badan Usaha *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                error ={touched.dummy && errors.dummy? true : false}
                                                value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <Field 
                                                as={InputText}
                                                label='Lama Usaha ( Bulan ) *'
                                                type='text'
                                                name='dummyText'
                                                // placeholder='Tempat Lahir *'
                                                helperText={touched.dummyText && errors.dummyText}
                                                error ={touched.dummyText && errors.dummyText? true : false}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <Field 
                                                as={InputText}
                                                label='Jumlah Cabang *'
                                                type='text'
                                                name='dummyText'
                                                // placeholder='Tempat Lahir *'
                                                helperText={touched.dummyText && errors.dummyText}
                                                error ={touched.dummyText && errors.dummyText? true : false}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <Field 
                                                as={InputText}
                                                label='Jumlah Karyawan *'
                                                type='text'
                                                name='dummyText'
                                                // placeholder='Tempat Lahir *'
                                                helperText={touched.dummyText && errors.dummyText}
                                                error ={touched.dummyText && errors.dummyText? true : false}
                                            />
                                        </div>

                                        <div className="col-md-12 ">
                                            <Field 
                                                as={InputTextArea}
                                                label='Deskripsi Singkat Perusahaan ( Maksimal 500 karakter ) *'
                                                type='text'
                                                name='address'
                                                rows={5}
                                                // placeholder=''
                                                helperText={touched.address && errors.address}
                                                error ={touched.address && errors.address? true : false}
                                            />
                                        </div>

                                        <div className="col-md-12 startup-company-logo">
                                            <div className="label-cus">Logo perusahaan *</div>
                                            <div className="file-frame">
                                                <span>Select File...</span>
                                                <InputFiles onChange={files => this.handleFileUpload(files,'logo-perusanaan')}>
                                                    <Button type='button'>Browse</Button>
                                                </InputFiles>
                                            </div>
                                            <div className="error-input p-0">
                                                {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                                            </div>
                                            <p className="info-file">*File data <span>Pdf / Jpeg / PNG</span>  dan tidak lebih dari <span>5MB</span> </p>
                                        </div>

                                    </div>
                                </form>
                            )
                        }
                    </Formik>

                   {/* ///////////////////FORMS END//////////////////// */}

               </div>

               <div className="foot-data-diri">
                   <p className="agreement">*Saya menjamin bahwa informasi yang saya cantumkan diatas adalah benar dan siap bertanggung jawab atas segala konsekuensi yang terjadi di kemudian hari, serta memiliki kemampuan analisis resiko terhadap saham penerbit dan memenuhi kriteria pemodal sesuai peraturan yang berlaku.</p>
                    <Button type='submit' form='startupForm'>SIMPAN & LANJUTKAN</Button>
               </div>
           </div>
        );
    }
}

export default InfoPerusahaan;