import React, { Component } from "react";
import Navbar from "../shared/Navbar";
import ojk from "../../images/ojk.svg";
import x from "../../images/bg/x.svg";
import greenshield from "../../images/greenshield.svg";
import zebra from "../../images/bg/zebra.jpg";
import Footer from "../shared/Footer";
import Ojk from "../shared/Ojk";
import { connect } from "react-redux";
import Slider from "react-slick";

import { Button } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaroHome from "./CaroHome";
import Benefit from "./Benefit";
import JoinNow from "./JoinNow";
import CaroQuotes from "./CaroQuotes";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";
import PopSuccessForm from "../shared/PopSuccessForm";

class Home extends Component {
    state = {
        // modalOtp: false,
        // modalTerimakasih: false,
    };

    componentDidMount() {
        console.log(this.props.location.hash === "#modal-terimakasih");
        if (this.props.location.hash === "#modal-terimakasih") {
            this.setState({
                modalTerimakasih: true,
            });
        }
    }

    // offModal = () => {
    //     this.setState({ modalOtp: false });
    // };

    // offModalTerimakasih = () => {
    //     this.setState({ modalTerimakasih: false });
    //     window.location.hash = "";
    // };

    // onModal = () => {
    //     this.setState({ modalOtp: true });
    // };

    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8];
        console.log("====================================");
        console.log(this.props);
        console.log("====================================");
        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    },
                },
            ],
        };

        const butSolid = {
            width: "205px",
            height: "52px",
            background: "#4cb5ef",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
            border: "none",
            color: "white",
            marginRight: "28px",
            fontWeight: "500",
            fontSize: "16px",
        };

        const but = {
            fontWeight: "500",
            fontSize: "16px",
            background: "#ffffff",
            border: "1px solid #0288d1",
            boxSizing: "border-box",
            boxShadow: "0px 0px 9px #4cb5ef",
            borderRadius: "8px",
            width: "205px",
            height: "52px",
        };

        const carouselItem = [
            {"image": zebra,},
            {"image": "https://i.pinimg.com/originals/36/31/25/363125df0f728983311938f7b1f1d01a.jpg",},
            {"image": "https://images.unsplash.com/photo-1538384823779-80c3e445d1a4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",}
        ]

        return (
            <div>
                {/* {this.state.modalOtp ? (
                    <ModalSuccessOtp offModal={this.offModal} />
                ) : null} */}

                <Navbar onModal={this.onModal} />

                {/* {this.state.modalTerimakasih ? (
                    <PopSuccessForm offModal={this.offModalTerimakasih} />
                ) : null} */}

                <div id="carouselHome" className="jumbo carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {
                            carouselItem.map((res, i) => (
                                <li data-target="#carouselHome" data-slide-to={i.toString()} className={`indicator-color ${i === 0 ? 'active' : ''}}`}></li>
                            ))
                        }
                    </ol>
                    <div className="carousel-inner">
                        {
                            carouselItem.map((res, i) => (
                                <div className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                    <div className="home" style={{ backgroundImage: `url(${x}), url(${res.image})` }}>
                                        <div className="container p-0 contain-home">
                                            <div className="wrap">
                                                <p className="title">
                                                    EQUITY <br className="hideOnMobile" />
                                                    <span>CROWDFUNDING</span>
                                                </p>
                                                <p className="desc">
                                                    Mewujudkan era baru dalam berinvestasi Dapatkan
                                                    pendapatan secara pasif dan pendanaan dengan
                                                    cepat dengan InvestX.
                                                </p>

                                                <Link to="/investor-form-data-diri">
                                                    <Button style={butSolid} className="start-invest-but">
                                                        Start Investing
                                                    </Button>
                                                </Link>
                                                <Link to="/startup-form-data-diri">
                                                    <Button style={but} className="get-fund-but">Get Funding</Button> <br />
                                                </Link>
                                                <img src={ojk} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className="last-invest">
                        <Slider {...settings}>
                            {arr.map((res, i) => (
                                <div
                                    className="card-last"
                                    key={i}
                                    onClick={this.props.hahaFunct}
                                >
                                    <img
                                        src="https://pbs.twimg.com/profile_images/1108355467888259072/gxh4yKYO.png"
                                        alt=""
                                    />
                                    <div className="name">
                                        John Donal Invested <span>$1000 </span>
                                        in <span>Fleting</span>
                                        <br />
                                        <p className="time">2 hours again</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                

                <div
                    onBlur={() => {
                        window.location.hash = "#fadil";
                    }}
                    className="butraise container"
                >
                    <div className="left">
                        <p className="tit">COMPANIES FUNDRAISING</p>
                        <div className="desc">
                            <img src={greenshield} alt="shield" />
                            All companies are rigorously screened & pass due
                            diligence.
                        </div>
                    </div>
                    <Link to="/company-list">
                        <Button>See All</Button>
                    </Link>
                </div>

                <CaroHome />
                <Benefit />
                <CaroQuotes />
                <JoinNow />
                <div>
                    <FAQ />
                </div>

                <Footer />
                <Ojk />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.number,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hahaFunct: () => {
            const action = { type: "HAHA" };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
