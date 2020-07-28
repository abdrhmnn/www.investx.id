import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import aboutbg from '../../images/bg/about.jpg'
import selectbg from '../../images/bg/select.jpg'
import linebg from '../../images/bg/lineabout.svg'
import backtop from '../../images/backtop.svg'
import { Link } from 'react-router-dom';
import Ojk from '../shared/Ojk';
import Footer from '../shared/Footer';
import linkedin from '../../images/social/linkedin.svg'
import twitter from '../../images/social/twitter.svg'
import gmail from '../../images/social/gmail.svg'

class AboutUs extends Component {

    toTop = ()=> window.scrollTo({ top: 0, behavior: 'smooth' });
    
    render() {
        return (
            <div className="aboutus">
                <Navbar />
                <div className='head'>
                    <div className="jumbo" style={{backgroundImage: `url(${aboutbg})`}}>
                        <div className="container">
                            <p className="title">ABOUT US</p>
                            <p className="sub-title">Selamat Datang di INVESTX</p>
                            <p className="desc">Platform Equity Crowdfunding + di Indonesia Yang menghubungkan pelaku Bisnis dan Antar Investor</p>
                        </div>
                    </div>
                    <p className="jfot">Cras vel arcu massa. Pellentesque at rhoncus justo, sed rutrum felis. Cras vel arcu massa. Pellentesque at rhoncus justo, sed rutrum felis.</p>
                </div>
                <div className="whatis">
                    <img src={selectbg} alt="bg"/>
                    <div className="parag">
                        <div className="con">
                            <p className="title">Apa itu Equity Crowdfunding?</p>
                            <p className="desc">Equity crowdfunding adalah layanan urun dana melalui penawaran saham berbasis teknologi informasi. Sederhananya, equity crowdfunding adalah solusi pagi para pelaku bisnis untuk menghimpun dana dengan cara menjual saham mereka langsung kepada para investor secara daring sehingga pelaku bisnis bisa mendapat modal dengan cepat dan investor bisa mendapatkan dividen dari investasinya.</p>
                            <p className="title">Bagi Anda pelaku bisnis</p>
                            <p className="desc">InvestX membantu anda menghimpun dana dengan mudah dengan aturan yang lebih mudah dibanding pinjaman bank dan mekanisme penawaran saham yang lebih sederhana dibanding IPO. Dengan sistem equity crowdfunding, anda hanya perlu membagi dividen kepada investor tanpa bunga atau denda.</p>
                            <p className="title">Bagi Anda yang ingin memiliki bisnis</p>
                            <p className="desc">Anda bisa memiliki bisnis dan mendapatkan keuntungan secara pasif tanpa terlibat secara langsung dalam operasional usaha. InvestX menyediakan daftar bisnis dan startup yang potensial untuk anda berinvestasi. InvestX juga memiliki aturan serta regulasi yang memastikan legalitas semua pihak yang terlibat dan memastikan keamanan dalam setiap transaksi yang terjadi dalam InvestX. Anda tinggal memilih bisnis, berinvestasi, dan tunggu keuntungannya masuk ke akun anda. Seiring meningkatnya pengguna InvestX, semakin banyak orang mendapat keuntungan pasif dan UMKM yang terdanai sehingga dunia bisnis UMKM akan semakin cepat berkembang. InvestX mengajak anda semua untuk kontribusi dalam hal ini tanpa melupakan keuntungan bagi anda.</p>

                        </div>
                    </div>
                </div>

                <div className="weare" style={{backgroundImage: `url(${linebg})`}}>
                    <div className="container">
                        <div className="header">
                            <p className="title">Who We are?</p>
                            <p className="sub">We're a team of founders and investors, builders and operators.</p>
                            <p className="desc">InvestX was founded by alumni of AngelList, the world's largest online investment platform for accredited investors. AngelList was instrumental in passing the JOBS Act and remains our strategic partner. Our team has extensive experience in investing, online fundraising, business, law, engineering and community building. We’re passionate about startup investing and creating a better future, just like you.</p>
                        </div>
                        <div className="cards">
                            <div className="card-profile">
                                <img src="https://placeimg.com/640/480/tech/grayscale" alt="profile"/>
                                <p className="name">Adi Adriansyah</p>
                                <p className="title">CEO</p>
                                <p className="desc">Adi Arriansyah as a founder of Invest X. 8+ Years of experience in design, engineering, business, and sales for many clients from startup, corporation, banking, government, to multinational companies.</p>
                                <div className="socials">
                                    <a href="/"><img className='img-soc' src={linkedin} alt="linkedin"/></a>
                                    <a href="/"><img className='img-soc' src={twitter} alt="twitter"/></a>
                                    <a href="/"><img className='img-soc' src={gmail} alt="gamil"/></a>
                                </div>
                            </div>

                            <div className="card-profile">
                                <img src="https://placeimg.com/640/480/tech/grayscale" alt="profile"/>
                                <p className="name">Arif Dzikrullah</p>
                                <p className="title">Co - Founder & VP of Engineering</p>
                                <p className="desc">Arif Dzikrullah as a Co-founder/ VP of engineering. He is professional in tech managerial, specialized in a startup. Still an expert in full-stack. Experienced in building system from zero to something.</p>
                                <div className="socials">
                                    <a href="/"><img className='img-soc' src={linkedin} alt="linkedin"/></a>
                                    <a href="/"><img className='img-soc' src={twitter} alt="twitter"/></a>
                                    <a href="/"><img className='img-soc' src={gmail} alt="gamil"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="addmap">
                    <p className="title">You can find us here</p>
                    <div className="container p-0 box-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5125717360615!2d107.64579891537092!3d-6.948701694979725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e83fb5765d65%3A0xe3bfb9fb2c7588c7!2sSagara%20Technology!5e0!3m2!1sen!2sid!4v1595897960878!5m2!1sen!2sid"  frameborder="0" style={{"border":"0", width: '100%',height : '330px'}} title='sagaramap' allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>

                <div className="become">
                    <p className="title">Invest in highly vetted early-stage companies</p>
                    <Link to='/'>
                        <button>Become an Investor</button>
                    </Link>
                    <p className="have-acc">Have an account? <Link to='/login'>Log in</Link> </p>
                    <div className="backtop" onClick={()=> this.toTop()}><img src={backtop} alt="backtop"/></div>
                </div>
                <Footer />
                <Ojk />

            </div>
        );
    }
}

export default AboutUs;