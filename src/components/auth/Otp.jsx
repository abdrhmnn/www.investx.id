import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import gmail from '../../images/gmail.svg'
import outlook from '../../images/outlook.svg'
import Navbar from '../shared/Navbar';
import mailbox from '../../images/mailbox.png'


class Otp extends Component {
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
        }
        })
    }
    handleSubmit = (e)=>{
        var {box1, box2, box3, box4, box5, box6 } = this.state
        let inCode = box1 + box2 + box3 + box4 + box5 + box6
        console.log(this.state);
        // window.location.href = '/select-form'
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className='otp'>
                    <div className="box-otp">
                        <img src={mailbox} alt=""/>
                        <p className="title">Verifikasi Kode OTP</p>
                        <p className="desc">Kode verifikasi telah dikirimkan ke nomor</p>
                        <p className="num">0 8 5 7 * * * * 1 2 1 2</p>
                        <form onSubmit={this.handleSubmit} id='otp'>
                        <input required ref={(input) => { this.boxFoc1 = input; }}  type='number' maxLength='1' name='box1' value={this.state.box1} onChange={this.handleChange}  />
                        <input required ref={(input) => { this.boxFoc2 = input; }}  type='number' maxLength='1' name='box2' value={this.state.box2} onChange={this.handleChange}  />
                        <input required ref={(input) => { this.boxFoc3 = input; }}  type='number' maxLength='1' name='box3' value={this.state.box3} onChange={this.handleChange}  />
                        <input required ref={(input) => { this.boxFoc4 = input; }}  type='number' maxLength='1' name='box4' value={this.state.box4} onChange={this.handleChange}  />
                        <input required ref={(input) => { this.boxFoc5 = input; }}  type='number' maxLength='1' name='box5' value={this.state.box5} onChange={this.handleChange}  />
                        <input required ref={(input) => { this.boxFoc6 = input; }}  type='number' maxLength='1' name='box6' value={this.state.box6} onChange={this.handleChange}  />
                    </form>
                    <button type='submit' form='otp'>Verifikasi</button>
                    <p className="info">Belum menerima email aktivasi? <span>kirim ulang</span> dalam 30 detik</p>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Otp;