import React, { Component } from "react";

import logo from "../../images/logo-white-footer.svg";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="left col-md-5">
              <img src={logo} alt="logo" />
            </div>

            <div className="col-md-7">
              <div className="row">
                <div className="col-md-3 col-6">
                  <header>About</header>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/">Equity Crowdfunding 101</Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                    <li>
                      <Link to="/company-list">Invest in InvestX</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <header>Companies</header>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Raise Capital</Link>
                    </li>
                    <li>
                      <Link to="/how">How it Works</Link>
                    </li>
                    <li>
                      <Link to="/">Why InvestX</Link>
                    </li>
                    <li>
                      <Link to="/">Founder FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Refer Founders</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <header>Investor</header>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Start Investing</Link>
                    </li>
                    <li>
                      <Link to="/">How Investing Works</Link>
                    </li>
                    <li>
                      <Link to="/">Investor FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Earn 10% Bonus Shares</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <header>Legal/Contact</header>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Terms of Use</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Disclaimer</Link>
                    </li>
                    <li>
                      <Link to="/">Annual Reports</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
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
