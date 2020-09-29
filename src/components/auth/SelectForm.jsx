import React, { Component } from 'react';
import select from '../../images/bg/select.jpg'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import axios from 'axios'

class SelectForm extends Component {
    componentDidMount(){
        console.log('====================================');
        console.log(this.props.match.params.code);
        console.log('====================================');
        axios.post('https://api.staging.investx.id/authentication/verify-email/',
        {
            code : this.props.match.params.code
        })
        .then(res => console.log(res))
        .catch(err=> alert(JSON.stringify(err.response)))
    }
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