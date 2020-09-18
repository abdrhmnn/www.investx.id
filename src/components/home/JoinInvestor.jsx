import React, { Component } from 'react';
import logos from '../../images/joinNow/logos.svg'
import people from '../../images/joinNow/people.svg'
import top from '../../images/top.svg'

import Home from "./Home"

import { Link } from 'react-router-dom'

class JoinInvestor extends Component {
    render() {
        return (
            <div className="join-investor">
                <h2>Invest in Highly vetted early-staged companies</h2><br />
                <button type='button'>Become an Investor</button>
                <div className="desc"><br />Have an Account? <a href="#">Log in</a></div>
                <div className="top"><a href="#top"><button><img src={top}></img></button></a></div>
            </div>
        );
    }
}
export default JoinInvestor;