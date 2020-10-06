import React, { Component } from 'react';
// import HamburgerMenu from 'react-hamburger-menu'
import logo from '../../images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { Button, Menu, MenuItem, Fade, ClickAwayListener } from "@material-ui/core";
import kuki from '../../helpers/cookie'
import walletnav from '../../images/walletnav.svg'

class Navbar extends Component {
    state={
        isOpen : false,
        statusId : 2,
    }
    componentDidMount(){
        if (window.location.pathname === '/') {
        }else{
            this.setState({statusId : 0})
        }
    }

    handlePop = ()=> this.setState({isOpen : !this.state.isOpen})

    render() {
        return (
            <div>
                  <nav>
                    <div className="left">
                    {/* <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={()=> this.setState({open : !this.state.open})}
                        width={17}
                        height={12}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.3}
                        className='burger'
                    /> */}
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
                                <li className='popovercus'>
                                    <ClickAwayListener onClickAway={()=>this.setState({isOpen : false})}>
                                        <div className='popovercus'>
                                            <p className="m-0" onClick={this.handlePop}>
                                                <img className='ava' src='https://pbs.twimg.com/profile_images/1108355467888259072/gxh4yKYO.png' alt="ava"/> Kemal <i className="ml-2 fas fa-chevron-down"></i>
                                            </p>
                                            {this.state.isOpen ? (
                                            <div className='menus-pop'>
                                                <div className="boxsaldo">
                                                    <img src={walletnav} alt="saldo"/>
                                                    <p className="nominal">saldo  <br/> <span>Rp 1500000</span> </p>
                                                    <Button>
                                                    <i className="fas fa-plus-circle"></i> Top Up
                                                    </Button>
                                                </div>
                                                <ul className='menuslistpop'>
                                                    <li>Notifications</li>
                                                    <li className='border-bottom'>Invite Friends</li>
                                                    <li>Profile Saya</li>
                                                    <li>Bisnis Saya</li>
                                                    <li>History</li>
                                                    <li>Favorit</li>
                                                    <li>List of Investment</li>
                                                    <li className='border-bottom'>Dividen</li>
                                                    <li>Settings</li>
                                                    <li style={{cursor : 'pointer', color:'#4CB5EF', }}
                                                    onClick={()=>{
                                                        kuki.remove('auth')
                                                        kuki.remove('status')
                                                        kuki.remove('token')
                                                        window.location.href = '/'
                                                    }}> <b>Logout</b></li>
                                                </ul>
                                            </div>
                                            ) : null}
                                        </div>
                                    </ClickAwayListener>
                                </li>
                                :
                                <li> <Link to='/login'><Button className="but-login">Log In</Button></Link> </li>
                            }
                        </ul>
                    </div>
                </nav>
                    {/* {
                        this.state.statusId === 1?
                        <div className="drop">Hi Maria, Anda belum melakukan verifikasi kode OTP. <Link to='/otp'> Verifikasi sekarang</Link> </div>
                        : this.state.statusId === 2?
                        <div className="drop">Hi Maria, Anda belum melakukan verifikasi email. <span onClick={this.props.onModal}> Verifikasi sekarang</span> </div>
                        :this.state.statusId === 3?
                        <div className="drop">Hi Maria! Anda belum mengisi data. Silakan lengkapi data anda untuk memulai Investasi atau mendapatkan funding. <Link to='/select-form'>Isi data sekarang</Link> </div>
                        : null
                    } */}
            </div>
        );
    }
}

export default Navbar;