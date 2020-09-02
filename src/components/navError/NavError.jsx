import React, { Component } from 'react';
// import HamburgerMenu from 'react-hamburger-menu'
import logo from '../../images/logo.svg'
import "../../styles/NavError.scss"
import { Link, NavLink } from 'react-router-dom'

class NavError extends Component {
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
                      
                    </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li> <Link to='/login'><button className="but">Sign In</button></Link> </li>
                            <li> <Link className="en">EN</Link> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavError;