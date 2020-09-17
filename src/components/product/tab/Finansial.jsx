import React, { Component } from 'react';
import finan from '../../../images/tabDetailCompany/finan.svg'

class Finansial extends Component {
    render() {
        return (
            <div className='finansial-tab'>
                <div className="title">
                    <img src={finan} alt="finan-icon" />
                    Finansial
                </div>
                <p className="lab">Total Saham</p>
                <div className="val-fin">
                    <p className="saham">Rp. 350.000.000</p>
                    =
                    <p className="lembar">3500 lembar</p>
                </div>

                <p className="lab">Saham Terjual</p>
                <div className="val-fin">
                    <p className="saham">Rp. 261.100.000</p>
                    =
                    <p className="lembar">2611 lembar</p>
                </div>

                <p className="lab">Saham Tersisa</p>
                <div className="val-fin">
                    <p className="saham">Rp. 88.900.000</p>
                    =
                    <p className="lembar">889 lembar</p>
                </div>

                <hr/>

                <p className="lab">Total Keuntungan per Tahun berdasarkan historis</p>
                <div className="val-fin">
                    <p className="saham">Rp 850.000.000 - 906.000.000</p>
                </div>

                <p className="lab">Jangka waktu pembagian keuntungan dari pengelola</p>
                <div className="val-fin">
                    <p className="saham">3 Bulan</p>
                </div>

                
            </div>
        );
    }
}

export default Finansial;