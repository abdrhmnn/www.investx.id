import React, { Component } from 'react';
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
            <div className="emptpage" onClick = {() => this.setDisplayModal(true)} >
                <img src={"https://res.cloudinary.com/codelifings/image/upload/v1599049238/ok_diqja0.png"} />
            </div>
            </>
        );
    }
}

export default emptPage;