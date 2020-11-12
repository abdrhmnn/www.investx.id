import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import InputFiles from 'react-input-files';

import { Formik , Field} from "formik";
import * as Yup from 'yup'
import {InputText} from '../shared/InputComponents'
import {Button} from '@material-ui/core'
import HeaderStartupForm from './HeaderStartupForm';



class Media extends Component {
    state={
    }

    handleFileUpload = (file, name)=>{
        console.log('====================================');
        console.log(file[0]);
        console.log(name);
        console.log('====================================');
        this.setState({modalFile : {}})
    } 

    render() {

        const initialValueObj = {
            dummyText : '',
        }

        const schemaObj = Yup.object({
            dummyText : Yup.string().required(),
        })

        return (
           <div className="all-forms-style" >
                <HeaderStartupForm activeStep={6}/>


                
               <div className="box-form-data">
                    <p className="title">Media</p>
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

                                        <div className="col-md-12 startup-company-logo">
                                            <div className="label-cus">Media *</div>
                                            <div className="file-frame">
                                                <span>Select File...</span>
                                                <InputFiles onChange={files => this.handleFileUpload(files,'media')}>
                                                    <Button type='button'>Browse</Button>
                                                </InputFiles>
                                            </div>
                                            <div className="error-input p-0">
                                                {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                                            </div>
                                            <p className="info-file mb-4">*File data <span>Pdf / Jpeg / PNG</span>  dan tidak lebih dari <span>5MB</span> </p>
                                        </div>

                                        <div className="col-md-12">
                                            <Field 
                                                as={InputText}
                                                label='Video tentang usaha anda'
                                                type='text'
                                                name='dummyText'
                                                placeholder='link Video ( Optional )'
                                                helperText={touched.dummyText && errors.dummyText}
                                                error ={touched.dummyText && errors.dummyText? true : false}
                                            />
                                            <p className="info-file">*Masukan Link Video tentang usaha anda yang di unggah di Youtube </p>
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
                   <Link to="startup-form-syarat">
                        <Button type='submit' form='startupForm'>SIMPAN & LANJUTKAN</Button>
                   </Link>
               </div>
           </div>
        );
    }
}

export default Media;