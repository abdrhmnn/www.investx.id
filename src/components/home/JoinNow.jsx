import React, { Component } from 'react';
import logos from '../../images/joinNow/logos.svg'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import loca from '../../images/loca.svg'



class JoinNow extends Component {
    render() {
        return (
            <div className="join-now mb-5">
                <div className="container mb-5  wrap-join-boxes">

                    <div className="row">
                        <div className="col-md-7 kiri">
                            <p className="big-text mt-5"><span className="gray">Temukan</span> <span className="black">Startup & Entrepreneur</span> <span className="gray"> se-Indonesia</span></p>
                            <p className="text size1 br">Bersama mendorong UKM dan startup di Indonesia tanpa melewatkan peluang keuntungan untuk anda. InvestX percaya kita semua bisa memajukan UKM dan startup di Indonesia</p>
                        </div>
                        <div className="col-md-5 wrap-gambar-join">
                            <div className="box-image-wrap">
                                <div className="box-baris-1">
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                </div>
                                <div className="box-baris-2">
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                </div>
                                <div className="box-baris-1">
                                    <img className="boxes" src="https://placeimg.com/640/480/tech" />
                                    <img className="boxes" src="https://placeimg.com/640/480/tech" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-join-2" >
                        <div className="col-md-5 wrap-gambar-join">
                            <div className="box-image-wrap">
                                <div className="box-baris-1">
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                </div>
                                <div className="box-baris-2">
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                </div>
                                <div className="box-baris-1">
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                    <img className="boxes " src="https://placeimg.com/640/480/tech" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 pt-5 kanan">
                            <p className="big-text mt-5"><span className="gray">Bergabung bersama</span> <span className="black">Ribuan Investor</span> <span className="gray">di Indonesia</span></p>
                            <p className="text size1">Rekomendasikan perusahaan tempat anda berinvestasi kepada teman anda. Pelajari strategi dan berkembang bersama para investor berpengalaman seluruh Indonesia</p>
                        </div>
                    </div>


                </div>
                <div className="d-flex justify-content-center join-now-button">
                    <Button className="tombol-join link-button lets-join">Join Now</Button>
                </div>
            </div>
        );
    }
}
export default JoinNow;



{/* <div className="row border-bottom ">
                        <div className="col-md-6 box-join left">
                            <div className="big-text">
                                <span className="gray">Temukan</span> <span className="black">Startup & Entrepreneur</span> <span className="gray"> se-Indonesia</span>
                            </div>
                            <div className="text size1">Bersama mendorong UKM dan startup di Indonesia tanpa melewatkan peluang keuntungan untuk anda. InvestX percaya kita semua bisa memajukan UKM dan startup di Indonesia</div>
                        </div>
                        <div className="col-md-6 box-join right gambar-api">
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 box-join left gambar-api">
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                        </div>
                        <div className="col-md-6 box-join right">
                            <div className="big-text">
                                <span className="gray">Bergabung bersama</span> <span className="black">Ribuan Investor</span> <span className="gray">di Indonesia</span>  
                            </div>
                            <div className="text size2">Rekomendasikan perusahaan tempat anda berinvestasi kepada teman anda. Pelajari strategi dan berkembang bersama para investor berpengalaman seluruh Indonesia</div>
                            
                        </div>
                    </div> */}
{/* <div className="row">
                            <button type='button' className="ku">Join Now</button>
                    </div> */}