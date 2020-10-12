import React, { Component } from "react";
import { Button } from "@material-ui/core";

import errorImage from "../../images/clip-list-is-empty 1.svg";

class ModalError extends Component {
    render() {
        return (
            <div className="modal-error-container">
                <div className="modal-error-body">
                    <i
                        className="fas fa-times"
                        onClick={this.props.onClose}
                    ></i>

                    <div className="modal-error-detail">
                        <img src={errorImage} alt="" className="error-image" />
                        <h2 className="error-title">Mohon Maaf</h2>
                        <h5 className="error-description">
                            Data yang anda masukan salah
                        </h5>

                        <Button className="but">Ulangi</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalError;
