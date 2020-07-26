import React, { Component } from 'react';
// import HamburgerMenu from 'react-hamburger-menu'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state={
        open : false
    }


    render() {
        return (
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
                    <img src={logo} alt="logo"/>
                    <ul>
                        <li><Link>Start Investing</Link> </li>
                        <li><Link>Get Funding</Link> </li>
                    </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li> <Link>How it works</Link> </li>
                            <li> <Link>About Us</Link> </li>
                            <li> <Link>FAQ</Link> </li>
                            <li> <Link to='/login'><button className="but">Sign In</button></Link> </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Navbar;