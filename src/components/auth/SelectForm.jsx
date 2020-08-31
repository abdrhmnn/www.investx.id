import React, { Component } from 'react';
import select from '../../images/bg/select.jpg'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

class SelectForm extends Component {
    render() {
        return (
            <div className='selectform' style={{backgroundImage: `url(${select})`}}>
                <div className="container box-con">
                <img className='bglog' src={logo} alt="icon"/>

                        <div className="box-select">
                            <img src={logo} alt="icon"/>
                            <p className="title">Verifikasi email berhasil !</p>
                            <p className="desc">Silakan isi formulir sesuai kebutuhan kamu</p>
                            <div className="wbut">
                                <Link to='/investor-form-data-diri'>
                                    <button className='inv'>Saya adalah Investor</button>
                                </Link>
                                <Link to='/startup-form-data-diri'>
                                    <button className='start'>Ajukan Pendanaan</button>
                                </Link>
                            </div>
                            <hr className="mid"/>
                            <span className="atau">Atau</span>
                            <br/>
                            <Link to='/how'>
                                <button className="bfun">Pelajari Selengkapnya</button>
                            </Link>
                        </div>
                </div>
            </div>
        );
    }
}

export default SelectForm;