import React, { Component } from "react";

class PaymentMethod extends Component {
    render() {
        const { methods } = this.props;
        return (
            <>
                {methods.map((method, i) => (
                    <div key={i}>
                        <div className="d-flex justify-content-between">
                            <div className="title-alt">{method.title}</div>
                            {methods.length === 1 ? (
                                <span
                                    className="more-transfer-method"
                                    onClick={method.toggle}
                                >
                                    Lihat Lainnya
                                    <i className="fas fa-chevron-down ml-2"></i>
                                </span>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <p className="subtitle">{method.subtitle}</p>
                        {method.logos.map((value, j) => (
                            <div className="radio-bank" key={j}>
                                <input type="radio" name="bank" />

                                <img src={value} alt="bca" />
                                <br />
                            </div>
                        ))}
                        <br />
                    </div>
                ))}
            </>
        );
    }
}

export default PaymentMethod;
