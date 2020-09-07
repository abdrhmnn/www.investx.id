import React, { Component } from 'react';
import loca from '../../images/loca.svg'


class Card extends Component {
    render() {
        return (
            <div>
                <div className="card-sec">
                    <img src="https://placeimg.com/640/480/tech" alt=""/>
                    
                    <div className="body-card">
                        <div>
                            <p className="name">MOON FAB</p>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="prog">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="num">50%</div>
                    </div>
                    <div className="raised">
                        <div className="box">
                            <p className="nom">Rp. 1,2M <br/> <span>Raised</span></p>
                        </div>
                        <div className="box border-left border-right">
                            <p className="nom">Rp. 1 Jt <br/> <span>Min. Invest</span></p>
                        </div>
                        <div className="box">
                            <p className="nom">1030 <br/> <span>Investors</span></p>
                        </div>
                    </div>
                    <div className="loc">
                        <div className="name">
                            <img src={loca} alt=""/>
                            Pendidikan
                        </div>
                        <div className="name">
                            <img src={loca} alt=""/>
                            Jakarta
                        </div>
                    </div>
                    <div className="foot-card">
                        30 Days left
                    </div>
                    {/* <div className="foot-card-done">
                        Pendanaan Selesai
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Card;