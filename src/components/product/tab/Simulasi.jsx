import React, { Component } from "react";
import simulasiIcon from "../../../images/tabDetailCompany/simulasiIcon.svg";
import { Fab } from "@material-ui/core";
import { connect } from "react-redux";
import helper from "../../../helpers/helper";


class Simulasi extends Component {
  state = {
    count: 1,
  };
  render() {
    const {
      // regency, 
      // amount, 
      // progress, 
      // min_invest_amount, 
      // status, 
      // end_date, 
      // investor_count, 
      price_per_share, 
      // shares_remaining, 
      // shares,
      min_invest_share
    } = this.props.dataDetail
    return (
      <div className="simulasi-tab">
        <div className="title">
          <img src={simulasiIcon} alt="finan-icon" />
          Simulasi Investasi
        </div>

        <div className="sim-count">
          <div className="cal">
            <p className="lab">Masukan Jumlah Lembar Saham</p>
            <div className="inp-count">
              <Fab
                onClick={() => this.setState({ count: this.state.count - 1 })}
                disabled={this.state.count === 1}
              >
                -
              </Fab>
              <input type="number"  onChange={()=>{}} value={this.state.count * (min_invest_share)} />
              <Fab
                onClick={() => this.setState({ count: this.state.count + 1 })}
              >
                +
              </Fab>
            </div>
          </div>

          <div className="val-inv">
            <p className="lab">Nilai Investasi</p>
            <p className="right">{helper.idr(Math.round((price_per_share * min_invest_share) * this.state.count))}</p>
          </div>
        </div>

        <p className="lab">Keuntungan / tahun berdasarkan historis</p>
        <div className="val-sim">
          <p className="left">Rp. 1.256.097,56</p>
          s/d
          <p className="right">Rp. 1.546.987,56</p>
        </div>

        <p className="lab">Dividen yield (%) / tahun berdasarkan historis</p>
        <div className="val-sim">
          <p className="left">25</p>
          s/d
          <p className="right">30</p>
        </div>

        <p className="nb pt-5 mb-0" style={{ fontSize: 14 }}>
          *performa bisnis masa lalu tidak mencerminkan kinerja masa depan
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataDetail :  state.dataDetail,
    dataDetailCompany :  state.dataDetailCompany,
    dataDetailTags :  state.dataDetailTags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendDetail: (data) => {
      const action = { type: "POST_DETAIL", data : data };
      dispatch(action);
    },
    sendDetailCompany: (data) => {
      const action = { type: "POST_DETAIL_COMPANY", data : data };
      dispatch(action);
    },
    sendDetailTags: (data) => {
      const action = { type: "POST_DETAIL_TAGS", data : data };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Simulasi);

