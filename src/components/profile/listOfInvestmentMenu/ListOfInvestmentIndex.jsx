import React, { Component } from "react";
import API from "../../../api";

class ListOfInvestmentIndex extends Component {
  state = {
    data: {
      results: [],
      fundraise: {},
      status: {}
    }
  }

  componentDidMount() {
    API.getInvestment().then((res) => {
      this.setState({
        data: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const list = this.state.data.results
    console.log(list)
    return (
      <div className="list-of-investment-menu">
        <p className="title">LIST OF INVESTMENT</p>
        <hr />
        {
          list.map((result,idx) => (
            // console.log(result.fundraise)
            <div className="card-item col" key={idx}>
              <div className="row ">
                <div className="col-md-6 col-8">
                  <div className="row justify-space-between">
                    <div>
                      <img
                        src={result.fundraise.cover}
                        alt="company"
                        className="company-image"
                      />
                    </div>
                    <div>
                      <p className="company-name">
                        {result.fundraise.name}
                      </p>
                      <p className="company-location">
                        <i class="fas fa-map-marker-alt location-icon"></i>
                        <span className="location-name">{result.fundraise.regency}</span>
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
                  <p className="value">{result.shares}</p>
                </div>
                <div className="col-md col-6 detail-value">
                  <p className="name text-bold">Invested {result.fundraise.end_date}</p>
                  <p className="value">Rp. {result.fundraise.amount_sold}</p>
                </div>
                <div className="col-md col-6 detail-value">
                  <p className="name">Status</p>
                  <p className="status-name">
                    {result.status.approved}
                  </p>
                </div>
                <div className="col-md col-6 detail-value no-border">
                  <p className="name">Estimasi dalam 1 tahun</p>
                  <p className="value">Rp. {result.fundraise.min_invest_amount}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ListOfInvestmentIndex;
