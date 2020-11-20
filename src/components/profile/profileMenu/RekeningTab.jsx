import React, { Component } from "react";
import reknull from "../../../images/profile/reknull.svg";
import { Button } from "@material-ui/core";
import ModalTemplate from "../../shared/ModalTemplate";
import ModalFillBank from "./ModalFillBank";
import plustopup from "../../../images/profile/plustopup.svg";

class RekeningTab extends Component {
  state = {
    modalAddBank: false,
    isBankExist: true,
    objListBank: [
      {
        id: 0,
        bank: "BCA",
        an: "Dewi Kartika",
        norek: "12525522525252",
        logoBank: "logohere! :)",
      },
      {
        id: 1,
        bank: "BRI",
        an: "Dewi Kartika",
        norek: "12525522525252",
        logoBank: "logohere! :)",
      },
      {
        id: 2,
        bank: "MANDIRI",
        an: "Dewi Kartika",
        norek: "12525522525252",
        logoBank: "logohere! :)",
      },
    ],
  };

  closeMod = () => this.setState({ modalAddBank: false });
  openMod = () => this.setState({ modalAddBank: true });

  comListBank = () => (
    <div className="list-rektab ">
      <ModalTemplate
        onOpen={this.state.modalAddBank}
        onClose={this.closeMod}
        component={() => ModalFillBank(this.closeMod, this.openMod)}
      />
      {this.state.objListBank.map((res, i) => (
        <div className=" item-rektab row" key={i}>
          <div className="box-rektab col-md-3 col-6">
            <p className="title-bank">Bank</p> <b>{res.bank}</b>{" "}
          </div>
          <div className="box-rektab col-md-3 col-6">
            <p className="title-bank  text-left">A/n</p> {res.an}
          </div>
          <div className="box-rektab col-md-3 col-6">
            <p className="title-bank">No.Rek</p> {res.norek}
          </div>
          <div className="box-rektab col-md-3 col-6 text-center">
            {res.logoBank}
          </div>
        </div>
      ))}
      <Button onClick={this.openMod}>
        <img src={plustopup} alt="add-bank" />
        Tambah Bank
      </Button>
    </div>
  );

  compAddRekTab = () => (
    <div className="add-rektab">
      <ModalTemplate
        onOpen={this.state.modalAddBank}
        onClose={this.closeMod}
        component={() => ModalFillBank(this.closeMod, this.openMod)}
      />
      <img src={reknull} alt="rekening null" />
      <p className="desc">
        Anda belum menyimpan Rekening Bank. <br />
        Untuk kemudahan pembayaran kartu kredit / debit, simpan informasi kartu
        kredit / debit Anda.
      </p>
      <Button onClick={this.openMod}>Tambah Kartu Kredit / Debit</Button>
    </div>
  );

  render() {
    if (this.state.isBankExist) {
      return this.comListBank();
    } else {
      return this.compAddRekTab();
    }
  }
}

export default RekeningTab;
