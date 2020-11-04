import React, {Component} from 'react';
import bankRumah from '../../images/bankRumah.svg'

import {Box, Button} from "@material-ui/core";

class ModalError extends Component {
    render() {
        const butBlue = {
            width: "150px",
            height: "36px",
            fontSize: "14px",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#01579b",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            marginTop: "-20px",
        };
        // const {     onClose = () => {},     image = errorImage,     title = 'Mohon
        // Maaf',     description = 'Data yang anda masukan salah',     onAction = () =>
        // {}, } = this.props;
        return (
            <div className="modal-error-container tambahBank">
                <div
                    className="modal-error-body"
                    style={{
                    maxWidth: "500px"
                }}>
                    <div className="modal-error-detail">
                        <img src={bankRumah} alt="" className="error-image"/>
                        <h6 className="error-title">Tambah Bank</h6>
                        <div className="form-box">
                            <select class="form-control" id="sel1">
                                <option>Nama Bank</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <br/>
                            <input type="text" class="form-control" id="pwd" placeholder="Kantor Cabang"/>
                            <br/>
                            <input
                                type="text"
                                class="form-control"
                                id="pwd"
                                placeholder="Nama Pemilik Rekening"/>
                            <br/>
                            <input type="text" class="form-control" id="pwd" placeholder="No Rekening"/>
                            <br />
                            <div className="save">
                            <Button type="submit" style={butBlue}>
                                SAVE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ModalError;
