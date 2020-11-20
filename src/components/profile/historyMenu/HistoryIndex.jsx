import React, { Component } from "react";
import penarikanicon from "../../../images/profile/penarikanicon.svg";
import topupicon from "../../../images/profile/topupicon.svg";
import pendanaanicon from "../../../images/profile/pendanaanicon.svg";
import Select from "react-select";

class HistoryIndex extends Component {
  state = {
    objListHistories: [
      {
        type: "pendanaan",
        id: 0,
        date: "10/10/2020",
        time: "12:34 PM",
        nominal: 200000,
        lembar: 20,
        company: "Tenassounds",
        status: "success",
      },
      {
        type: "pendanaan",
        id: 2,
        date: "10/10/2020",
        time: "12:34 PM",
        nominal: 200000,
        lembar: 20,
        company: "Tenassounds",
        status: "return",
      },
      {
        type: "pendanaan",
        id: 3,
        date: "10/10/2020",
        time: "12:34 PM",
        nominal: 200000,
        lembar: 20,
        company: "Tenassounds",
        status: "canceled",
      },
      {
        type: "pendanaan",
        id: 3,
        date: "10/10/2020",
        time: "12:34 PM",
        nominal: 200000,
        lembar: 20,
        company: "Tenassounds",
        status: "waiting",
      },

      {
        type: "penarikan",
        id: 1,
        date: "10/10/2020",
        time: "12:34 PM",
        nominal: 200000,
        bank: "BCA",
        rek: "12345444",
        status: "waiting",
      },

      {
        type: "topup",
        id: 4,
        date: "10/10/2020",
        time: "12:34 PM",
        nominal: 200000,
        bank: "BCA",
        rek: "123434344",
        status: "reject",
      },
      {
        type: "topup",
        id: 4,
        date: "10/10/2020",
        time: "12:34 PM",
        nominal: 200000,
        bank: "BCA",
        rek: "123434344",
        status: "success",
      },
    ],
  };
  listComp = () => {
    return this.state.objListHistories.map((res, i) => (
      <div className="listhistory" key={i}>
        <p className="date ">
          {res.date} <br />
          {res.time}
        </p>
        <div
          className="boxinfo"
          style={{
            backgroundColor:
              res.type === "pendanaan"
                ? "#FFFDE7"
                : res.type === "penarikan"
                ? "#EAF8FF"
                : res.type === "topup"
                ? "#F3FFE6"
                : null,
          }}
        >
          {/* <img className='his-logo' src="https://placeimg.com/640/480/tech" alt="logo"/> */}
          {res.type === "pendanaan" ? (
            <p className="desc">
              {" "}
              <img src={pendanaanicon} alt="icon" /> Melakukan pendanaan{" "}
              <span>Rp. {res.nominal} </span> untuk{" "}
              <span>{res.lembar} lembar</span> saham <span>{res.company}</span>{" "}
            </p>
          ) : res.type === "penarikan" ? (
            <p className="desc">
              {" "}
              <img src={penarikanicon} alt="icon" /> Penarikan dana{" "}
              <span>Rp. {res.nominal} </span> ke <span>{res.bank} </span> nomor
              rekening <span>{res.rek}</span>{" "}
            </p>
          ) : res.type === "topup" ? (
            <p className="desc">
              <img src={topupicon} alt="icon" /> Top up sebesar{" "}
              <span>Rp. 1,500,000 </span> melalui <span>{res.bank}</span> dari
              rekening <span>{res.rek}</span>{" "}
            </p>
          ) : null}
        </div>
        <p className="status-his">
          <span className="lab-his">Status</span> <br />
          {res.status === "success" ? (
            <span style={{ color: "#7ED321" }}>Berhasil</span>
          ) : res.status === "waiting" ? (
            <span style={{ color: "#FFB93E" }}>Menunggu Pembayaran</span>
          ) : res.status === "return" ? (
            <span style={{ color: "#3E80FF" }}>Dikembalikan</span>
          ) : res.status === "canceled" ? (
            <span style={{ color: "#FD6262" }}>Dibatalkan</span>
          ) : res.status === "reject" ? (
            <span style={{ color: "#FF2E2E" }}>Ditolak</span>
          ) : null}
        </p>
      </div>
    ));
  };
  render() {
    const optionsTransaction = [
      { value: "", label: "Semua" },
      { value: "topup", label: "Topup" },
      { value: "withdraw", label: "Withdraw" },
      { value: "pembelian", label: "Pembelian" },
    ];

    const optionsStatus = [
      { value: "", label: "Semua" },
      { value: "berhasil", label: "Berhasil" },
      { value: "dikembalikan", label: "Dikembalikan" },
      { value: "menunggu pembayaran", label: "Menunggu Pembayaran" },
      { value: "dikembalikan", label: "Dikembalikan" },
      { value: "dibatalkan", label: "Dibatalkan" },
      { value: "ditolak", label: "Ditolak" },
    ];

    return (
      <div className="history-profile">
        <p className="title">RIWAYAT TRANSAKSI</p>
        <hr />
        <div className="hisbox-parent">
          {/* <div className="filter-history">
                        <Button>Semua</Button>
                        <Button>Berhasil</Button>
                        <Button>Menunggu Pembayaran</Button>
                        <Button>Dikembalikan</Button>
                        <Button>Dibatalkan</Button>
                        <Button>Ditolak</Button>                       
                    </div> */}
          <div className="row mb-4 filter-history">
            <div className="col-md-6 col-sm-12 mb-2">
              <label>Status</label>
              <div className="w-100">
                <Select options={optionsStatus} />
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <label>Transaksi</label>
              <div className="w-100">
                <Select options={optionsTransaction} />
              </div>
            </div>
          </div>
          {this.listComp()}
        </div>
      </div>
    );
  }
}

export default HistoryIndex;
