import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import bca from "../../images/withdraw/bca.svg";


import PropTypes from 'prop-types';
import { Slide } from "react-reveal";
import withDraw from './withDraw'

class editNominal extends Component {
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

                                    <img src={bca} alt="bca" />
                                    <br />
                                </div>
                            )}
                            <br />
                        </div>
                    )
                    )
                }
            </>
        );
    }
}


withDraw.propTypes = {
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
                first: true,
                toggle: this.setToggleMethods,
                title: 'TRANSFER REKENING',
                logos: [
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
                        <input value="100.000.000"
                        />
                    </div>
                </div>

                <p className="box-form-title">Pilih Bank Transfer</p>
                <div className="payment-methods box-form-data">
                    {
                        this.state.toggleMethods ?
                            <Slide bottom>
                                <withDraw methods={methods} />
                            </Slide>
                            : <withDraw methods={[methods[0]]} />
                    }
                </div>

            

                <div className="foot-data-diri">
                    <div className="agreement"></div>
                    <button type="submit" form="#">
                        Lanjutkan
                    </button>
                </div>
            </div>
        );
    }
}

export default editNominal;
