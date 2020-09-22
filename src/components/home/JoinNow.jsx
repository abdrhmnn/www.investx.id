import React, { Component } from 'react';
import logos from '../../images/joinNow/logos.svg'
import { Link } from 'react-router-dom'

class JoinNow extends Component {
    render(){
        return (
            <div className="join-now">
                <div className="container">
                    <div className="row border-bottom ">
                        <div className="col-md-6 box-join left">
                            <div className="big-text">
                                <span className="gray">Temukan</span> <span className="black">Startup & Entrepreneur</span> <span className="gray"> se-Indonesia</span>
                            </div>
                            <div className="text size1">Bersama mendorong UKM dan startup di Indonesia tanpa melewatkan peluang keuntungan untuk anda. InvestX percaya kita semua bisa memajukan UKM dan startup di Indonesia</div>
                        </div>
                        <div className="col-md-6 box-join right gambar-api">
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 box-join left gambar-api">
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                            <img src={logos} alt=""/>
                        </div>
                        <div className="col-md-6 box-join right">
                            <div className="big-text">
                                <span className="gray">Bergabung bersama</span> <span className="black">Ribuan Investor</span> <span className="gray">di Indonesia</span>  
                            </div>
                            <div className="text size2">Rekomendasikan perusahaan tempat anda berinvestasi kepada teman anda. Pelajari strategi dan berkembang bersama para investor berpengalaman seluruh Indonesia</div>
                            
                        </div>
                    </div>
                    <div className="row">
                            <button type='button' className="ku">Join Now</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default JoinNow;