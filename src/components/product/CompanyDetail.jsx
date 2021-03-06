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
import moment from "moment";
import 'moment/locale/id';
import helper from "../../helpers/helper";
import kuki from "../../helpers/kuki";
// import Loading from "../shared/Loading";
// import Swal from "sweetalert2";

class CompanyDetail extends Component {
  state={
  }
  componentDidMount(){
    this.getData()
    window.scrollTo({ top: 0 });
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

  getCountdown = (endDate) =>{
    // var xxx = '2021-02-18'
    var endInvest = moment(endDate);
    var now = moment();
    var result =  endInvest.diff(now, 'days')  + 1
    return result 
  }

  rupiahFormat = (number)=>{
    const result = helper.idr(Math.round(number))
    return result
  }

  checkCookies = ()=>{
    if (kuki.get('auth') && kuki.get('isInvestorComplete')) {
      return window.location.href = `/company-list/detail/${this.props.match.params.id}/invest`
    }

    if (kuki.get('auth') && !kuki.get('isInvestorComplete')) {
      return  window.location.href = `/investor-form-data-diri`
    }

    if (!kuki.get('auth')) {
      return window.location.href = `/login`
    }
  }
  
  buttonInvest = (end_date) =>{
    const isDisabledInvest = this.getCountdown(end_date) <= 0 
    return(
      // <Link
      //   style={{cursor : isDisabledInvest? 'default' : 'pointer'}}
      //   to={isDisabledInvest ? "#" : `/company-list/detail/${this.props.match.params.id}/invest`}
      // >
        <Button 
        className="start" 
        variant="contained"
        disabled={isDisabledInvest? true : false}
        onClick={this.checkCookies}
        >
          MULAI INVESTASI
        </Button>
      // </Link>
    )
  }


  render() {
    console.log(this.props.dataDetailCompany)
    console.log(this.props.dataDetail, 'DATA DETAIL')
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

    const {name, trademark, logo, cover, website_url, address, prospectus} = this.props.dataDetailCompany
    const {
      regency, 
      amount, 
      progress, 
      min_invest_amount, 
      status, 
      end_date, 
      investor_count, 
      price_per_share, 
      shares_remaining, 
      shares,
      min_invest_share
    } = this.props.dataDetail
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
                      {
                        website_url !==null ? 
                        <a className="web" href={website_url} target='_blank'  rel="noreferrer">
                          <img src={website} alt="website" /> website
                        </a>
                        : null
                      }
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
                    <p className="nominal">Rp. {this.rupiahFormat(amount)}</p>
                    <div className="prog d-flex align-items-center">
                      <LinearProgress
                        variant="determinate"
                        className="bar"
                        value={Math.round(progress*100)}
                      />
                      <span>{Math.round(progress*100)}%</span>
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
                      <p className="num">{this.getCountdown(end_date) <= 0 ? 'Waktu habis' : this.getCountdown(end_date)}</p>
                      <p className="inf">Sisa waktu</p>
                    </div>
                  </div>

                  <div className="d-flex wrap-boxes-status align-items-center">
                    <div className="col-md">
                      <p className="num">Rp. {this.rupiahFormat(price_per_share )}</p>
                      <p className="paper"> &nbsp;</p>
                      <p className="inf">Harga per-saham</p>
                    </div>
                    <div className="col-md">
                      <p className="num">Rp. {this.rupiahFormat(min_invest_amount )}</p>
                      <p className="paper">( {min_invest_share} Lembar )</p>
                      <p className="inf">Min. pembelian</p>
                    </div>
                  </div>

                  {
                    this.buttonInvest(end_date)
                  }
                      {/* {kuki.get('auth') ? 'ada' : 'tidak ada kooki'} */}

                  <div className="love-share d-flex align-items-center justify-content-center">
                    <div className="love d-flex align-items-center">
                      <img src={love} alt="love" /> 200
                    </div>
                    <img src={share} alt="share" />
                  </div>
                  <a href={prospectus !== null ? prospectus : ''} download>
                    <Button className="down" disabled={prospectus !== null} >DOWNLOAD PROSPEKTUS</Button>
                  </a>
                </div>

                <div className="bottom-bar pt-4">
                  <p>Location</p>
                    { address ?
                      address.map((res, i)=>(
                        <>
                        <EmbedMap address= {`${res.address} ${res.kelurahan} ${res.district} ${res.regency} ${res.province}`}/>
                        <p className="desc-address" key={i}>
                          {`${res.address} Kel/Desa ${res.kelurahan} Kecamatan ${res.district}, Kab/Kota ${res.regency}, Provinsi ${res.province}`}
                        </p>
                        </>
                      ))
                      : <EmbedMap />
                    }
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
