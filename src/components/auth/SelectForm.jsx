import React, { Component } from 'react';
import select from '../../assets/img/bg/select.jpg'
import icon from '../../assets/img/selecticon.svg'

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
                        <button className='start'>Start Investing</button>
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