import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../shared/Navbar";
import { Button, Fab, Collapse } from "@material-ui/core";
import walleticon from "../../images/profile/walleticon.svg";
import plustopup from "../../images/profile/plustopup.svg";

import profile from "../../images/profile/profile.svg";
import busines from "../../images/profile/busines.svg";
import favorite from "../../images/profile/favorite.svg";
import history from "../../images/profile/history.svg";
import list from "../../images/profile/list.svg";
import dividen from "../../images/profile/dividen.svg";
import DataDiriProfile from "./profileMenu/DataDiriProfile";
import Footer from "../shared/Footer";
import Ojk from "../shared/Ojk";

// import Fade from 'react-reveal/Fade';
import BusinessIndex from "./businessMenu/BusinessIndex";
import HistoryIndex from "./historyMenu/HistoryIndex";
import FavoriteIndex from "./favoriteMenu/FavoriteIndex";
import ListOfInvestmentIndex from "./listOfInvestmentMenu/ListOfInvestmentIndex";
import DividendIndex from "./dividendMenu/DividendIndex";

import API from "../../api";

class Profile extends Component {
  state = {
    filterShow: false,
    dataProfile: {},
    balance: {
      wallet: null,
      share: null,
      asset: null,
    }
  };

  componentDidMount() {
    API.getProfileCheck().then((res) => {
        console.log(res);
        this.setState({ dataProfile: res.data });
      }).catch((err) => {
        console.log(err.response);
      });
    API.getAccountBalance()
      .then((res) => {
        this.setState((state) => ({
          ...state,
          balance: {
            ...res.data
          },
        }));
      })
      .catch((err) => {
        console.error(err);
      });

  }


  handleClick = (stringMenu) => this.props.changeTab(stringMenu);

  render() {
    // console.log(this.props)

    return (
      <div className="profile">
        <Navbar />
        <div className="container">
          <div className="row head-profile">
            <div className="col-md-3 ">
              <figure>
                <img
                  className="profile-pict"
                  src="https://placeimg.com/640/480/people"
                  alt="card"
                />
                <Fab className="change-photo">
                  <i className="fas fa-camera"></i>
                </Fab>
              </figure>
              <p className="username">
                {this.state.dataProfile.full_name}
                {/* <span><i className="fas fa-pen"></i></span> */}
              </p>
              <p className="since">Member since june 2020</p>
            </div>
            <div className="col-md profile-right">
              <div className="row ">
                <div className="col-md-7 border-right">
                  <div className="walldesc">
                    <img src={walleticon} alt="wallet" />
                    <div className="pnumber">
                      Asset Balance
                      <br />
                      {this.state.balance.asset !== null ? (
                        <span>Rp. {this.state.balance.asset}</span>
                      ) : (
                        <span>Loading...</span>
                      )}
                      <div className="saltot">
                        <p className="box-saltot border-right">
                          Saldo Rupiah <br />
                          {this.state.balance.wallet !== null ? (
                            <span>Rp. {this.state.balance.wallet}</span>
                          ) : (
                            <span>Loading...</span>
                          )}
                        </p>
                        <p className="box-saltot">
                          Total Saham <br />
                          {this.state.balance.share !== null ? (
                            <span>Rp. {this.state.balance.share}</span>
                          ) : (
                            <span>Loading...</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pbuttons">
                    <Button
                      className="ftop"
                      onClick={() => this.props.history.push('/topup')}
                    >
                      {' '}
                      <img className="mr-2" src={plustopup} alt="topup" /> Top
                      Up Saldo
                    </Button>
                    <Button
                      className="fsal"
                      onClick={() => this.props.history.push('/withdraw')}
                    >
                      Withdraw
                    </Button>
                  </div>
                </div>
                <div className="col-md">
                  <div className="wesuh">
                    <p className="usaha border-bottom">
                      Usaha yang anda beri investasi <br /> <span>6</span>
                    </p>
                    <p className="usaha">
                      Estimasi penghasilan dalam 1 tahun <br />{' '}
                      <span>Rp. 125,000,000</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTAIN PROFILE  */}
          <div className="row body-profile">
            <div className="col-md-3">
              <div
                className={
                  this.state.filterShow
                    ? 'tab-float tab-float-active'
                    : 'tab-float'
                }
                onMouseEnter={() => this.setState({ filterShow: true })}
                onMouseLeave={() => this.setState({ filterShow: false })}
              >
                <ul>
                  <li
                    className={
                      this.props.activeTab === 'profile'
                        ? 'active-menu-profile'
                        : ''
                    }
                    onClick={() => this.handleClick('profile')}
                  >
                    <img
                      className="proficonmenu"
                      src={profile}
                      alt="menu-icon"
                    />{' '}
                    <span> My Profile</span>
                  </li>
                  <li
                    className={
                      this.props.activeTab === 'business'
                        ? 'active-menu-profile'
                        : ''
                    }
                    onClick={() => this.handleClick('business')}
                  >
                    <img
                      className="proficonmenu"
                      src={busines}
                      alt="menu-icon"
                    />{' '}
                    <span>My Business</span>{' '}
                  </li>
                  <li
                    className={
                      this.props.activeTab === 'history'
                        ? 'active-menu-profile'
                        : ''
                    }
                    onClick={() => this.handleClick('history')}
                  >
                    <img
                      className="proficonmenu"
                      src={history}
                      alt="menu-icon"
                    />{' '}
                    <span>History</span>{' '}
                  </li>
                  <li
                    className={
                      this.props.activeTab === 'favorite'
                        ? 'active-menu-profile'
                        : ''
                    }
                    onClick={() => this.handleClick('favorite')}
                  >
                    <img
                      className="proficonmenu"
                      src={favorite}
                      alt="menu-icon"
                    />{' '}
                    <span>Favorite</span>{' '}
                  </li>
                  <li
                    className={
                      this.props.activeTab === 'list'
                        ? 'active-menu-profile'
                        : ''
                    }
                    onClick={() => this.handleClick('list')}
                  >
                    <img className="proficonmenu" src={list} alt="menu-icon" />{' '}
                    <span>List of Investment</span>{' '}
                  </li>
                  <li
                    className={
                      this.props.activeTab === 'dividen'
                        ? 'active-menu-profile'
                        : ''
                    }
                    onClick={() => this.handleClick('dividen')}
                  >
                    <img
                      className="proficonmenu"
                      src={dividen}
                      alt="menu-icon"
                    />{' '}
                    <span>Dividend</span>{' '}
                  </li>
                  {/* <hr/> */}
                  {/* <li><img className='proficonmenu' src={logout} alt="menu-icon"/> Logout</li> */}
                </ul>
              </div>
            </div>
            <div className="col-md fbodycon">
              <Collapse in={this.props.activeTab === 'profile'}>
                <DataDiriProfile />
              </Collapse>
              <Collapse in={this.props.activeTab === 'business'}>
                <BusinessIndex />
              </Collapse>
              <Collapse in={this.props.activeTab === 'history'}>
                <HistoryIndex />
              </Collapse>
              <Collapse in={this.props.activeTab === 'favorite'}>
                <FavoriteIndex />
              </Collapse>
              <Collapse in={this.props.activeTab === 'list'}>
                <ListOfInvestmentIndex />
              </Collapse>
              <Collapse in={this.props.activeTab === 'dividen'}>
                <DividendIndex />
              </Collapse>
            </div>
          </div>
        </div>
        <Footer />
        <Ojk />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
    // number : state.number
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (data) => dispatch({ type: "CHANGE_TAB", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
