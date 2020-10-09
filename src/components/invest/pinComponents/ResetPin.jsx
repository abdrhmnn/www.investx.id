import React, { useState } from 'react';
import arrowback from '../../../images/arrowback.svg'
import logo from '../../../images/logo.svg'
import {Button, Fab} from '@material-ui/core'
import reset from '../../../images/invest/reset.svg'
import { Formik } from "formik";


const ResetPin = (close, openModalOtp) => {
    const backButton = {
        width: '52px',
  height: '52px',
  borderRadius: '50%',
  backgroundColor: '#dedede',
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '80px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
    const verifButton = {
         width: '100%',
  height: '48px',
  backgroundColor: '#01579B',
  border: '1px solid #01579B',
  boxSizing: 'border-box',
  boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.25)',
  borderRadius: '9px',
  fontSize: '18px',
  lineHeight: '25px',
  color: '#FFFFFF',
  marginBottom: '20px'
    }
    return (
        <div className='pin_components'>
            <div className="bg">
                <div className="bg-round"></div>
            </div>
            <Fab className="back-button" style={backButton} onClick={close}>
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
                                <Button disabled={values.dataInput.length < 5} type='submit' style={verifButton} className='verif-button'>NEXT</Button>
                            </form>
                        )}
                    </Formik>
            </div>
        </div>
    );
}

export default ResetPin;