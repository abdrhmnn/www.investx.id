import React, { Component } from 'react';
// import ReactLoading from 'react-loading';
import {Modal, Backdrop, Fade} from '@material-ui/core';
import ScaleLoader from "react-spinners/ScaleLoader";


class Loading extends Component {
    state={
        open : false
    }
    render() {
        return (
            <div>
                <Modal
                    className='d-flex justify-content-center align-items-center'
                    open={this.props.onOpen}
                    onClose={this.props.onClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.onOpen} className='modal_remove_outline'>
                        <div>
                            <ScaleLoader color='#fff'  size={150} style={{width: '70px'}}/>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default Loading;
