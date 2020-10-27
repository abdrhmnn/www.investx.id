import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import bca from "../../images/withdraw/bca.svg";
import plus from "../../images/plus.svg";

import { Box, Button } from "@material-ui/core";


import formBank from "./formBank";
import PaymentMethod from "../payment/PaymentMethod";
import PropTypes from 'prop-types';
import { Slide } from "react-reveal";


class MethodTopUp extends Component {
    state = {
        toggleMethods: false,
    }

    setToggleMethods = () => {
        this.setState({
            toggleMethods: !(this.state.toggleMethods),
        })
    }

    render() {
        const methods = [
            {
                title: 'TRANSFER REKENING',

                logos: [
                    bca,
                    bca,
                    bca,
                ]
            },
            {
                title: 'TRANSFER REKENING',

                logos: [
                    bca,
                    bca,
                    bca,
                ]
            },
        ]
        return (
            <div className="all-forms-style">
                <div className="bg">
                    <div className="bg-round"></div>
                </div>
                <Link to="/select-form/">
                    <div className="back-button">
                        <img src={arrowback} alt="" />
                    </div>
                </Link>
                <div className="logo-invest">
                    <img src={logo} alt="" />
                </div>
                
                <p className="title">WITHDRAW</p>

                <div className="box-form-data">
                    <div className="title-alt">Jumlah Nominal</div>
                    <div className="input-border-underline">
                        <input
                            type="number"
                            name="username"
                        />
                    </div>
                </div>

                <p className="box-form-title">Pilih Bank Transfer</p>
                <div className="payment-methods box-form-data">
                    <PaymentMethod />
                </div>


                <div className="foot-data-diri">
                    <p className="agreement"></p>
                    <Button type='submit' form='datadiri'>LANJUTKAN</Button>
                </div>
            </div>
        );
    }
}

export default MethodTopUp;
