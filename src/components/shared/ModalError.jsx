import React, { Component } from 'react';

import example from '../../images/successformimage.svg'

class ModalError extends Component {
    render() {
        return (
            <div className="modal-error-container">
                <div className="modal-error-body">
                    <i className="fas fa-times" onClick={this.props.offModal}></i>

                    <img src={example} alt="" className="error-image" />
                    <h2 className="error-title">Mohon Maaf</h2>
                    <h5 className="error-description">Data yang anda masukan salah</h5>

                    <button className="but">Ulangi</button>
                </div>
            </div>
        );
    }
}

export default ModalError;
