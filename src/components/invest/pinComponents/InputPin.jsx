import React from 'react';
import arrowback from '../../../images/arrowback.svg'
import logo from '../../../images/logo.svg'
import {Button, Fab} from '@material-ui/core'
import inputpin from '../../../images/invest/inputpin.svg'
import { Formik } from "formik";




const InputPin = (close, openResetModal) => {
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
            <Fab className="back-Button" style={backButton} onClick={close}>
                <img src={arrowback} alt="" />
            </Fab>
            <div className="logo-invest">
                <img src={logo} alt="logo" />
            </div>

            <div className="box_inp_pin">
                <img src={inputpin} alt="input"/>
                <p className="title">Masukan PIN anda</p>
                <p className="desc">Masukan kode 6 angka security pin akun anda</p>
                <Formik
                    initialValues={{
                        pin : ''
                    }}
                    onSubmit={(val)=>{
                        console.log(val)
                    }}
                    >
                        {({values, handleChange, handleSubmit})=>(
                            <form className="wrapperform" onSubmit={handleSubmit}>
                                <input type="password" value={values.pin} onChange={handleChange('pin')} placeholder='******' required/>
                                <Button disabled={values.pin.length < 6} type='submit' className='verif-Button' style={verifButton}>VERIFIKASI</Button>
                                <hr/>
                            </form>
                        )}
                </Formik>
                <p className="forget-pin">Lupa PIN? <span onClick={openResetModal}>Reset PIN</span></p>
            </div>

        </div>
    );
}

export default InputPin;