import React, { Component } from 'react';
import Navbar from './Navbar';

class emptPage extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div className="emptpage">
                <img src={"https://res.cloudinary.com/codelifings/image/upload/v1599049238/ok_diqja0.png"} />
            </div>
            </>
        );
    }
}

export default emptPage;