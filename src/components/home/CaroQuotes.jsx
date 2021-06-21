import React, { Component } from "react";
import Slider from "react-slick";
import picture from "../../images/caroQuotes/displaypicture.svg";
import caroback from "../../images/caroback.svg";
import caronext from "../../images/caronext.svg";

import { Button } from "@material-ui/core";

class CaroQuotes extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 8000,
    };
    var arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    return (
      <div className="caro-quotes">
        <div className="container ">
          <div className="carousell-sec">
            <Slider {...settings} ref={(c) => (this.slider = c)}>
              {arr.map((res, i) => (
                <div key={i}>
                  <div className="row center row-mobile">
                    <div className="col-md-7 ">
                      <span className="header">
                        "Exactly what founders need to be successful"
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md center">
                      <img src={picture} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <span className="name">Kartika</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <span className="details">Co-Founder of MOONFAB</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <span className="details">JAKARTA</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="arrows">
              <Button className="back" onClick={() => this.slider.slickPrev()}>
                {" "}
                <img src={caroback} alt="back" />{" "}
              </Button>
              <Button className="next" onClick={() => this.slider.slickNext()}>
                <img src={caronext} alt="next" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CaroQuotes;
