import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import bca from "../../images/withdraw/bca.svg";
import plus from "../../images/plus.svg";

import { Box, Button } from "@material-ui/core";


import formBank from "./formBank";
import PropTypes from 'prop-types';
import { Slide } from "react-reveal";


class PaymentMethod extends Component {
    render() {
        const { methods } = this.props;
        return (
            <>
                {
                    methods.map((method, i) => (
                        <div key={i}>
                            <div className="d-flex justify-content-between">
                                <div className="title-alt">{method.title}</div>
                                {methods.length === 1 ?
                                    (
                                        <span className="more-transfer-method" onClick={method.toggle}>
                                            Ganti Bank<i className="fas fa-chevron-down ml-2"></i>
                                        </span>
                                    ) : <div></div>
                                }
                            </div>
                            <p className="subtitle">{method.subtitle}</p>
                            {method.logos.map((value, j) =>
                                <div className="radio-bank" key={j}>
                                    <input
                                        type="radio"
                                        name="bank"
                                    />

                                    <img src={value} alt="bca" />
                                    <div style={{ position: "absolute", padding: "6px", border: "2px solid #2388D1", color: "#2388D1", borderRadius: "30px", fontSize: "10pt", paddingLeft: "15px", paddingRight: "15px", marginLeft: "420px" }}>
                                        <span>NEW</span>
                                    </div>
                                    <br />
                                </div>
                            )}
                            <br /> <br /> <br />
                            <div className="formBanking" style={{ cursor: "pointer" }}>
                                <img src={plus} />
                                <span style={{ marginLeft: "9px", color: "#0288D1", fontWeight: "bolder" }}>Tambah Bank</span>
                            </div>
                        </div>
                    )
                    )
                }
            </>
        );
    }
}


PaymentMethod.propTypes = {
    methods: PropTypes.arrayOf(
        PropTypes.exact({
            first: PropTypes.bool,
            toggle: PropTypes.func,
            title: PropTypes.string,
            subtitle: PropTypes.string,
            logos: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
};




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
                <p className="title">Top Up</p>

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
                    {
                        this.state.toggleMethods ?
                            <Slide bottom>
                                <PaymentMethod methods={methods} />
                            </Slide>
                            : <PaymentMethod methods={[methods[0]]} />
                    }
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
