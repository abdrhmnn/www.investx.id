
import React, { Component } from 'react';
import sele from '../../images/benefit/sele.svg'
import inve from '../../images/benefit/inve.svg'
import acc from '../../images/benefit/acc.svg'
import mission from '../../images/benefit/mission.svg'


class Benefit extends Component {
    render() {
        return (
            <div className="benefit">
                <div className='benefit-list'>
                    <img className='s-img' src="https://placeimg.com/640/480/tech/grayscale" alt=""/>
                    <div className="parag">
                        <p className="title">Smart way to raise money</p>
                        <p className="desc">Cras vel arcu massa. Pellentesque at rhoncus justo, sed rutrum felis. Nullam vel mi in justo fringilla hendrerit in a nisi. Mauris tempus erat est.</p>
                        <ul>
                            <li> <i className="fas fa-star"></i> Raise up to $1M of founder-friendly capital</li>
                            <li> <i className="fas fa-star"></i> Drive key metrics and market your business</li>
                            <li> <i className="fas fa-star"></i> Build a loyal army of evangelists and fans</li>
                            <li> <i className="fas fa-star"></i> verage raise: $500,000+ from 1,500+ investors*</li>
                            <li> <i className="fas fa-star"></i> 90%+ success rate since 2016</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="benefit-icons container">
                    <div className="row align-items-center text-center">

                        <div className="col-md box-ben ">
                            <div className="ben-img">
                                <img src={sele} alt=""/>
                            </div>
                            <div className="title">Highly selective</div>
                            <div className="desc">Less than 3% of startups that apply pass through our due diligence and investment committee.</div>
                        </div>

                        <div className="col-md box-ben ">
                            <div className="ben-img">
                                <img src={inve} alt=""/>
                            </div>
                            <div className="title">Free for investors</div>
                            <div className="desc">InvestX is investor-friendly by design with no hidden fees and top-rated customer service.</div>
                        </div>

                        <div className="col-md box-ben ">
                            <div className="ben-img">
                                <img src={acc} alt=""/>
                            </div>
                            <div className="title">Accessible</div>
                            <div className="desc">Industry-lowest minimums starting as low as $10 also help you build a more diversified portfolio.</div>
                        </div>

                        <div className="col-md box-ben ">
                            <div className="ben-img">
                                <img src={mission} alt=""/>
                            </div>
                            <div className="title">Mission-driven</div>
                            <div className="desc">We launched to level the playing field for entrepreneurs and investors.</div>
                        </div>

                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Benefit;