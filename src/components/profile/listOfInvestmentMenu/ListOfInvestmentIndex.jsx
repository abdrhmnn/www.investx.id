import { Button } from "@material-ui/core";
import React, { Component } from "react";

class ListOfInvestmentIndex extends Component {
    renderCardItem = () => {
        return (
            <>
                <div className="card-item col">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div>
                                    <img
                                        src="https://placeimg.com/640/480/tech"
                                        alt="company"
                                        className="company-image"
                                    />
                                </div>
                                <div>
                                    <p className="company-name">MOONFAB</p>
                                    <p className="company-location">
                                        <i class="fas fa-map-marker-alt location-icon"></i>
                                        <span className="location-name">
                                            Jakarta
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 invest-status">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="status-name">On Proccess</p>
                                    <p className="deadline">
                                        Ended in 30 Days left
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <Button
                                        style={{
                                            marginRight: "24px",
                                            marginLeft: "18px",
                                        }}
                                        variant="text"
                                        classes={{
                                            root: "view-detail",
                                        }}
                                    >
                                        View Detail
                                    </Button>

                                    <svg
                                        className="show-more"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row invest-detail">
                        <div className="col detail-value">
                            <p className="name">Jumlah saham</p>
                            <p className="value">7</p>
                        </div>
                        <div className="col detail-value">
                            <p className="name">Invested 12/03/2020</p>
                            <div className="row justify-content-around">
                                <p className="value">Rp.</p>
                                <p className="value">1.234.500</p>
                            </div>
                        </div>
                        <div className="col detail-value">
                            <p className="name">Deviden</p>
                            <div className="row justify-content-around">
                                <p className="value">5%</p>
                                <p className="value">1.234.500</p>
                            </div>
                        </div>
                        <div className="col detail-value no-border">
                            <p className="name">Estimasi dalam 1 tahun</p>
                            <div className="row justify-content-around">
                                <p className="value">Rp.</p>
                                <p className="value">1.234.500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    render() {
        return (
            <div className="list-of-investment-menu">
                <p className="title">List Of Investment</p>
                <hr />

                {this.renderCardItem()}
            </div>
        );
    }
}

export default ListOfInvestmentIndex;
