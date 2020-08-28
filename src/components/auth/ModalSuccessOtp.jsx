import React, { Component } from 'react';
import successotp from '../../images/successotp.svg'
import emailicon from '../../images/emailicon.svg'
import { Link } from 'react-router-dom';


class ModalSuccessOtp extends Component {
    render() {
        return (
            <div className='overlay-success-otp'>
                <div className="box">
                    <img className='com' src={successotp} alt="success"/>
                    <p className="title">Kode OTP Berhasil !</p>
                    <p className="desc">Segera Verifikasi email anda dan isi data untuk melakukan kegiatan di InvestX</p>
                    <p className="lab">Email Anda :</p>
                    <p className="email">lallala@email.com</p>
                    <p className="info">Belum menerima email aktivasi? <span>kirim ulang</span>  dalam 47 detik</p>
                    <div className="box-butt">
                        <button className='back' onClick={this.props.offModal}>Kembali ke Halaman Utama</button>
                        {/* sementarta  */}
                        <Link to='/select-form'>
                            <button className='bmail'> <img src={emailicon} alt="email"/> Buka Email</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalSuccessOtp;