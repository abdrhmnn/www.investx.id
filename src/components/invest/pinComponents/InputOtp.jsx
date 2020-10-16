import React from 'react';
import arrowback from '../../../images/arrowback.svg'
import logo from '../../../images/logo.svg'
import {Button, Fab} from '@material-ui/core'
import { Formik } from "formik";
import mailbox from '../../../images/mailbox.png'


const InputOtp = (close, openModalNewPin) => {
    
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

            <div className="box_inp_otp">
                <img src={mailbox} alt=""/>
                <p className="title">Verifikasi Kode OTP</p>
                <p className="desc">Kode verifikasi telah dikirimkan ke nomor</p>
                <p className="num">0 8 5 7 * * * * 1 2 1 2</p>
                <Formik
                initialValues={{
                    box1 : '',
                    box2 : '',
                    box3 : '',
                    box4 : '',
                    box5 : '',
                    box6 : '',
                }}
                onSubmit={(val)=>{
                    openModalNewPin()
                    console.log(val)
                }}
                >
                    {({values, handleChange, handleSubmit})=>(
                    <form onSubmit={handleSubmit} id='otp'>
                        <input required onInput={(e)=> e.target.nextElementSibling.focus()}  type='number' maxLength='1' name='box1' value={values.box1} onChange={handleChange}  />
                        <input required onInput={(e)=> e.target.nextElementSibling.focus()}  type='number' maxLength='1' name='box2' value={values.box2} onChange={handleChange}  />
                        <input required onInput={(e)=> e.target.nextElementSibling.focus()}  type='number' maxLength='1' name='box3' value={values.box3} onChange={handleChange}  />
                        <input required onInput={(e)=> e.target.nextElementSibling.focus()}  type='number' maxLength='1' name='box4' value={values.box4} onChange={handleChange}  />
                        <input required onInput={(e)=> e.target.nextElementSibling.focus()}  type='number' maxLength='1' name='box5' value={values.box5} onChange={handleChange}  />
                        <input required  type='number' maxLength='1' name='box6' value={values.box6} onChange={handleChange}  />
                    </form>
                    )}
                </Formik>
                <Button type='submit' form='otp'>Verifikasi</Button>
                <p className="info">Belum menerima email aktivasi? <span>kirim ulang</span> dalam 30 detik</p>
            </div>

        </div>
    );
}

export default InputOtp;