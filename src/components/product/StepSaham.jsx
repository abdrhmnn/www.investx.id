import React, { Component } from "react";

class StepSaham extends Component {
  render() {
    const arrStep = [
      {
        name: "Pre-Order Saham",
        icon: () => <i className="fas fa-hourglass-half"></i>,
      },
      {
        name: "Penawaran Saham",
        icon: () => <i className="far fa-handshake"></i>,
      },
      {
        name: "Pendanaan Terpenuhi",
        icon: () => <i className="far fa-check-circle"></i>,
      },
      {
        name: "Penyerahan Dana",
        icon: () => <i className="fas fa-file-invoice-dollar"></i>,
      },
      {
        name: "Pembagian Dividen",
        icon: () => <i className="fas fa-hand-holding-usd"></i>,
      },
    ];
    return (
      <div className="stepper">
        <div className="stepper-wrap">
          {arrStep.map((res, i) => (
            <div
              className={
                this.props.active <= i ? " wrapstep" : "wrapstep stepper-active"
              }
              key={i}
            >
              <div className="steps-icons">{res.icon()}</div>
              <p className="d-step">
                {i + 1}. {res.name}
              </p>
            </div>
          ))}
        </div>
        <div className="liner">
          <hr className="line-primary" style={{ width: `${100}%` }} />
        </div>
        {/* <div className='line-seccondary'></div> */}
      </div>
    );
  }
}

export default StepSaham;
