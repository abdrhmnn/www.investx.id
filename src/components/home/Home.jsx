import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import ojk from '../../images/ojk.svg'
import x from '../../images/bg/x.svg'
import greenshield from '../../images/greenshield.svg'
import human from '../../images/bg/human.svg'
import Footer from '../shared/Footer';
import Ojk from '../shared/Ojk';
import { connect } from 'react-redux';
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaroHome from './CaroHome';

class Home extends Component {
    render() {
        const arr = [1,2,3,4,5,6,7,7,8]
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: "linear"
          };
        return (
            <div>

                <div className='home' style={{backgroundImage: `url(${x}), url(${human})`}}>
                    <Navbar />
                    <div className="container p-0 contain-home">
                        <div className="wrap">
                            <p className="title">EQUITY <br/><span>CROWDFUNDING</span></p>
                            <p className="desc">Cras vel arcu massa. Pellentesque at rhoncus justo, sed rutrum felis. Nullam vel mi in justo fringilla hendrerit in a nisi. Mauris tempus erat est.</p>
                            <button className="but-solid">Start Investing</button>
                            <button className="but">Get Funding</button> <br/>
                            <img src={ojk} alt=""/>
                        </div>
                    </div>

                        <div className="last-invest">
                        <Slider {...settings}>
                        {
                            arr.map((res,i)=>(
                                <div className="card-last" key={i} onClick={this.props.hahaFunct}>
                                    <img src="https://pbs.twimg.com/profile_images/1108355467888259072/gxh4yKYO.png" alt=""/>
                                    <p className="name">
                                        Kemal Aditya Invested <span>$1000 </span>
                                        in <span>Fleting</span>
                                        <br/>
                                        <p className="time">2 hours again</p>
                                    </p> 
                                </div>
                            ))
                        }
                        </Slider>
                        </div>
                </div>
                <div className="butraise container">
                    <div className="left">
                        <p className="tit">COMPANIES FUNDRAISING</p>
                        <div className="desc">
                            <img src={greenshield} alt="shield"/>
                            All companies are rigorously screened & pass due diligence.
                        </div>
                    </div>
                    <button>See All</button>
                </div>
                
                <CaroHome />
                <Footer />
                <Ojk />
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        data : state.number
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        hahaFunct : ()=>{
            const action = {type :'HAHA'}
            dispatch(action)
        } 
    }
}



export default connect(mapStateToProps,mapDispatchToProps )(Home);