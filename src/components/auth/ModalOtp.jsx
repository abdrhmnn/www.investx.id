import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import gmail from '../../images/gmail.svg'
import outlook from '../../images/outlook.svg'

class ModalOtp extends Component {
    state ={
        box1 : '',
        box2 : '',
        box3 : '',
        box4 : '',
        box5 : '',
        box6 : '',
    }
    handleChange = (e) =>{
        let boxes = ['box1','box2','box3','box4','box5','box6',]
        for (let i = 0; i < 5; i++) {
            if (e.target.name === boxes[i] && e.target.value !== "") {
                this[`boxFoc${i + 2}`].focus()
            }
        }

        const regex = /[0-9]/g;
        var val  = e.target.value.match(regex)
        this.setState({
            [e.target.name] : val == null ? '' : e.target.value
        }, ()=>{
            var {box1, box2, box3, box4, box5, box6 } = this.state
            if (box1 !== '' && box2 !== '' && box3 !== '' && box4 !== '' && box5 !== '' && box6 !== '' ) {
                this.handleSubmit()
        }
        })
    }
    handleSubmit = ()=>{
        var {box1, box2, box3, box4, box5, box6 } = this.state
        let inCode = box1 + box2 + box3 + box4 + box5 + box6
        console.log(this.state);
        window.location.href = '/select-form'
    }
    render() {
        return (
            <div className='otp'>
                <div className="box-otp">
                    <p className="title">Cek Email anda untuk Kode OTP</p>
                    <p className="desc">Kami telah mengirim 6 angka kode OTP ke investorindonesia@gmail.com Kode ini hanya berlaku selama 30 menit, harap segera dimasukan.</p>
                    <form onSubmit={this.handleSubmit}>
                       <input ref={(input) => { this.boxFoc1 = input; }}  type='text' maxLength='1' name='box1' value={this.state.box1} onChange={this.handleChange}  />
                       <input ref={(input) => { this.boxFoc2 = input; }}  type='text' maxLength='1' name='box2' value={this.state.box2} onChange={this.handleChange}  />
                       <input ref={(input) => { this.boxFoc3 = input; }}  type='text' maxLength='1' name='box3' value={this.state.box3} onChange={this.handleChange}  />
                       <input ref={(input) => { this.boxFoc4 = input; }}  type='text' maxLength='1' name='box4' value={this.state.box4} onChange={this.handleChange}  />
                       <input ref={(input) => { this.boxFoc5 = input; }}  type='text' maxLength='1' name='box5' value={this.state.box5} onChange={this.handleChange}  />
                       <input ref={(input) => { this.boxFoc6 = input; }}  type='text' maxLength='1' name='box6' value={this.state.box6} onChange={this.handleChange}  />
                   </form>
                   <div className="timer">00:30</div>
                   <div className="box-emails">
                       <a href='http://gmail.com' target="_blank" > <img src={gmail} alt="gmail"/> Buka Gmail</a>
                       <a href='http://outlook.com' target="_blank" > <img src={outlook} alt="outlook"/> Buka Outlook</a>
                   </div>
                   <p className="info">Tidak dapat menemukan kode Anda? Periksa folder spam Anda!</p>
                </div>
            </div>
        );
    }
}

export default ModalOtp;