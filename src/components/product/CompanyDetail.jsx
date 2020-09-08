import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'


import locacaro from '../../images/company/locacaro.svg'
import website from '../../images/company/website.svg'
import love from '../../images/company/love.svg'
import share from '../../images/company/share.svg'

class CompanyDetail extends Component {
    render() {

        const images = [
            'https://placeimg.com/640/480/tech',
            'https://placeimg.com/640/480/tech',
            'https://placeimg.com/640/480/tech',
            'https://placeimg.com/640/480/tech',
        ]

        const settings = {
            customPaging: function(i) {
              return (
                <a>
                  <img className='thumb-caro' src={images[i]} alt='thumcaro' />
                </a>
              );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        return (
            <div className='company-detail'>
            <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="header-detail">
                                <img src="https://placeimg.com/640/480/tech" alt="logo" className="logo"/>
                                <div>
                                     <p className="comp-name">MOON FAB</p>
                                     <p className="desc">Fresh vegetables Everyday!</p>
                                </div>
                            </div>
                            <div className="carousell-detail-wrap">
                                
                                <Slider {...settings}>
                                    {
                                        images.map((res,i)=>
                                        <div>
                                            <img src={res}  className='img-caro-det'/>
                                        </div>
                                        )
                                    }
                                </Slider>

                                <div className="caro-footer-cus">
                                    <div className='info-wrap'>
                                        <div className="loca">
                                            <img src={locacaro} alt="loc"/> Jakarta
                                        </div>
                                        <a className="web" href="http://">
                                            <img src={website} alt="website"/> website
                                        </a>
                                    </div>
                                    <div className="tags">
                                        <div>#Food</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                           <div className="nominalbox">
                               <p className="label">Dana Terkumpul</p>
                               <p className="nominal">Rp. 1.123.000.000</p>
                               <div className="progress"></div>
                               <p className="avail">Lembar Saham Tersedia <span>889</span>  Dari  3.500</p>
                           </div>

                            <div className="d-flex wrap-boxes-status align-items-center">
                                <div className="col-md">
                                    <p className="num">1230</p>
                                    <p className="inf">Investor</p>
                                </div>
                                <div className="col-md">
                                    <p className="num">67</p>
                                    <p className="inf">Sisa waktu</p>
                                </div>
                            </div>

                            <div className="d-flex wrap-boxes-status align-items-center">
                                <div className="col-md">
                                    <p className="num">Rp. 100.000</p>
                                    <p className='paper'>( 10 Lembar )</p>
                                    <p className="inf">Harga per-saham</p>
                                </div>
                                <div className="col-md">
                                    <p className="num">Rp. 800.000</p>
                                    <p className='paper'>( 8 Lembar )</p>
                                    <p className="inf">Min. pembelian</p>
                                </div>
                            </div>
                            
                            <Link to='/'>
                            <button className='start'>Mulai Investasi</button>
                            </Link>
                            <div className="love-share d-flex align-items-center justify-content-center">
                                    <div className="love d-flex align-items-center">
                                        <img src={love} alt="love"/> 200
                                    </div>
                                    <img src={share} alt=""/>
                            </div>
                            <Link to='/'>
                            <button className='down'>Download PROPOSAL</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyDetail;