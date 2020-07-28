import React, { Component } from 'react';
import logos from '../../images/joinNow/logos.svg'
import people from '../../images/joinNow/people.svg'
import { Link } from 'react-router-dom'

class JoinNow extends Component {
    render(){
        return (
            <div className="join-now">
                <div className="container">
                    <div className="row border-bottom ">
                        <div className="col-md-6 box left">
                            <div className="big-text">
                                <span className="gray">Temukan</span> Startup & Entrepreneur<span className="gray"> se-Indonesia</span>
                            </div>
                            <div className="text size1">Bersama mendorong UKM dan startup di Indonesia tanpa melewatkan peluang keuntungan untuk anda. InvestX percaya kita semua bisa memajukan UKM dan startup di Indonesia</div>
                        </div>
                        <div className="col-md-6 box right">
                            <img src={logos} alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 box left">
                            <img src={people} alt=""/>
                        </div>
                        <div className="col-md-6 box right">
                            <div className="big-text">
                                <span className="gray">Bergabung bersama</span> Ribuan Investor <span className="gray">di Indonesia</span>  
                            </div>
                            <div className="text size2">Rekomendasikan perusahaan tempat anda berinvestasi kepada teman anda. Pelajari strategi dan berkembang bersama para investor berpengalaman seluruh Indonesia</div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md link-button">
                            <Link>Join Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default JoinNow;