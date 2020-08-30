import React, { Component } from 'react';
import successformimage from '../../images/successformimage.svg'

class PopSuccessForm extends Component {
    render() {
        return (
            <div className='popsukform'>
                <div className="box-suk">
                    <i className="fas fa-times" onClick={this.props.offModal}></i>
                    <img src={successformimage} alt="success"/>
                    <p className="titlepf">Terimakasih!</p>
                    <p className="descpf">Data anda akan kami review dalam 2x24 jam</p>
                </div>
                
            </div>
        );
    }
}

export default PopSuccessForm;