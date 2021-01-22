import React, { Component } from "react";
import Navbar from "../shared/Navbar";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Button, LinearProgress } from "@material-ui/core";

import locacaro from "../../images/company/locacaro.svg";
import website from "../../images/company/website.svg";
import love from "../../images/company/love.svg";
import share from "../../images/company/share.svg";
import StepSaham from "./StepSaham";
import TabsComp from "./tab/TabsComp";
import EmbedMap from "./EmbedMap";
import Footer from "../shared/Footer";
import Ojk from "../shared/Ojk";
import { connect } from "react-redux";

import API from "../../api";
// import Loading from "../shared/Loading";
// import Swal from "sweetalert2";

class CompanyDetail extends Component {
  state={
  }
  componentDidMount(){
    this.getData()
  }

  getData = () =>{
    let id = this.props.match.params.id
    API.fundraiseDetail(id).then(res=>{
      console.log(res)
      // this.setState({ 
      //   data : res.data,
      //   company : res.data.company,
      //   tags : res.data.tags,
      // })
      this.props.sendDetail(res.data)
      this.props.sendDetailCompany(res.data.company)
      this.props.sendDetailTags(res.data.tags)
    }).catch(err => console.log(err.response))
  }


  render() {
    console.log(this.props.dataDetailCompany)
    const images = [
      "https://placeimg.com/640/480/tech",
      "https://placeimg.com/640/480/tech",
      "https://placeimg.com/640/480/tech",
      "https://placeimg.com/640/480/tech",
    ];


    const settings = {
      customPaging: (i)=> {
        return (
          <a>
            <img className="thumb-caro" src={images[i]} alt="thumcaro" />
          </a>
        );
      },
      dots: false,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    console.log(this.props);
    const company = this.props.dataDetailCompany
    const {name, trademark, logo, cover} = company
    const {regency, amount, progress, min_invest_amount, status, end_date, investor_count, price_per_share, shares_remaining, shares, } = this.props.dataDetail
    return (
      <>
        <div className="company-detail">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="header-detail">
                  <img
                    src={logo}
                    alt="logo"
                    className="logo"
                  />
                  <div>
                    <p className="comp-name">{name}</p>
                    <p className="desc">{trademark}</p>
                  </div>
                </div>
                <div className="carousell-detail-wrap">
                  <Slider {...settings}>
                    {images.map((res,i) => (
                      <div key={i}>
                        <img
                          alt="company-profile"
                          src={cover}
                          className="img-caro-det"
                        />
                      </div>
                    ))}
                  </Slider>

                  <div className="caro-footer-cus">
                    <div className="info-wrap">
                      <div className="loca">
                        <img src={locacaro} alt="loc" /> {regency}
                      </div>
                      <a className="web" href="http://">
                        <img src={website} alt="website" /> website
                      </a>
                    </div>

                      <div className="wrap_tag">
                        {this.props.dataDetailTags.map((res,i)=><div className="tags"key={i}><div >#{res}</div></div>)}
                      </div>

                  </div>
                </div>

                <StepSaham active={status} />
                <TabsComp />
              </div>
              <div className="col-md-4 d-flex flex-column justify-content-between">
                <div className="top-bar">
                  <div className="nominalbox">
                    <p className="label">Dana Terkumpul</p>
                    <p className="nominal">Rp. {Math.floor(amount)}</p>
                    <div className="prog d-flex align-items-center">
                      <LinearProgress
                        variant="determinate"
                        className="bar"
                        value={progress*100}
                      />
                      <span>{progress*100}%</span>
                    </div>
                    <p className="avail">
                      Lembar Saham Tersedia <span>{shares_remaining}</span> Dari {shares}
                    </p>
                  </div>

                  <div className="d-flex wrap-boxes-status align-items-center">
                    <div className="col-md">
                      <p className="num">{investor_count}</p>
                      <p className="inf">Investor</p>
                    </div>
                    <div className="col-md">
                      <p className="num">{(new Date(end_date).getDate()) - (new Date().getDate())}</p>
                      <p className="inf">Sisa waktu</p>
                    </div>
                  </div>

                  <div className="d-flex wrap-boxes-status align-items-center">
                    <div className="col-md">
                      <p className="num">Rp. {Math.floor(price_per_share)}</p>
                      <p className="paper">( 10 Lembar )</p>
                      <p className="inf">Harga per-saham</p>
                    </div>
                    <div className="col-md">
                      <p className="num">Rp. {Math.floor(min_invest_amount)}</p>
                      <p className="paper">( 8 Lembar )</p>
                      <p className="inf">Min. pembelian</p>
                    </div>
                  </div>

                  <Link
                    to={`/company-list/detail/${this.props.match.params.id}/invest`}
                  >
                    <Button className="start">Mulai Investasi</Button>
                  </Link>
                  <div className="love-share d-flex align-items-center justify-content-center">
                    <div className="love d-flex align-items-center">
                      <img src={love} alt="love" /> 200
                    </div>
                    <img src={share} alt="share" />
                  </div>
                  <Link to="/">
                    <Button className="down">Download PROPOSAL</Button>
                  </Link>
                </div>

                <div className="bottom-bar pt-4">
                  <p>Location</p>
                  <EmbedMap />
                  <p className="desc-address">
                    Cyber2 Tower, Lantai 17 Unit D-E, Blok X5 no 13, Jl. H. R.
                    Rasuna Said, RT.7/RW.2, Kuningan, Kecamatan Setiabudi, Kota
                    Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Ojk />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataDetail :  state.dataDetail,
    dataDetailCompany :  state.dataDetailCompany,
    dataDetailTags :  state.dataDetailTags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendDetail: (data) => {
      const action = { type: "POST_DETAIL", data : data };
      dispatch(action);
    },
    sendDetailCompany: (data) => {
      const action = { type: "POST_DETAIL_COMPANY", data : data };
      dispatch(action);
    },
    sendDetailTags: (data) => {
      const action = { type: "POST_DETAIL_TAGS", data : data };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);
