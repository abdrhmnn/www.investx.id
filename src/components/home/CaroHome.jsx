import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import share from '../../images/share.svg'
import caroback from '../../images/caroback.svg'
import caronext from '../../images/caronext.svg'
import loca from '../../images/loca.svg'


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

          var arr = [1,2,2,2,2,2,2,2,2,2,2]
        return (
            <div className='carohome'>
                <div className="container">

                    <div className="header">
                        <div className="wrap">
                            <span className="sele">Highly selective</span>
                            <Link to='/'> <u>See All</u> </Link>
                        </div>
                        <hr/>
                    </div>

                    <div className="carousell-sec">
                        <Slider {...settings} ref={c => (this.slider = c)}>
                            {
                                arr.map((res,i)=>(
                                    <div>
                                        <div className="card-sec">
                                            <img src="https://placeimg.com/640/480/tech" alt=""/>
                                            <div className="share">
                                                <div className="log">
                                                    <img src='https://placeimg.com/640/480/grayscale' alt=""/>   
                                                </div>
                                                <img className='ishare' src={share} alt=""/>
                                            </div>
                                            <div className="body">
                                                <p className="name">MOON FAB</p>
                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur </p>
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
                                                    Jakarta
                                                </div>
                                                <div className="day">30 Days left</div>
                                            </div>
                                        </div>
                                    </div>
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
                            <Link to='/'> <u>See All</u> </Link>
                        </div>
                        <hr/>
                    </div>

                    <div className="carousell-sec">
                        <Slider {...settings2} ref={c => (this.slider2 = c)}>
                            {
                                arr.map((res,i)=>(
                                    <div>
                                        <div className="card-sec">
                                            <img src="https://placeimg.com/640/480/nature" alt=""/>
                                            <div className="share">
                                                <div className="log">
                                                    <img src='https://placeimg.com/640/480/animals/sepia' alt=""/>   
                                                </div>
                                                <img className='ishare' src={share} alt=""/>
                                            </div>
                                            <div className="body">
                                                <p className="name">MOON FAB</p>
                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur </p>
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
                                                    Jakarta
                                                </div>
                                                <div className="day">30 Days left</div>
                                            </div>
                                        </div>
                                    </div>
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
                            <Link to='/'> <u>See All</u> </Link>
                        </div>
                        <hr/>
                    </div>

                    <div className="carousell-sec">
                        <Slider {...settings3} ref={c => (this.slider3 = c)}>
                            {
                                arr.map((res,i)=>(
                                    <div>
                                        <div className="card-sec">
                                            <img src="https://placeimg.com/640/480/arch" alt=""/>
                                            <div className="share">
                                                <div className="log">
                                                    <img src='https://placeimg.com/640/480/tech/grayscale' alt=""/>   
                                                </div>
                                                <img className='ishare' src={share} alt=""/>
                                            </div>
                                            <div className="body">
                                                <p className="name">MOON FAB</p>
                                                <p className="desc">Lorem ipsum dolor sit amet, consectetur </p>
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
                                                    Jakarta
                                                </div>
                                                <div className="day">30 Days left</div>
                                            </div>
                                        </div>
                                    </div>
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