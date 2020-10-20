import React, { Component } from "react";

import error from "../../images/error.svg";

import Navbar from "./Navbar";

class emptPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div
                    className="emptpage"
                    onClick={() => this.setDisplayModal(true)}
                >
                    <img src={error} />
                </div>
            </>
        );
    }
}

export default emptPage;
