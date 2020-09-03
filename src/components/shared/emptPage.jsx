import React, { Component } from 'react';
import Navbar from './Navbar';
import ModalError from './ModalError';
import error from "../../images/error.svg";

class emptPage extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div className="emptpage">
                <img src={error} />
            </div>
            </>
        );
    }
}

export default emptPage;