import React, { Component } from 'react';
import simulasiIcon from '../../../images/tabDetailCompany/simulasiIcon.svg'
import {Button, Fab,} from '@material-ui/core'



class Simulasi extends Component {
    state={
        count : 1
    }
    render() {
        return (
            <div className='simulasi-tab'>
                <div className="title">
                    <img src={simulasiIcon} alt="finan-icon" />
                    Simulasi Investasi
                </div>

                <div className="sim-count">
                    <div className="cal">
                        <p className="lab">Masukan Jumlah Lembar Saham</p>
                        <div className="inp-count">
                            <Fab onClick={()=> this.setState({count : this.state.count - 1})} disabled={this.state.count === 1}>-</Fab>
                            <input type="number" min='1' value={this.state.count}/>
                            <Fab onClick={()=> this.setState({count : this.state.count + 1})} >+</Fab>
                        </div>
                    </div>

                    <div className="val-inv">
                        <p className="lab">Nilai Investasi</p>
                        <p className="right">Rp. 5.000.000</p>

                    </div>
                </div>

                <p className="lab">Keuntungan / tahun berdasarkan historis</p>
                <div className="val-sim">
                    <p className="left">Rp. 1.256.097,56</p>
                    s/d
                    <p className="right">Rp. 1.546.987,56</p>
                </div>

                <p className="lab">Dividen yield (%) / tahun berdasarkan historis</p>
                <div className="val-sim">
                    <p className="left">25</p>
                    s/d
                    <p className="right">30</p>
                </div>

                <p className="nb pt-5 mb-0" style={{fontSize : 14}}>*performa bisnis masa lalu tidak mencerminkan kinerja masa depan</p>
                
            </div>
        );
    }
}

export default Simulasi;