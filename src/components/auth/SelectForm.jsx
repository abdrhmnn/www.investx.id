import React, { Component } from 'react';
import select from '../../images/bg/select.jpg'
import icon from '../../images/selecticon.svg'
import { Link } from 'react-router-dom';

class SelectForm extends Component {
    render() {
        return (
            <div className='selectform'>
                <div className="w-left"   style={{backgroundImage: `url(${select})`}}></div>
                <div className="w-right">
                    <div className="box-select">
                        <img src={icon} alt="icon"/>
                        <p className="title">Verifikasi email berhasil !</p>
                        <p className="desc">Silakan isi formulir sesuai kebutuhan kamu</p>
                        <Link to='/select-form/data-diri'>
                            <button className='start'>Start Investing</button>
                        </Link>
                        <hr className="mid"/>
                        <span className="atau">Atau</span>
                        <br/>
                        <button className="bfun">Get Funding</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectForm;