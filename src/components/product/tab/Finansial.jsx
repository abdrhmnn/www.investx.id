import React, { Component } from "react";
import finan from "../../../images/tabDetailCompany/finan.svg";
import { connect } from "react-redux";


class Finansial extends Component {
  render() {
    console.log(this.props.dataDetail, 'PROPS TAB FINANSIAL')
    const {amount,amount_remaining, amount_sold, shares_remaining, shares, shares_sold} = this.props.dataDetail

    // const finansialTabData = {
    //   shares : shares,
    //   shares_remaining : shares_remaining,
    //   shares_sold : shares_sold,

    //   amount : amount,
    //   amount_remaining : amount_remaining,
    //   amount_sold : amount_sold,
    // }

    // const {} = this.props.finansialTabData
    return (
      <div className="finansial-tab">
        <div className="title">
          <img src={finan} alt="finan-icon" />
          Finansial
        </div>
        <p className="lab">Total Saham</p>
        <div className="val-fin">
          <p className="saham">Rp. {amount}</p>=
          <p className="lembar">{shares} lembar</p>
        </div>

        <p className="lab">Saham Terjual</p>
        <div className="val-fin">
          <p className="saham">Rp. {amount_sold}</p>=
          <p className="lembar">{shares_sold} lembar</p>
        </div>

        <p className="lab">Saham Tersisa</p>
        <div className="val-fin">
          <p className="saham">Rp. {amount_remaining}</p>=
          <p className="lembar">{shares_remaining} lembar</p>
        </div>

        <hr />

        <p className="lab">Total Keuntungan per Tahun berdasarkan historis</p>
        <div className="val-fin">
          <p className="saham">Rp 850.000.000 - 906.000.000</p>
        </div>

        <p className="lab">Jangka waktu pembagian keuntungan dari pengelola</p>
        <div className="val-fin">
          <p className="saham">3 Bulan</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataDetail :  state.dataDetail,
    // dataDetailCompany :  state.dataDetailCompany,
    // dataDetailTags :  state.dataDetailTags,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendDetail: (data) => {
//       const action = { type: "POST_DETAIL", data : data };
//       dispatch(action);
//     },
//     sendDetailCompany: (data) => {
//       const action = { type: "POST_DETAIL_COMPANY", data : data };
//       dispatch(action);
//     },
//     sendDetailTags: (data) => {
//       const action = { type: "POST_DETAIL_TAGS", data : data };
//       dispatch(action);
//     },
//   };
// };

export default connect(mapStateToProps, ()=>{})(Finansial);


// export default Finansial;
