import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import step1 from "../../images/how/step1.svg";
import step2 from "../../images/how/step2.svg";
import step3 from "../../images/how/step3.svg";
import documentIcon from "../../images/how/document.svg";
import stepsBisnis from "../../images/how/steps-bisnis.svg";

import Ojk from "../shared/Ojk";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

class HowItWorks extends Component {
    render() {
        const butSolid = {
            width: "205px",
            height: "52px",
            background: "#021F59",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "7px",
            border: "none",
            color: "white",
            marginRight: "28px",
            fontWeight: "500",
            fontSize: "16px",
        };

        return (
            <div className="how">
                <div className="head">
                    <Navbar />
                    <div className="container jumbo">
                        <div className="con">
                            <p className="title">
                                Cara mudah untuk Investasimu
                            </p>
                            <p className="desc">
                                Apakah kamu seorang Investor ataupun pelaku
                                bisnis, siapapun bisa dengan mudah menggunakan
                                InvestX
                            </p>

                            <Link to="/investor-form-data-diri">
                                <Button className="how-invest">
                                    Start Investing
                                </Button>
                            </Link>
                            <Link to="/startup-form-data-diri">
                                <Button className="fund">Get Funding</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cara">
                    <p className="title">Cara Investasi</p>
                    <p className="desc">
                        Ikuti panduan singkat cara investasi dari kami dan
                        dapatkan penghasilan rutin dari bagihasil bisnis kamu
                        pilih.
                    </p>
                </div>
                <div className="kartu">
                    <div className="container steps">
                        <div className="step-box">
                            <div className="head-kar">
                                <p className="title">Step 1</p>
                                <p className="desc">Choose</p>
                            </div>
                            <div className="karcon">
                                <figure>
                                    <img src={step1} alt="steps" />
                                </figure>
                                <ul>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                    </li>
                                    <li>
                                        Pick a startup you like.
                                        <br />
                                        <br />
                                        Review the company pitch, terms, and
                                        decide whether you believe they will
                                        succeed.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="step-box">
                            <div className="head-kar">
                                <p className="title">Step 2</p>
                                <p className="desc">Invest</p>
                            </div>
                            <div className="karcon">
                                <figure>
                                    <img src={step2} alt="steps" />
                                </figure>
                                <ul>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                    </li>
                                    <li>
                                        Invest a small amount to start.
                                        <br />
                                        <br />
                                        Plan to diversify, which means investing
                                        smaller amounts into several companies.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="step-box">
                            <div className="head-kar">
                                <p className="title">Step 3</p>
                                <p className="desc">Wait</p>
                            </div>
                            <div className="karcon">
                                <figure>
                                    <img src={step3} alt="steps" />
                                </figure>
                                <ul>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                    </li>
                                    <li>
                                        Wait to see if the startup succeeds.
                                        <br />
                                        <br />
                                        If the startup does well, your
                                        investment can bring a return.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cara-mengajukan">
                    <div className="cara">
                        <p className="title">Cara Mengajukan Bisnis</p>
                        <p className="desc">
                            Ikuti panduan singkat cara investasi dari kami dan
                            dapatkan penghasilan rutin dari bagihasil bisnis
                            kamu pilih.
                        </p>
                    </div>

                    <div className="steps container center">
                        <div className="documents row">
                            <div className="mr-3">
                                <img
                                    src={documentIcon}
                                    width="38.08px"
                                    height="46px"
                                    alt="steps"
                                />
                            </div>
                            <div>
                                <h5 className="title">Sisipkan Dokumen</h5>
                                <p>
                                    Untuk mengajukan bisnis, anda harus
                                    menyiapkan dokumen sebagai berikut :{" "}
                                </p>
                                <p>1. Foto KTP, Selfie dengan KTP dan NPWP </p>
                                <p>2. Logo perusahaan </p>
                                <p>3. Foto perusahaan </p>
                                <p>
                                    4. Video perusahaan dalam bentuk link
                                    youtube ( Optional )
                                </p>
                                <p className="text-danger mt-4">
                                    * File selain Video di unggah dalam bentuk
                                    PNG/ JPEG/ PDF tidak lebih dari 5MB
                                </p>
                            </div>
                        </div>

                        <div className="steps-image">
                            <h5 className="title mb-3 ml-3">
                                Tahapan proses pengajuan bisnis
                            </h5>
                            <div className="container">
                                <center>
                                    <img
                                        className="mw-100"
                                        src={stepsBisnis}
                                        alt="steps-bisnis"
                                    />
                                </center>
                            </div>
                        </div>

                        <center>
                            <Button style={butSolid}>Ajukan Bisnis</Button>
                        </center>
                    </div>
                </div>

                <Footer />
                <Ojk />
            </div>
        );
    }
}

export default HowItWorks;
