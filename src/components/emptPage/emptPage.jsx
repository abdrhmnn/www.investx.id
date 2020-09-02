import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ojk from '../shared/Ojk';
import Footer from '../shared/Footer';
import "../../styles/emptPage.scss";
import NavError from '../navError/NavError';

class emptPage extends Component {

    toTop = ()=> window.scrollTo({ top: 0, behavior: 'smooth' });
    
    render() {
        return (
            <div className="emptpage">
                <NavError />
                <div className="error">
                    <img src={"https://res.cloudinary.com/codelifings/image/upload/v1599049238/ok_diqja0.png"} />
                </div>
            </div>
        );
    }
}

export default emptPage;