import React, { Component } from "react";

class ListOfInvestmentIndex extends Component {
    renderCardItem = ({
        companyImage = "https://placeimg.com/640/480/tech",
        companyName = "MOONFAB",
        companyLocation = "Jakarta",
        totalStock = "7",
        investedValue = "1.234.500",
        status = false,
        oneYearEst = "1.234.500",
    }) => {
        return (
            <>
                <div className="card-item col">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="row justify-space-between">
                                <div>
                                    <img
                                        src={companyImage}
                                        alt="company"
                                        className="company-image"
                                    />
                                </div>
                                <div>
                                    <p className="company-name">
                                        {companyName}
                                    </p>
                                    <p className="company-location">
                                        <i class="fas fa-map-marker-alt location-icon"></i>
                                        <span className="location-name">
                                            {companyLocation}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 invest-status">
                            <p className="view-detail">View Detail</p>
                        </div>
                    </div>
                    <div className="row invest-detail">
                        <div className="col detail-value">
                            <p className="name">Jumlah saham</p>
                            <p className="value">{totalStock}</p>
                        </div>
                        <div className="col detail-value">
                            <p className="name">Invested 12/03/2020</p>
                            <p className="value">Rp. {investedValue}</p>
                        </div>
                        <div className="col detail-value">
                            <p className="name">Status</p>
                            <p className="status-name">
                                {status ? "Collecting" : "Submitted"}
                            </p>
                        </div>
                        <div className="col detail-value no-border">
                            <p className="name">Estimasi dalam 1 tahun</p>
                            <p className="value">Rp. {oneYearEst}</p>
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

                {this.renderCardItem({})}
            </div>
        );
    }
}

export default ListOfInvestmentIndex;
