import React, { useState } from 'react';
import arrowback from '../../../images/arrowback.svg'
import logo from '../../../images/logo.svg'
import {Button, Fab} from '@material-ui/core'
import reset from '../../../images/invest/reset.svg'
import { Formik } from "formik";


const ResetPin = (close, openModalOtp)=> {
    return (
        <div className='pin_components'>
            <div className="bg">
                <div className="bg-round"></div>
            </div>
            <Fab className="back-button" onClick={close}>
                <img src={arrowback} alt="" />
            </Fab>
            <div className="logo-invest">
                <img src={logo} alt="logo" />
            </div>

            <div className="box_inp_pin">
                <img src={reset} alt="reset"/>
                <p className="title">Reset PIN</p>
                <p className="desc">Masukan No Telepon atau Email anda</p>
                    <Formik
                    initialValues={{
                        dataInput : ''
                    }}
                    onSubmit={(val)=>{
                        openModalOtp()
                    }}
                    >
                        {({values, handleChange, handleSubmit})=>(
                            <form className="wrapperform" onSubmit={handleSubmit}>
                                <input type="text" value={values.dataInput} onChange={handleChange('dataInput')} placeholder='No Telepon atau Email anda'/>
                                <Button disabled={values.dataInput.length < 5} type='submit' className='verif-button'>NEXT</Button>
                            </form>
                        )}
                    </Formik>
            </div>
        </div>
    );
}

export default ResetPin;