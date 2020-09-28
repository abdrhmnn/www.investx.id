import React, { Component } from 'react';
import reknull from '../../../images/profile/reknull.svg'
import {Button} from '@material-ui/core';
import ModalTemplate from '../../shared/ModalTemplate';
import ModalFillBank from './ModalFillBank'




class RekeningTab extends Component {
    state ={
        modalAddBank : true
    }

    closeMod = ()=> this.setState({modalAddBank : false})
    openMod = ()=> this.setState({modalAddBank : true})

    render() {
        return (
            <div className='rektab'>
                <ModalTemplate 
                    onOpen={this.state.modalAddBank} 
                    onClose={this.closeMod}
                    component ={()=>ModalFillBank(this.closeMod, this.openMod)}
                />
                <img src={reknull} alt="rekening null"/>
                <p className="desc">
                Anda belum menyimpan Rekening Bank. <br/>
                Untuk kemudahan pembayaran kartu kredit / debit, simpan informasi kartu kredit / debit Anda.
                </p>
                <Button onClick={this.openMod}>Tambah Kartu Kredit / Debit</Button>
            </div>
        );
    }
}

export default RekeningTab;