import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import caroback from "../../images/caroback.svg";
import caronext from "../../images/caronext.svg";
import Card from "../shared/Card";

import { Fab } from "@material-ui/core";


import API from "../../api";
// import Loading from "../shared/Loading";
// import Swal from "sweetalert2";

class CaroHome extends Component {
  state={
    data : []
  }
  componentDidMount(){
    this.getObj()
  }
  getObj = () =>{
    API.fundraise().then(res=>{
      console.log(res, 'data fundraise')
      this.setState({ 
        data : res.data.results,
      })
    }).catch(err => console.log(err.response))
  }
  render() {
    const responsiveStyle = [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
          centerMode: true,
          infinite: true,
          centerPadding: "30px",
        },
      },
    ]

    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      cssEase: "linear",
      responsive: responsiveStyle,
      afterChange: (current, next) => {
        console.log({ curr: current, next: next });
      },
    };

    const settings2 = {
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      cssEase: "linear",
      responsive: responsiveStyle
    };

    const settings3 = {
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      cssEase: "linear",
      responsive: responsiveStyle
    };

    
    return (
      <div className="carohome">
        <div className="container">
          <div className="header">
            <div className="wrap">
              <span className="sele">Highly selective</span>
              <Link to="/company-list">
                <u>See All</u>
              </Link>
            </div>
            <hr />
          </div>

          <div className="carousell-sec">
            <Slider {...settings} ref={(c) => (this.slider = c)}>
              {this.state.data.map((res, i) => (
                <Link key={i} to={`company-list/detail/${res.id62}`}>
                  <Card data={res} />
                </Link>
              ))}
            </Slider>
            <div className="arrows">
              <Fab className="back" onClick={() => this.slider.slickPrev()}>
                <img src={caroback} alt="back" />
              </Fab>
              <Fab className="next" onClick={() => this.slider.slickNext()}>
                <img src={caronext} alt="next" />
              </Fab>
            </div>
          </div>

          <div className="header">
            <div className="wrap">
              <span className="sele">Closed Soon</span>
              <Link to="/company-list">
                <u>See All</u>
              </Link>
            </div>
            <hr />
          </div>

          <div className="carousell-sec">
            <Slider {...settings2} ref={(c) => (this.slider2 = c)}>
              {this.state.data.map((res, i) => (
                <Link key={i} to={`company-list/detail/${res.id62}`}>
                  <Card data={res} />
                </Link>
              ))}
            </Slider>
            <div className="arrows">
              <Fab className="back" onClick={() => this.slider2.slickPrev()}>
                <img src={caroback} alt="back" />
              </Fab>
              <Fab className="next" onClick={() => this.slider2.slickNext()}>
                <img src={caronext} alt="next" />
              </Fab>
            </div>
          </div>

          <div className="header">
            <div className="wrap">
              <span className="sele">New Startup</span>
              <Link to="/company-list">
                <u>See All</u>
              </Link>
            </div>
            <hr />
          </div>

          <div className="carousell-sec">
            <Slider {...settings3} ref={(c) => (this.slider3 = c)}>
              {this.state.data.map((res, i) => (
                <Link key={i} to={`company-list/detail/${res.id62}`}>
                  <Card data={res} />
                </Link>
              ))}
            </Slider>
            <div className="arrows">
              <Fab className="back" onClick={() => this.slider3.slickPrev()}>
                <img src={caroback} alt="back" />
              </Fab>
              <Fab className="next" onClick={() => this.slider3.slickNext()}>
                <img src={caronext} alt="next" />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaroHome;
