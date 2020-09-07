import React, { Component } from 'react';

import error from "../../images/error.svg";

import Navbar from './Navbar';
import ModalError from './ModalError';

// ? Notes dari fadil: Penamaan Component pakai PascalCase, sama itu typo harusnya 'Empty'
class emptPage extends Component {

    state = {
        displayModal: true,
    }
    
    setDisplayModal = (status) => {
        this.setState({
            displayModal: status,
        });
    }

    render() {
        return (
            <>
            {this.state.displayModal ? <ModalError onClose = {() => this.setDisplayModal(false)} /> : null}
            <Navbar />
            <div className="emptpage" onClick = {() => this.setDisplayModal(true)}>
                <img src={error} />
            </div>
            </>
        );
    }
}

export default emptPage;