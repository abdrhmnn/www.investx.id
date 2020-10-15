import { Button } from "@material-ui/core";
import React, { Component } from "react";

import walletIcon from "../../../images/withdraw/wallet.svg";

class DividendIndex extends Component {
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
                        <div className="col-md-6 ">
                            <div className="row justify-content-end">
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 16 16"
                                    class="show-more"
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
                    <div className="row invest-detail">
                        <div className="col detail-value">
                            <p className="name">Tanggal</p>
                            <p className="value">12/3/2020</p>
                        </div>
                        <div className="col detail-value">
                            <p className="name">Kode Saham</p>
                            <p className="value">a1b2c3d4</p>
                        </div>
                        <div className="col detail-value">
                            <p className="name">Nominal</p>
                            <p className="value">Rp. 1,000,000</p>
                        </div>
                        <div className="col detail-value no-border">
                            <p className="name">Ended in 30 Days left</p>
                            <p className="value" style={{ color: "#09BF15" }}>
                                Devidend Status
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    render() {
        return (
            <div className="dividend-menu">
                <p className="title">Dividend</p>
                <hr />

                <div className="total-dividend">
                    <p className="label-dividend">
                        Total Dividend
                        <span>
                            <i
                                class="fas fa-question-circle"
                                style={{
                                    color: "#4CB5EF",
                                    width: "14px",
                                    height: "14px",
                                    marginLeft: "6px",
                                }}
                            ></i>
                        </span>
                    </p>
                    <div className="row">
                        <img
                            className="wallet-icon"
                            src={walletIcon}
                            alt="wallet"
                        />
                        <p className="value">Rp. 1,234,567</p>
                    </div>
                </div>

                <div className="riwayat-dividend">
                    <p className="label-dividend">Riwayat Dividend</p>

                    {this.renderCardItem()}

                    <hr style={{ marginTop: "40px", marginBottom: "12px" }} />
                    <div className="ketentuan-bagi-hasil">
                        <p style={{ marginBottom: "40px" }}>
                            Ketentuan Pencairan Dana Bagi Hasil :
                        </p>
                        <ol style={{ paddingLeft: "12px" }}>
                            <li>
                                Pencairan dana hanya bisa dilakukan sebanyak 1
                                kali
                            </li>
                            <li>
                                Nominal minimum pencairan dana adalah Rp.
                                16.500.
                            </li>
                            <li>
                                Sisa nominal dana yang belum dicairkan otomatis
                                diakumulasikan untuk bagi hasil selanjutnya.
                            </li>
                            <li>
                                Pencairan dana selain ke rekening BCA.
                                BRI,Mandiri dikenakan biaya admin sebesar Rp.
                                6.500
                            </li>
                            <li>
                                Lama waktu pencairan ke rekening pengguna
                                maksimal 2x24 jam pada hari kerja bank.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default DividendIndex;