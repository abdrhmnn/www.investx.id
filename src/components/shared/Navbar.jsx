import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { connect } from "react-redux";
import kuki from "../../helpers/kuki";

import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Badge, Button, ClickAwayListener } from "@material-ui/core";
import walletnav from "../../images/walletnav.svg";
import ModalTemplate from "./ModalTemplate";
import VerifyOtp from "./VerifyOtp";
import VerifyEmail from "./VerifyEmail";
import Loading from "./Loading";
import { ShoppingCart } from "react-feather";
// import API from "../../api";

const butLogin = {
  textTransform: "capitalize",
  fontFamily: "'Lato'",
  fontSize: "16px",
  width: "106px",
  height: "42px",
  border: "1px solid #0288D1",
  boxSizing: "border-box",
  borderRadius: "6px",
};

class Navbar extends Component {
  state = {
    isOpen: false,
    isOpenRes: false,
    statusId: null,
    modalInputOtp: false,
    modalInputEmail: false,
    completeOtp: false,
    loading: false,
    counterStart: false,
    dateNow: Date.now(),
    counterResetAdd: 0,
  };
  componentDidMount() {
    const { phone, email } = kuki.get("status") || {
      phone: false,
      email: false,
    };
    const isAuth = kuki.get("auth");
    if (!phone && isAuth) {
      this.setState({ statusId: 1 });
    }
    if (!email && isAuth) {
      this.setState({ statusId: 2 });
    }
    if (!email && !phone && isAuth) {
      this.setState({ statusId: 1 });
    }
  }

  handleLogout = ()=>{
    // API.logout().then(res=>alert(res))
    // .catch(err=> alert(err))
    // alert('hahah')
    // const arrKuki= ["auth","status","token","full_name","email","phone_number","isInvestorComplete"] 
      kuki.remove("auth")
      kuki.remove("status")
      kuki.remove("token")
      kuki.remove("full_name")
      kuki.remove("email")
      kuki.remove("phone_number")
      kuki.remove("isInvestorComplete")
      window.localStorage.clear()
      window.location.href= '/'
    // for (let i in arrKuki) {
    //   kuki.remove(arrKuki[i], { path: '/' })
    // }
  }

  handlePop = () => this.setState({ isOpen: !this.state.isOpen });

  handleClick = (val) => {
    this.setState({ isOpen: false, isOpenRes: false });
    this.props.changeTab(val);
  };

  commpMenuList = (addBarHide) => {
    const menus = [
      { id: "profile", label: "Profile Saya" },
      { id: "business", label: "Bisnis Saya" },
      { id: "history", label: "History" },
      { id: "favorite", label: "Favorit" },
      { id: "list", label: "List of Investment" },
      { id: "dividen", label: "Dividen" },
    ];
    return (
      <>
        <div className="boxsaldo">
          <img src={walletnav} alt="saldo" />
          <p className="nominal">
            Saldo <br /> <span>Rp 1500000</span>
          </p>
          <Link to="/topup">
            <Button>
              <i className="fas fa-plus-circle"></i> Top Up
            </Button>
          </Link>
        </div>
        <div className="menuslistpop">
          {addBarHide ? (
            <>
              <Link to="/how">How it Works</Link>
              <Link to="/about">About Us</Link>
            </>
          ) : null}
          <a href="/">Notifications</a>
          <a href="/" className="border-bottom">
            Invite Friends
          </a>
          {menus.map((res, i) => (
            <Link
              to="/profile"
              key={i}
              onClick={() => this.handleClick(res.id)}
            >
              {res.label}
            </Link>
          ))}
          <a href="/" className="border-top">
            Settings
          </a>
          <a href='#'
            onClick={this.handleLogout}
            style={{ cursor: "pointer", color: "#4CB5EF" }}
            >
            <b>Logout</b>
          </a>
        </div>
      </>
    );
  };

  responsiveMenuComp = () => (
    <div className="menus-pop-res">{this.commpMenuList(true)}</div>
  );

  closeModOtp = () => this.setState({ modalInputOtp: false });
  closeModEmail = () => this.setState({ modalInputEmail: false });

  otpAgain = () => {
    this.setState({
      // loading: true,
      completeOtp: false,
      counterStart: true,
      dateNow: Date.now(),
    });

    // API.resendOtp().then(res => {
    //     console.log(res)
    //     this.setState({loading: false})
    // }).catch(err => {
    //     console.log(err)
    //     this.setState({loading: false})
    // })
  };

  counterReset = () => this.setState({ counterResetAdd: this.state.counterResetAdd + 1 });

  render() {
    return (
      <div>
        <Loading onOpen={this.state.loading} />
        <ModalTemplate
          onOpen={this.state.modalInputOtp}
          // component ={()=>VerifyOtp(this.closeModOtp, ()=>this.setState({modalInputSecurePin : true}), this.counterReset, this.state.counterResetAdd)}
          component={() => <VerifyOtp close={this.closeModOtp} />}
        />

        <ModalTemplate
          onOpen={this.state.modalInputEmail}
          component={() => <VerifyEmail close={this.closeModEmail} />}
        />
        <nav>
          <div className="left">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <ul>
              <li>
                <Link to={kuki.get('isInvestorComplete') ?  "/company-list":"/investor-form-data-diri"}>Start Investing</Link>
              </li>
              <li>
                <Link to="/startup-form-data-diri">Get Funding</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="burger-wrap">
              <ModalTemplate
                onOpen={this.state.isOpenRes}
                onClose={() => this.setState({ isOpenRes: false })}
                component={this.responsiveMenuComp}
              />
              {kuki.get("auth") ? 
                <div style={{display : 'flex', alignItems : 'center'}}>
                <Badge className='mr-4' badgeContent={parseInt(localStorage.getItem('cartInvestxLength'))} color="secondary">
                  <Link to={parseInt(localStorage.getItem('cartInvestxLength')) !== 0?'/cart' : '#'} className='ml-4'>
                    <ShoppingCart />
                  </Link>
                </Badge> 
                <HamburgerMenu
                  isOpen={this.state.isOpenRes}
                  menuClicked={() =>
                    this.setState({ isOpenRes: !this.state.isOpenRes })
                  }
                  width={17}
                  height={12}
                  strokeWidth={1}
                  rotate={0}
                  color="black"
                  borderRadius={0}
                  animationDuration={0.3}
                  className="burger"
                />
                </div>
               : 
                <Link to="/login">
                  <Button style={butLogin} className="but-login">
                    Log In
                  </Button>
                </Link>
              }
            </div>
            <ul>
              <li>
                
                <NavLink activeClassName="nav-active" to="/how">
                  How it works
                </NavLink>
              </li>
              <li>
                
                <NavLink activeClassName="nav-active" to="/about">
                  About Us
                </NavLink>
              </li>
              {kuki.get("auth") ? 
              <>
              <Badge badgeContent={parseInt(localStorage.getItem('cartInvestxLength'))} color="secondary">
                  <Link to={parseInt(localStorage.getItem('cartInvestxLength')) !== 0?'/cart' : '#'} className='ml-4'>
                    <ShoppingCart />
                  </Link>
              </Badge>

                <li className="">
                  <ClickAwayListener
                    onClickAway={() => this.setState({ isOpen: false })}
                  >
                    <div className="popovercus">
                      <Link to="/profile" className="linktoprof">
                        <img
                          className="ava"
                          src="https://pbs.twimg.com/profile_images/1108355467888259072/gxh4yKYO.png"
                          alt="ava"
                        />
                        <span>{kuki.get("full_name")}</span>
                      </Link>
                      <i
                        onClick={this.handlePop}
                        className="ml-3 fas fa-chevron-down"
                        style={{ color: "#A5A5A5" }}
                      ></i>
                      {this.state.isOpen ? (
                        <div className="menus-pop">{this.commpMenuList()}</div>
                      ) : null}
                    </div>
                  </ClickAwayListener>
                </li>
                </>
              :
                <li>
                  <Link to="/login">
                    <Button style={butLogin} className="but-login">
                      Log In
                    </Button>
                  </Link>
                </li>
              }
            </ul>
          </div>
        </nav>
        {!this.props.removePopUp ? (
          <>
            {this.state.statusId === 1 ? (
              <div className="drop">
                Hi {kuki.get("full_name")}, Anda belum melakukan verifikasi kode
                OTP.
                <span onClick={() => this.setState({ modalInputOtp: true })}>
                  
                  Verifikasi sekarang
                </span>
              </div>
            ) : this.state.statusId === 2 ? (
              <div className="drop">
                Hi {kuki.get("full_name")}, Anda belum melakukan verifikasi
                email, jika email verifikasi belum di terima silahkan verifikasi
                ulang
                <span onClick={() => this.setState({ modalInputEmail: true })}>
                  
                  Verifikasi ulang sekarang
                </span>
              </div>
            ) : this.state.statusId === 3 ? (
              <div className="drop">
                Hi {kuki.get("full_name")}! Anda belum mengisi data. Silakan
                lengkapi data anda untuk memulai Investasi atau mendapatkan
                funding. <Link to="/select-form">Isi data sekarang</Link>
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (data) => dispatch({ type: "CHANGE_TAB", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
