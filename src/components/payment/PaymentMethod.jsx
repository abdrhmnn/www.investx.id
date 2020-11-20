import React, { Component } from "react";
import { Slide } from "react-reveal";

import bca from "../../images/payment/bca.svg";
import bni from "../../images/payment/bni.svg";
import bri from "../../images/payment/bri.svg";
import gopay from "../../images/payment/gopay.svg";
import indomaret from "../../images/payment/indomaret.svg";
import kredit from "../../images/payment/kredit.svg";
import mandiri from "../../images/payment/mandiri.svg";
import minimarket from "../../images/payment/minimarket.svg";
import ovo from "../../images/payment/ovo.svg";

class PaymentMethod extends Component {
  state = {
    toggleAll: false,
    checkedRadio: "",
  };

  toggleAllMethod = () => {
    this.setState({
      toggleAll: !this.state.toggleAll,
      checkedRadio: "",
    });
  };

  onChecked = (id) => {
    this.setState({
      checkedRadio: id,
    });
  };

  renderMethod = (methods = []) => {
    return (
      <>
        {methods.map((method, i) => (
          <div key={i}>
            <div className="d-flex justify-content-between">
              <div className="title-alt">{method.title}</div>
              {methods.length === 1 ? (
                <span
                  className="more-transfer-method"
                  onClick={this.toggleAllMethod}
                >
                  Lihat Lainnya
                  <i className="fas fa-chevron-down ml-2"></i>
                </span>
              ) : (
                <div></div>
              )}
            </div>
            <p className="subtitle" style={{ marginBottom: "11px" }}>
              {method.subtitle}
            </p>
            {method.logos.map((data) => (
              <label
                htmlFor={data.id}
                key={data.id}
                className={
                  "radio-bank " +
                  (this.state.checkedRadio === data.id ? "checked" : "")
                }
                style={{ cursor: "pointer" }}
              >
                <input
                  id={data.id}
                  checked={this.state.checkedRadio === data.id}
                  onClick={() => this.onChecked(data.id)}
                  type="radio"
                  name="bank"
                  value={data.logo}
                  // disabled
                />

                <img src={data.logo} className={data.class} alt="bca" />
                <br />
              </label>
            ))}
          </div>
        ))}
      </>
    );
  };

  render() {
    const methods = [
      {
        title: "VIRTUAL ACCOUNT",
        subtitle: "Dengan Kode Unik Semua Jadi Cepat",
        logos: [
          { id: 0, logo: bca },
          { id: 1, logo: bni },
          { id: 2, logo: mandiri },
          { id: 3, logo: bri },
        ],
      },
      {
        title: "E-WALLET",
        subtitle: "Pembayaran terhubung langsung dengan akun e-walletmu ",
        logos: [
          { id: 4, logo: gopay },
          { id: 5, logo: ovo },
        ],
      },
      {
        title: "KARTU KREDIT",
        subtitle: "Dapat menggunakan berbagai pilihan kartu kredit",
        logos: [{ id: 6, logo: kredit }],
      },
      {
        title: "TRANSFER BANK",
        subtitle: "Transaksi dengan akhir kode unik untuk verifikasi otomatis",
        logos: [{ id: 7, logo: bca }],
      },
      {
        title: "MINIMARKET",
        subtitle: "Dapat menggunakan berbagai pilihan kartu kredit",
        logos: [
          { id: 8, logo: minimarket, class: "minimarket" },
          { id: 9, logo: indomaret },
        ],
      },
    ];
    return (
      <>
        {!this.state.toggleAll ? (
          this.renderMethod([methods[0]])
        ) : (
          <Slide bottom>{this.renderMethod(methods)}</Slide>
        )}
      </>
    );
  }
}

export default PaymentMethod;
