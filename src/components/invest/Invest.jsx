import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import {Fab, Button} from '@material-ui/core';
import payment1 from '../../images/invest/payment1.png'
import payment2 from '../../images/invest/payment2.png'
import Footer from '../shared/Footer';
import Ojk from '../shared/Ojk';

class Invest extends Component {
    state={
        lembarSaham: 8
    }
    render() {
        return (
            <>
            <Navbar />
            <div className='invest'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pasal">
                            <p className="title">PERATURAN POJK 37 - 2018 - PASAL 42 - Ayat 2</p>
                            <p className="desc">
                                Setiap pemodal dengan penghasilan sampai dengan Rp.500.000.000 (lima ratus juta rupiah) per tahun, maka batas maksimal investasi pemodal tersebut di INVESTX adalah 5% dari jumlah pendapatan per tahun.
                                <br/>
                                <br/>
                                contoh : jika pendapatan pertahun anda adalah Rp. 100.000.000 maka batas maksimal investasi anda di INVESTX adalah Rp. 5.000.000
                                <br/>
                                <br/>
                                Kriteria batasan kepemilikan saham diatas tidak berlaku jika :
                                <br/>
                                <br/>
                                1. pemodal merupakan badan hukum 
                                <br/>
                                <br/>
                                2. pemodal memiliki rekening efek paling sedikit 2 (dua) tahun
                                <br/>
                                <br/>
                                Permohonan penghapusan limit kepemilikan saham dapat diajukan melalui email customer support (customer.support@investx.co.id), dengan melampirkan bukti kepemilikan rekening efek atau bukti SK Kemenkumham badan usaha
                            </p>
                        </div>
                        <div className="col-md cal-invest" style={{backgroundImage: `url(${payment1}), url(${payment2})`}}>
                            <div className="calculator">
                                <p className="title">Masukan Jumlah saham yang ingin dibeli</p>
                                <p className="desc">*Jumlah saham yang dapat di beli Berlaku kelipatan <br/> contoh : 8, 16, 32 dan seterusnya.</p>
                                <div className="wrap-cal">
                                    <Fab onClick={()=> this.setState({lembarSaham : this.state.lembarSaham / 2})} disabled={this.state.lembarSaham <= 8}><i className="fas fa-minus"></i></Fab>
                                    <input type="number" value={this.state.lembarSaham}/>
                                    <Fab onClick={()=> this.setState({lembarSaham : this.state.lembarSaham * 2})}><i className="fas fa-plus"></i></Fab>
                                </div>
                                <p className="info">Min. 8 lembar</p>
                                <p className="title">Total Harga saham</p>
                                <p className="total">Rp. {this.state.lembarSaham * 1000000}</p>
                                <Button className='beli-saham'>BELI SAHAM</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
                <Ojk />
            </>
        );
    }
}

export default Invest;