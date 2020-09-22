import React, { Component } from 'react';

import {Modal, Backdrop, Fade} from '@material-ui/core';

class ModalTemplate extends Component {
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
                            {this.props.component()}
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default ModalTemplate;