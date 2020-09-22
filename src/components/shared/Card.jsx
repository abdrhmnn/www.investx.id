import React, { Component } from 'react';
import loca from '../../images/loca.svg'


class Card extends Component {
    render() {
        const {name} = this.props
        return (
            <div>
                <div className="card-sec">
                    <img src="https://placeimg.com/640/480/tech" alt=""/>
                    
                    <div className="body-card">
                        <div>
                            <p className="name">{name}</p>
                            <p className="desc">All you need for healthy lifetsyle </p>
                        </div>
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="prog">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="num">50%</div>
                    </div>
                    <div className="raised">
                        <div className="box-raised text-center">
                            <p className="nom">Rp. 1,2M <br/> <span>Raised</span></p>
                        </div>
                        <div className="box-raised border-left border-right text-center">
                            <p className="nom">Rp. 1 Jt <br/> <span>Min. Invest</span></p>
                        </div>
                        <div className="box-raised text-center">
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