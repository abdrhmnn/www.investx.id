import React, { Component, Fragment } from "react";
import arrowback from "../../images/arrowback.svg";
import logo from "../../images/logo.svg";
import { Button, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

class Syarat extends Component {
    state = {
        borderActive: "",
    };

    borderBlue = (e) => {
        if (e.target.id.length !== 0) {
            console.log(e.target.id);
            this.setState({ borderActive: e.target.id });
            console.log();
        } else {
            console.log(e.target.id);
            console.log("kosong");
        }
    };

    handleFileUpload = (file, name) => {
        console.log("====================================");
        console.log(file[0]);
        console.log(name);
        console.log("====================================");
        this.setState({ modalFile: {} });
    };

    onSubmit = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.props.history.push("/");
            }
        });
    };

    render() {
        return (
            <div className="all-forms-style">
                <div className="bg">
                    <div className="bg-round"></div>
                </div>
                <Link to="/startup-form-media">
                    <Fab className="back-button">
                        <img src={arrowback} alt="" />
                    </Fab>
                </Link>
                <div className="logo-invest">
                    <img src={logo} alt="" />
                </div>
                <p className="title">Selamat datang Cecillia</p>
                <p className="desc mb-5">
                    {" "}
                    Terima kasih telah mendaftar di InvestX. <br /> Silahkan
                    lengkapi daftar diri anda untuk untuk mengajukan funding
                </p>
                <div className="box-form-data mt-5">
                    {/* ///////////////////FORMS//////////////////// */}
                    <p className="title">Syarat dan Ketentuan</p>
                    <form action="">
                        <div className="row">
                            <div className="col-md-12 syarat">
                                <p className="title">Pernyataan Informasi</p>
                                <p>
                                    1. Dengan ini saya menyatakan bahwa
                                    informasi yang saya sampaikan di dalam form
                                    ini adalah sesuaidengan keadaan yang
                                    sebenar-benarnya.
                                </p>
                                <p>
                                    2. Bahwa saya menerima setiap hasil yang
                                    dikeluarkan oleh menu daftarkan bisnis ini
                                    dengan penuh kesadaran.
                                </p>
                                <p>
                                    3. Dengan disetujuinya surat pernyataan ini,
                                    maka saya tunduk pada ketentuan internal
                                    perihal seleksi penerbit yang dijalankan
                                    oleh platform InvestX.
                                </p>
                                <p className="mt-5">
                                    Apakah anda setuju dengan Syarat dan
                                    ketentuan diatas?
                                </p>
                            </div>

                            <div className="col-md-12">
                                <div className="w-addnow">
                                    <div className="w-check">
                                        <div
                                            className="cbox"
                                            onClick={() =>
                                                this.setState({
                                                    isAgree: !this.state
                                                        .isAgree,
                                                })
                                            }
                                        >
                                            {this.state.isAgree ? (
                                                <i className="fas fa-check"></i>
                                            ) : null}
                                        </div>
                                        <span>Ya, saya setuju</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* ///////////////////FORMS END//////////////////// */}
                </div>

                <div className="foot-data-diri">
                    <p className="agreement">
                        *Saya menjamin bahwa informasi yang saya cantumkan
                        diatas adalah benar dan siap bertanggung jawab atas
                        segala konsekuensi yang terjadi di kemudian hari, serta
                        memiliki kemampuan analisis resiko terhadap saham
                        penerbit dan memenuhi kriteria pemodal sesuai peraturan
                        yang berlaku.
                    </p>
                    <Button onClick={this.onSubmit} form="datadiri">
                        SUBMIT
                    </Button>
                </div>
            </div>
        );
    }
}

export default Syarat;
