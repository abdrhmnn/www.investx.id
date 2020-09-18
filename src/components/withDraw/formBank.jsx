import React, { Component } from 'react';
import bankRumah from '../../images/bankRumah.svg'
class ModalError extends Component {
    render() {
        // const { 
        //     onClose = () => {}, 
        //     image = errorImage,
        //     title = 'Mohon Maaf', 
        //     description = 'Data yang anda masukan salah', 
        //     onAction = () => {},
        // } = this.props;
        return (
            <div className="modal-error-container">
                <div className="modal-error-body" style={{ maxWidth: "500px" }}>
                    <div className="modal-error-detail">
                        <img src={bankRumah} alt="" className="error-image" />
                        <h5 className="error-title">Tambah Bank</h5>
                        <div>
                            <select class="form-control" id="sel1" style={{ width: "450px" }}>
                                <option>Nama Bank</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <br />
                            <input type="text" class="form-control" id="pwd" placeholder="Kantor Cabang" />
                            <br />
                            <input type="text" class="form-control" id="pwd" placeholder="Nama Pemilik Rekening" />
                            <br />
                            <input type="text" class="form-control" id="pwd" placeholder="No Rekening" />
                            <br />
                            <div className="d-flex justify-content-between">
                                <div></div>
                                <button type="submit" className="but-blue" style={{ borderRadius: "5px" }}>
                                    SAVE
                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalError;