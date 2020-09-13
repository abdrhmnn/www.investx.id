import React, { Component } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import { Link } from 'react-router-dom';
import { Formik , Field} from "formik";
import * as Yup from 'yup'
import {InputText, InputSelect, InputTextArea} from '../shared/InputComponents'
import {Checkbox, ButtonGroup, Button, FormHelperText} from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import StepsInvestor from './StepsInvestor';


class DataDiri extends Component {
    state={
        tanggalLahir : null
    }

    render() {
        const top100Films = [
            { label: 'The Shawshank Redemption', year: 1994, value: 'lala'},
            { label: 'The Godfather', year: 1972 },
            { label: 'The Godfather: Part II', year: 1974 },
            { label: 'The Dark Knight', year: 2008 },
        ]

        const initialValueObj = {
            name : 'Sagara Finn',
            born : '',
            tanggalLahir : '2017-05-24',
            dummy : null,
            phone : '0812345678',
            address: '',
            isSameAdd : false,
            gender : '',
        }

        const schemaObj = Yup.object({
            name : Yup.string().required(),
            born : Yup.string().required(),
            tanggalLahir : Yup.string().required(),
            address : Yup.string().required(),
            dummy : Yup.object().nullable().required(),
            gender : Yup.string().required(),
        })


        return (
           <div className="all-forms-style">
               <div className="bg">
                    <div className="bg-round"></div> 
               </div>
                <Link to='/select-form/'>
                    <div className="back-button">
                        <img src={arrowback} alt=""/>
                    </div>
                </Link>
               <div className="logo-invest">
                   <img src={logo} alt=""/>
               </div>
                <p className="title">Selamat datang Cecillia</p>
                <p className="desc"> Terima kasih telah mendaftar di InvestX. <br/> Silahkan lengkapi daftar diri anda untuk mulai berinvestasi</p>

               <StepsInvestor active={1} />

               <div className="box-form-data">
                    <p className="title">Data Diri</p>
                    <Formik
                    initialValues={initialValueObj}
                    validationSchema={schemaObj}
                    onSubmit={(val)=>{
                        console.log('====================================');
                        console.log(val);
                        console.log('====================================');
                    }}>
                    {
                        ({handleChange, handleBlur, handleSubmit, errors, values, touched, setFieldValue})=>(
                        <form onSubmit={handleSubmit} id='investorForm'> 
                            <div className="row">
                                <div className="col-md-12">
                                    <Field 
                                        as={InputText}
                                        label='Name'
                                        type='text'
                                        name='name'
                                        placeholder='Nama Lengkap'
                                        disabled={true}
                                        // errorsMessage={touched.name && errors.name}
                                        // error ={touched.name && errors.name}
                                    />
                                </div>
                                <div className="col-md-12 ">
                                    <ButtonGroup className={errors.gender?'button-gender line-error':'button-gender'}>
                                        <Button className={values.gender === 'pria'? 'act-gen' : null} onClick={()=> setFieldValue('gender', 'pria')} >Pria</Button>
                                        <Button className={values.gender === 'wanita'? 'act-gen' : null} onClick={()=> setFieldValue('gender', 'wanita')} >Wanita</Button>
                                    </ButtonGroup>
                                    <FormHelperText className='help-gender' error={touched.gender && errors.gender? true : false} id="my-helper-text">{errors.gender}</FormHelperText>
                                </div>
                                <div className="col-md-6">
                                    <Field 
                                        as={InputText}
                                        label='Tempat Lahir'
                                        type='text'
                                        name='born'
                                        placeholder='Tempat Lahir *'
                                        helperText={touched.born && errors.born}
                                        error ={touched.born && errors.born? true : false}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Field 
                                        name='tanggalLahir'
                                        type='date'
                                        // defaultValue="2017-05-24"
                                        label='Tanggal Lahir *' 
                                        helperText={touched.tanggalLahir && errors.tanggalLahir}
                                        error ={touched.tanggalLahir && errors.tanggalLahir? true : false}
                                        as={InputText}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <InputSelect 
                                        label='Status Pernikahan *'
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
                                    <InputSelect 
                                        label='Status Kewarganegaraan *'
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

                                <div className="col-md-6">
                                    <Field 
                                        as={InputText}
                                        label='Phone'
                                        type='text'
                                        name='phone'
                                        // placeholder='Nama Lengkap'
                                        disabled={true}
                                        // errorsMessage={touched.name && errors.name}
                                        // error ={touched.name && errors.name}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <Field 
                                        as={InputText}
                                        label='No Telepon Rumah'
                                        type='text'
                                        name='phone'
                                        // placeholder=''
                                        helperText={touched.dummy && errors.dummy}
                                        error ={touched.dummy && errors.dummy? true : false}
                                    />
                                </div>

                                <div className="col-md-12">
                                     <Field 
                                        as={InputTextArea}
                                        label='Alamat Sesuai KTP *'
                                        type='text'
                                        name='address'
                                        rows={5}
                                        // placeholder=''
                                        helperText={touched.address && errors.address}
                                        error ={touched.address && errors.address? true : false}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <InputSelect 
                                        label='Provinsi *'
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
                                <div className="col-md-6">
                                    <InputSelect 
                                        label='Kota/ Kabupaten *'
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
                                <div className="col-md-6">
                                    <InputSelect 
                                        label='Kecamatan *'
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
                                <div className="col-md-6">
                                    <InputSelect 
                                        label='Kode Pos *'
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
                                        as={InputTextArea}
                                        label='Alamat Tinggal Sekarang'
                                        type='text'
                                        name='address'
                                        rows={5}
                                        // placeholder=''
                                        helperText={touched.address && errors.address}
                                        error ={touched.address && errors.address? true : false}
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="d-inline mb-4" style={{fontSize : 14, cursor: 'pointer'}}>
                                        <Checkbox
                                            id='same'
                                            style={{color : '#01579B', marginBottom : 3}}
                                            name='isSameAdd'
                                            onChange={handleChange}
                                        />
                                            Sama Seperti KTP
                                    </label>
                                </div>
                                <Fade cascade  duration={500}  when={!values.isSameAdd}>
                                    <div className="col-md-6" style={values.isSameAdd? {display : 'none'} : null}>
                                        <InputSelect 
                                            label='Provinsi *'
                                            name='dummy'
                                            getOptionLabel={(val)=>val.label}
                                            options={top100Films}
                                            helperText={touched.dummy && errors.dummy}
                                            // error ={touched.dummy && errors.dummy? true : false}
                                            // value={values.dummy}
                                            onBlur={handleBlur}  
                                            onChange={(e,val)=> setFieldValue('dummy', val)}
                                        />
                                    </div>
                                    <div className="col-md-6" style={values.isSameAdd? {display : 'none'} : null}>
                                        <InputSelect 
                                            label='Kota/ Kabupaten *'
                                            name='dummy'
                                            getOptionLabel={(val)=>val.label}
                                            options={top100Films}
                                            helperText={touched.dummy && errors.dummy}
                                            // error ={touched.dummy && errors.dummy? true : false}
                                            // value={values.dummy}
                                            onBlur={handleBlur}  
                                            onChange={(e,val)=> setFieldValue('dummy', val)}
                                        />
                                    </div>
                                    <div className="col-md-6" style={values.isSameAdd? {display : 'none'} : null}>
                                        <InputSelect 
                                            label='Kecamatan *'
                                            name='dummy'
                                            getOptionLabel={(val)=>val.label}
                                            options={top100Films}
                                            helperText={touched.dummy && errors.dummy}
                                            // error ={touched.dummy && errors.dummy? true : false}
                                            // value={values.dummy}
                                            onBlur={handleBlur}  
                                            onChange={(e,val)=> setFieldValue('dummy', val)}
                                        />
                                    </div>
                                    <div className="col-md-6" style={values.isSameAdd? {display : 'none'} : null}>
                                        <InputSelect 
                                            label='Kode Pos *'
                                            name='dummy'
                                            getOptionLabel={(val)=>val.label}
                                            options={top100Films}
                                            helperText={touched.dummy && errors.dummy}
                                            // error ={touched.dummy && errors.dummy? true : false}
                                            // value={values.dummy}
                                            onBlur={handleBlur}  
                                            onChange={(e,val)=> setFieldValue('dummy', val)}
                                        />
                                    </div>
                                </Fade>


                            </div>
                        </form>
                        )
                    }

                    </Formik>
               </div>

               <div className="foot-data-diri">
                   <p className="agreement">*Saya menjamin bahwa informasi yang saya cantumkan diatas adalah benar dan siap bertanggung jawab atas segala konsekuensi yang terjadi di kemudian hari, serta memiliki kemampuan analisis resiko terhadap saham penerbit dan memenuhi kriteria pemodal sesuai peraturan yang berlaku.</p>
                    <button type='submit' form='investorForm'>SIMPAN & LANJUTKAN</button>
               </div>
           </div>
        );
    }
}

export default DataDiri;