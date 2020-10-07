import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import { connect } from 'react-redux';

import logo from '../../images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { Button, ClickAwayListener } from "@material-ui/core";
import kuki from '../../helpers/cookie'
import walletnav from '../../images/walletnav.svg'
import ModalTemplate from './ModalTemplate';

class Navbar extends Component {
    state={
        isOpen : false,
        isOpenRes : false,
        statusId : null,
    }
    componentDidMount(){
        const {phone, email} = kuki.get('status') || {phone : false, email : false}
        const isAuth = kuki.get('auth')
        if (!phone && isAuth ) {
            this.setState({statusId : 1})
        }
        if (!email && isAuth ) {
            this.setState({statusId : 2})
        }
        if (!email && !phone  && isAuth ) {
            this.setState({statusId : 1})
        }
    }

    handlePop = ()=> this.setState({isOpen : !this.state.isOpen})

    handleClick = (val)=>{
       this.setState({isOpen : false})
       this.props.changeTab(val)
    } 

    handleClickRes = (val)=>{
        this.setState({isOpenRes : false})
        this.props.changeTab(val)
     } 

    commpMenuList = ()=>(
        <>
        <div className="boxsaldo">
            <img src={walletnav} alt="saldo"/>
            <p className="nominal">Saldo  <br/> <span>Rp 1500000</span> </p>
            <Button>
            <i className="fas fa-plus-circle"></i> Top Up
            </Button>
        </div>
        <div className='menuslistpop'>
            <a href='/'>Notifications</a>
            <a href='/' className='border-bottom'>Invite Friends</a>
            <Link to='/profile'  onClick={()=> this.handleClick('profile')}>Profile Saya</Link>
            <Link to='/profile'  onClick={()=> this.handleClick('business')}>Bisnis Saya</Link>
            <Link to='/profile'  onClick={()=> this.handleClick('history')}>History</Link>
            <Link to='/profile'  onClick={()=> this.handleClick('favorite')}>Favorit</Link>
            <Link to='/profile'  onClick={()=> this.handleClick('list')}>List of Investment</Link>
            <Link to='/profile'  onClick={()=> this.handleClick('dividen')} className='border-bottom'>Dividen</Link>
            <a href='/'>Settings</a>
            <a href='/' style={{cursor : 'pointer', color:'#4CB5EF', }}
            onClick={()=>{
                kuki.remove('auth')
                kuki.remove('status')
                kuki.remove('token')
                kuki.remove('full_name')
                kuki.remove('email')
                kuki.remove('phone_number')
            }}> <b>Logout</b></a>
        </div>
        </>
    )

    responsiveMenuComp = ()=>(
        <div className='menus-pop-res'>
            {this.commpMenuList()}
        </div>
    )

    render() {
        return (
            <div>
                <ModalTemplate onOpen={this.state.isOpenRes} onClose={()=> this.setState({isOpenRes : !this.state.isOpenRes})} component={this.responsiveMenuComp} />
                  <nav>
                    <div className="left">
                    <HamburgerMenu
                        isOpen={this.state.isOpenRes}
                        menuClicked={()=> this.setState({isOpenRes : !this.state.isOpenRes})}
                        width={17}
                        height={12}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.3}
                        className='burger'
                    />
                    <Link to='/'>
                        <img src={logo} alt="logo"/>
                    </Link>
                    <ul>
                        <li><Link to='/'>Start Investing</Link> </li>
                        <li><Link to='/'>Get Funding</Link> </li>
                    </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li> <NavLink activeClassName='nav-active' to='/how'>How it works</NavLink> </li>
                            <li> <NavLink activeClassName='nav-active' to='/about'>About Us</NavLink> </li>
                            <li> <Link to='/'>FAQ</Link> </li>
                            {
                               kuki.get('auth') ? 
                                <li className=''>
                                    <ClickAwayListener className='awaylistener' onClickAway={()=>this.setState({isOpen : false})}>
                                        <div className='popovercus'>
                                            <Link to='/profile' className='linktoprof'>
                                                <img className='ava' src='https://pbs.twimg.com/profile_images/1108355467888259072/gxh4yKYO.png' alt="ava"/> <span>{kuki.get('full_name')}</span>  
                                            </Link>
                                            <i onClick={this.handlePop} className="ml-3 fas fa-chevron-down" style={{color: '#A5A5A5'}}></i>
                                            {this.state.isOpen ?<div className='menus-pop'>{this.commpMenuList()}</div>  : null}
                                        </div>
                                    </ClickAwayListener>
                                </li>
                                :
                                <li> <Link to='/login'><Button className="but-login">Log In</Button></Link> </li>
                            }
                        </ul>
                    </div>
                </nav>
                    {
                        this.state.statusId === 1?
                        <div className="drop">Hi Maria, Anda belum melakukan verifikasi kode OTP. <Link to='/otp'> Verifikasi sekarang</Link> </div>
                        : this.state.statusId === 2?
                        <div className="drop">Hi Maria, Anda belum melakukan verifikasi email. <span onClick={this.props.onModal}> Verifikasi sekarang</span> </div>
                        :this.state.statusId === 3?
                        <div className="drop">Hi Maria! Anda belum mengisi data. Silakan lengkapi data anda untuk memulai Investasi atau mendapatkan funding. <Link to='/select-form'>Isi data sekarang</Link> </div>
                        : null
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        // number : state.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (data) => dispatch({type:'CHANGE_TAB' , data: data})
        }
}




export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
