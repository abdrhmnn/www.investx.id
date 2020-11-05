import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import gmail from '../../images/gmail.svg'
// import outlook from '../../images/outlook.svg'
import Navbar from '../shared/Navbar';
import mailbox from '../../images/mailbox.png'

import { Button } from '@material-ui/core';
import ModalTemplate from '../shared/ModalTemplate';

import successotp from '../../images/successotp.svg'
import emailicon from '../../images/emailicon.svg'
import API  from "../../api";
import kuki from '../../helpers/cookie'
import Swal from 'sweetalert2'






class Otp extends Component {
    state ={
        box1 : '',
        box2 : '',
        box3 : '',
        box4 : '',
        box5 : '',
        box6 : '',
        onOpenModal : false
    }
    handleChange = (e) =>{
        let boxes = ['box1','box2','box3','box4','box5','box6',]
        for (let i = 0; i < 5; i++) {
            if (e.target.name === boxes[i] && e.target.value !== "") {
                this[`boxFoc${i + 2}`].focus()
            }
        }

        const regex = /[0-9]/g;
        var val  = e.target.value.match(regex)
        this.setState({
            [e.target.name] : val == null ? '' : e.target.value
        }, ()=>{
            var {box1, box2, box3, box4, box5, box6 } = this.state
            if (box1 !== '' && box2 !== '' && box3 !== '' && box4 !== '' && box5 !== '' && box6 !== '' ) {
        }
        })
    }
    handleSubmit = (e)=>{
        var {box1, box2, box3, box4, box5, box6 } = this.state
        let otpCode = box1 + box2 + box3 + box4 + box5 + box6
        console.log(this.state);
        // window.location.href = '/select-form'
        // this.setState({onOpenModal : true})
        API.otp(otpCode).then(res=>{
            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'Verifikasi OTP berhasil!',
                showConfirmButton: false,
                timer: 1500
            })
            window.location.href = '/'
            kuki.set('status', {phone : true, email : kuki.get('status').email})
        }).catch(err =>{
            console.log(err.response)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Verifikasi OTP gagal!` ,
            })
        })
        e.preventDefault()
    }

    compModalSuccessOtp = () =>  {
        return (
            // <div className='overlay-success-otp'>
                <div className="box-modal-verifyemail">
                    <img className='com' src={successotp} alt="success"/>
                    <p className="title">Kode OTP Berhasil !</p>
                    <p className="desc">Segera Verifikasi email anda dan isi data untuk melakukan kegiatan di InvestX</p>
                    <p className="lab">Email Anda :</p>
                    <p className="email">lallala@email.com</p>
                    <p className="info">Belum menerima email aktivasi? <span>kirim ulang</span>  dalam 47 detik</p>
                    <div className="box-butt">
                        <Link to='/'>
                            <Button className='back' >Kembali ke Halaman Utama</Button>
                        </Link>
                        {/* sementarta  */}
                        <Link to='/select-form'>
                            <Button className='bmail'> <img src={emailicon} alt="email"/> Buka Email</Button>
                        </Link>
                    </div>
                </div>
            // </div>
        );
    }
    

    render() {
        return (
            <div>
                <ModalTemplate onOpen={this.state.onOpenModal} component={this.compModalSuccessOtp}/>
                <Navbar removePopUp/>
                <div className='otp mt-5'>
                    <div className="box-otp">
                        <img src={mailbox} alt=""/>
                        <p className="title">Verifikasi Kode OTP</p>
                        <p className="desc">Kode verifikasi telah dikirimkan ke nomor</p>
                        <p className="num">{kuki.get('phone_number')}</p>
                        <form onSubmit={this.handleSubmit} id='otp'>
                            <input required ref={(input) => { this.boxFoc1 = input; }}  type='number' maxLength='1' name='box1' value={this.state.box1} onChange={this.handleChange}  />
                            <input required ref={(input) => { this.boxFoc2 = input; }}  type='number' maxLength='1' name='box2' value={this.state.box2} onChange={this.handleChange}  />
                            <input required ref={(input) => { this.boxFoc3 = input; }}  type='number' maxLength='1' name='box3' value={this.state.box3} onChange={this.handleChange}  />
                            <input required ref={(input) => { this.boxFoc4 = input; }}  type='number' maxLength='1' name='box4' value={this.state.box4} onChange={this.handleChange}  />
                            <input required ref={(input) => { this.boxFoc5 = input; }}  type='number' maxLength='1' name='box5' value={this.state.box5} onChange={this.handleChange}  />
                            <input required ref={(input) => { this.boxFoc6 = input; }}  type='number' maxLength='1' name='box6' value={this.state.box6} onChange={this.handleChange}  />
                        </form>
                        <Button type='submit' form='otp'>Verifikasi</Button>
                        <p className="info">Belum menerima email aktivasi? <span>kirim ulang</span> dalam 30 detik</p>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Otp;