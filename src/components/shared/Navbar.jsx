import React, { Component } from 'react';
// import HamburgerMenu from 'react-hamburger-menu'
import logo from '../../images/logo.svg'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    state={
        open : false,
        statusId : 2
    }
    componentDidMount(){
        if (window.location.pathname === '/otp') {
            this.setState({statusId : 0})
        }
    }


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
                        <li><Link>Start Investing</Link> </li>
                        <li><Link>Get Funding</Link> </li>
                    </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li> <NavLink activeClassName='nav-active' to='/how'>How it works</NavLink> </li>
                            <li> <NavLink activeClassName='nav-active' to='/about'>About Us</NavLink> </li>
                            <li> <Link>FAQ</Link> </li>
                            <li> <Link to='/login'><button className="but">Sign In</button></Link> </li>
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

export default Navbar;