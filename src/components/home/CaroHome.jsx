import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import caroback from '../../images/caroback.svg'
import caronext from '../../images/caronext.svg'
import Card from '../shared/Card';


class CaroHome extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            cssEase: "linear",
            afterChange: (current, next) =>{ console.log({curr : current, next : next})}
          };

          const settings2 = {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            cssEase: "linear",
          };

          const settings3 = {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            cssEase: "linear",
          };

          const dummyCards =[
            {id : 0, name : 'Bukalapak',},
            {id : 1, name : 'Tokopedia',},
            {id : 2, name : 'Facebook',},
            {id : 3, name : 'Travelio',},
            {id : 4, name : 'Alkulaku',},
            {id : 5, name : 'Spotify',},
        ]
        return (
            <div className='carohome'>
                <div className="container">

                    <div className="header">
                        <div className="wrap">
                            <span className="sele">Highly selective</span>
                            <Link to='/company-list'> <u>See All</u> </Link>
                        </div>
                        <hr/>
                    </div>

                    <div className="carousell-sec">
                        <Slider {...settings} ref={c => (this.slider = c)}>
                            {
                                dummyCards.map((res,i)=>(
                                    <Link key={i} to={`company-list/detail/${res.id}`}>
                                        <Card name={res.name} />
                                    </Link>
                                ))
                            }
                        </Slider>
                        <div className="arrows">
                            <button className='back' onClick={()=> this.slider.slickPrev()}> <img src={caroback} alt="back"/> </button>
                            <button className='next' onClick={()=> this.slider.slickNext()}><img src={caronext} alt="next"/></button>
                        </div>
                    </div>

                    <div className="header">
                        <div className="wrap">
                            <span className="sele">Closed Soon</span>
                            <Link to='/company-list'> <u>See All</u> </Link>
                        </div>
                        <hr/>
                    </div>

                    <div className="carousell-sec">
                        <Slider {...settings2} ref={c => (this.slider2 = c)}>
                            {
                                dummyCards.map((res,i)=>(
                                    <Link key={i} to={`company-list/detail/${res.id}`}>
                                        <Card name={res.name} />
                                    </Link>
                                ))
                            }
                        </Slider>
                        <div className="arrows">
                            <button className='back' onClick={()=> this.slider2.slickPrev()}> <img src={caroback} alt="back"/> </button>
                            <button className='next' onClick={()=> this.slider2.slickNext()}><img src={caronext} alt="next"/></button>
                        </div>
                    </div>

                    <div className="header">
                        <div className="wrap">
                            <span className="sele">New Startup</span>
                            <Link to='/company-list'> <u>See All</u> </Link>
                        </div>
                        <hr/>
                    </div>

                    <div className="carousell-sec">
                        <Slider {...settings3} ref={c => (this.slider3 = c)}>
                            {
                                dummyCards.map((res,i)=>(
                                    <Link key={i} to={`company-list/detail/${res.id}`}>
                                        <Card name={res.name} />
                                    </Link>
                                ))
                            }
                        </Slider>
                        <div className="arrows">
                            <button className='back' onClick={()=> this.slider3.slickPrev()}> <img src={caroback} alt="back"/> </button>
                            <button className='next' onClick={()=> this.slider3.slickNext()}><img src={caronext} alt="next"/></button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CaroHome;