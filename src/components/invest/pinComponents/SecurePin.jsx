import React, { useState } from 'react';
import arrowback from '../../../images/arrowback.svg'
import logo from '../../../images/logo.svg'
import {Button, Fab} from '@material-ui/core'
import reset from '../../../images/invest/reset.svg'
import { Formik } from "formik";
import successimg from '../../../images/invest/successimg.svg'
import Swal from 'sweetalert2'




const SecurePin = (close,)=> {
    return (
        <div className='pin_components'>
            <div className="bg">
                <div className="bg-round"></div>
            </div>
            <Fab className="back-button" onClick={close}>
                <img src={arrowback} alt=" back" />
            </Fab>
            <div className="logo-invest">
                <img src={logo} alt="logo" />
            </div>

            <div className="box_inp_pin">
                <img src={reset} alt="reset"/>
                <p className="title">Buat Security PIN</p>
                <p className="desc">Masukan kode 6 angka sebagai security PIN akun anda</p>
                    <Formik
                    initialValues={{
                        newPin : '',
                        re_newPin : ''
                    }}
                    onSubmit={(val)=>{
                        // Swal.fire(
                        //     'Good job!',
                        //     'You clicked the button!',
                        //     'success'
                        //   )
                        Swal.fire({
                            title: 'Selamat!',
                            text: 'PIN Anda Berhasil dibuat',
                            imageUrl: successimg,
                            imageWidth: 400,
                            imageHeight: 180,
                            imageAlt: 'Custom image',
                            showConfirmButton: false,
                            timer: 1500,
                            onClose: () => {
                               window.location.href= '/'
                            }
                        })
                        console.log(val)
                    }}
                    >
                        {({values, handleChange, handleSubmit})=>(
                            <form className="wrapperform" onSubmit={handleSubmit}>
                                <input type="password" value={values.dataInput} onChange={handleChange('newPin')} placeholder='Security Pin' required/>
                                <input type="password" value={values.dataInput} onChange={handleChange('re_newPin')} placeholder='Konfirmasi Security Pin' required/>
                                <Button type='submit' className='verif-button'>BUAT PIN</Button>
                            </form>
                        )}
                    </Formik>
            </div>
        </div>
    );
}

export default SecurePin;