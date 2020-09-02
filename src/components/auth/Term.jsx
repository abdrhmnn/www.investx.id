import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import ModalOtp from './Otp';
import "../../styles/term.scss"

class Term extends Component {
    state={
        isOtp : false
    }
    render() {
        return (
            <div>
                {/* {this.state.isOtp? <ModalOtp/> : null} */}
                <div className='termandcon'>
                    <div className="box">
                        <h5>SYARAT DAN KETENTUAN UMUM</h5>
                        <p className="title">Kata Pengantar</p>
                        <p className="desc">
                        Syarat dan ketentuan umum ini mengatur hak dan kewajiban yang mengikat secara hukum terhadap Pengguna untuk mengakses, menggunakan dan mengunjungi setiap dan seluruh laman situs (website) dan layanan yang terdapat pada situs www.InvestX.id ("Situs InvestX"). Situs InvestX merupakan situs milik dari PT Investasi Digital Nusantara (atau dikenal dengan nama “InvestX” atau “Penyelenggara”) yang merupakan penyelenggara layanan urun dana melalui penawaran saham berbasis teknologi informasi (equity crowdfunding) berdasarkan Peraturan POJK No.37 Tahun 2018 (selanjutnya disebut “POJK”) dan telah memperoleh izin dari Otoritas Jasa Keuangan (selanjutnya disebut OJK) No.71/D.04/2019 tentang Pemberian Izin Usaha Penyelenggara Layanan Urun Dana Melalui Penawaran Saham Berbasis Teknologi Informasi (equity crowdfunding) PT Investasi Digital Nusantara. .
                        </p>
                    </div>
                    <div className="box-butt">
                        <button onClick={()=>this.setState({isOtp : true})}>Saya Setuju</button>
                        <Link to='/'>Kebijakan Privasi</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Term;
