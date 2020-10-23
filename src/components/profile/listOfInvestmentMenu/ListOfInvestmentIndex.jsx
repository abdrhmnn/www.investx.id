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
                        <div className="col-md-6 col-8">
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
                        <div className="col-md-6 col-4 invest-status">
                            <p className="view-detail">View Detail</p>
                        </div>
                    </div>
                    <div className="row invest-detail">
                        <div className="col-md col-6 detail-value">
                            <p className="name">Jumlah saham</p>
                            <p className="value">{totalStock}</p>
                        </div>
                        <div className="col-md col-6 detail-value">
                            <p className="name">Invested 12/03/2020</p>
                            <p className="value">Rp. {investedValue}</p>
                        </div>
                        <div className="col-md col-6 detail-value">
                            <p className="name">Status</p>
                            <p className="status-name">
                                {status ? "Collecting" : "Submitted"}
                            </p>
                        </div>
                        <div className="col-md col-6 detail-value no-border">
                            <p className="name">Estimasi dalam 1 tahun</p>
                            <p className="value">Rp. {oneYearEst}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    render() {
        const investments = [
            {
                companyImage: "https://placeimg.com/640/480/tech",
                companyName: "MOONFAB",
                companyLocation: "Jakarta",
                totalStock: "7",
                investedValue: "1.234.500",
                status: false,
                oneYearEst: "1.234.500",
            },
            {
                companyImage: "https://placeimg.com/640/480/tech",
                companyName: "KANZEN",
                companyLocation: "Bandung",
                totalStock: "5",
                investedValue: "1.234.500",
                status: true,
                oneYearEst: "1.234.500",
            },
            {
                companyImage: "https://placeimg.com/640/480/tech",
                companyName: "ASYNC",
                companyLocation: "Bandung",
                totalStock: "6",
                investedValue: "1.234.500",
                status: true,
                oneYearEst: "1.234.500",
            },
        ];

        return (
            <div className="list-of-investment-menu">
                <p className="title">LIST OF INVESTMENT</p>
                <hr />

                {investments.map((data) => this.renderCardItem(data))}
            </div>
        );
    }
}

export default ListOfInvestmentIndex;
