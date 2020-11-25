import React, { Component } from "react";
import reknull from "../../images/profile/reknull.svg";
import { Button } from "@material-ui/core";
import ModalTemplate from "../shared/ModalTemplate";
import ModalFillBank from "../profile/profileMenu/ModalFillBank";
import plustopup from "../../images/profile/plustopup.svg";

class RekeningModal extends Component {
  state = {
    modalAddBank: false,
    isBankExist: true,
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

export default RekeningModal;
