import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import step1 from '../../images/how/step1.svg'
import step2 from '../../images/how/step2.svg'
import step3 from '../../images/how/step3.svg'
import Footer from '../shared/Footer';
import Ojk from '../shared/Ojk';

class HowItWorks extends Component {
    render() {
        return (
            <div className='how'>
                <div className="head">
                    <Navbar />
                    <div className="container jumbo">
                        <div className="con">
                            <p className="title">Cara mudah untuk Investasimu</p>
                            <p className="desc">Apakah kamu seorang Investor ataupun pelaku bisnis, siapapun bisa dengan mudah menggunakan InvestX</p>
                            <button className='invest'>Start Investing</button>
                            <button className='fund'>Get Funding</button>
                        </div>
                    </div>
                </div>
                <div className="cara">
                    <p className="title">Cara Investasi</p>
                    <p className="desc">Ikuti panduan singkat cara investasi dari kami dan dapatkan penghasilan rutin dari bagihasil bisnis kamu pilih.</p>
                </div>
                <div className="kartu">
                    <div className="container steps">
                        <div className="step-box">
                            <div className="head-kar">
                                <p className="title">Step 1</p>
                                <p className="desc">Choose</p>
                            </div>
                            <div className="karcon">
                                <figure>
                                    <img src={step1} alt="steps"/>
                                </figure>
                                <ul>
                                    <li><i className="fas fa-circle"></i></li>
                                    <li>
                                        Pick a startup you like.
                                        <br/><br/>
                                        Review the company pitch, terms, and decide whether you believe they will succeed.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="step-box">
                            <div className="head-kar">
                                <p className="title">Step 2</p>
                                <p className="desc">Invest</p>
                            </div>
                            <div className="karcon">
                                <figure>
                                    <img src={step2} alt="steps"/>
                                </figure>
                                <ul>
                                    <li><i className="fas fa-circle"></i></li>
                                    <li>
                                        Invest a small amount to start.
                                        <br/><br/>
                                        Plan to diversify, which means investing smaller amounts into several companies.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="step-box">
                            <div className="head-kar">
                                <p className="title">Step 3</p>
                                <p className="desc">Wait</p>
                            </div>
                            <div className="karcon">
                                <figure>
                                    <img src={step3} alt="steps"/>
                                </figure>
                                <ul>
                                    <li><i className="fas fa-circle"></i></li>
                                    <li>
                                    Wait to see if the startup succeeds.
                                        <br/><br/>
                                        If the startup does well, your investment can bring a return.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cara">
                    <p className="title">Cara Mengajukan Bisnis</p>
                    <p className="desc">Ikuti panduan singkat cara investasi dari kami dan dapatkan penghasilan rutin dari bagihasil bisnis kamu pilih.</p>
                </div>
                <Footer />
                <Ojk />
            </div>
        );
    }
}

export default HowItWorks;