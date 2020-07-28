import React, { Component } from 'react';

import logo from '../../images/logo-white-footer.svg'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render(){
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="left col-md-5">
                            <img src={logo} alt="logo"/>
                        </div>

                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-3 col-6">
                                    <header>About</header>
                                    <ul className="list-unstyled">
                                        <li><Link>Our Team</Link></li>
                                        <li><Link>Equity Crowdfunding 101</Link></li>
                                        <li><Link>Blog</Link></li>
                                        <li><Link>Careers</Link></li>
                                        <li><Link>Invest in InvestX</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-6">
                                    <header>Companies</header>
                                        <ul className="list-unstyled">
                                            <li><Link>Raise Capital</Link></li>
                                            <li><Link>How it Works</Link></li>
                                            <li><Link>Why InvestX</Link></li>
                                            <li><Link>Founder FAQ</Link></li>
                                            <li><Link>Refer Founders</Link></li>
                                        </ul>
                                </div>
                                <div className="col-md-3 col-6">
                                    <header>Investor</header>
                                        <ul className="list-unstyled">
                                            <li><Link>Start Investing</Link></li>
                                            <li><Link>How Investing Works</Link></li>
                                            <li><Link>Investor FAQ</Link></li>
                                            <li><Link>Earn 10% Bonus Shares</Link></li>
                                        </ul>
                                </div>
                                <div className="col-md-3 col-6">
                                    <header>Legal/Contact</header>
                                        <ul className="list-unstyled">
                                            <li><Link>Terms of Use</Link></li>
                                            <li><Link>Privacy Policy</Link></li>
                                            <li><Link>Disclaimer</Link></li>
                                            <li><Link>Annual Reports</Link></li>
                                            <li><Link>Contact Us</Link></li>
                                        </ul>
                                </div>
                            </div>
                            
                        </div>   
                    </div>
                </div>
                
            </footer>
        );
    }
  }
export default Footer;