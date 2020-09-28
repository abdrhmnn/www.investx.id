import React, { Component } from 'react';
import reknull from '../../../images/profile/reknull.svg'
import {Button} from '@material-ui/core';


class RekeningTab extends Component {
    render() {
        return (
            <div className='rektab'>
                <img src={reknull} alt="rekening null"/>
                <p className="desc">
                Anda belum menyimpan Rekening Bank. <br/>
                Untuk kemudahan pembayaran kartu kredit / debit, simpan informasi kartu kredit / debit Anda.
                </p>
                <Button>Tambah Kartu Kredit / Debit</Button>
            </div>
        );
    }
}

export default RekeningTab;