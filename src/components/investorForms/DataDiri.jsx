import React, { Component } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment'


class DataDiri extends Component {
    state={
        borderActive : '',
        gender : '',
        tanggalLahir : null
    }

    borderBlue = (e)=>{
        if (e.target.id.length !== 0) {
            console.log(e.target.id);
            this.setState({borderActive : e.target.id})
            console.log();
        }else{
            console.log(e.target.id);
            console.log('kosong');
        }
    }

    render() {
        return (
           <div className="data-diri">
               <div className="bg">
                    <div className="bg-round"></div> 
               </div>
               <div className="back-button">
                   <img src={arrowback} alt=""/>
               </div>
               <div className="logo-invest">
                   <img src={logo} alt=""/>
               </div>
               <p className="title">Selamat datang Cecillia</p>
                <p className="desc"> Terima kasih telah mendaftar di InvestX. <br/> Silahkan lengkapi daftar diri anda untuk mulai berinvestasi</p>
               <div className="steps-invest">
                   <ul>
                       <li><div className="number">1</div> <span>Data Diri</span></li>
                       <li><div className="number">2</div> <span>Pendidikan & Pekerjaan</span></li>
                       <li><div className="number">3</div> <span>Dokumen</span></li>
                       <li><div className="number">4</div> <span>Bank</span></li>
                       <li><div className="number">5</div> <span>Preference</span></li>
                   </ul>
                   <hr/>
               </div>
               <div className="box-form-data">
                   <p className="title">Data Diri</p>
                   
                   <form action="">
                    <div className="row">

                        <div className="col-md-12 ">
                            <div className={this.state.borderActive === 'name' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                <div className="has-float-label">
                                    <input 
                                    id="name" 
                                    name='name' 
                                    type="text" 
                                    // onChange={this.handleChange} 
                                    value={'kemal'}
                                    disabled
                                    placeholder="Email or Phone number"/>
                                    <label htmlFor="email">Nama Lengkap Sesuai KTP</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 p-0 im">
                            <div className="col-md-6">
                                <p className="label-cus">Jenis Kelamin *</p>
                                <div className="box-sex">
                                    <div className={this.state.gender === 'pria'? "gen active-gen" : 'gen'} onClick={()=> this.setState({gender : 'pria'})}>Pria</div>
                                    <div className={this.state.gender === 'wanita'? "gen active-gen" : 'gen'}  onClick={()=> this.setState({gender : 'wanita'})}>Wanita</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 im">
                            <div className={this.state.borderActive === 'tempatlahir' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                <div className="has-float-label">
                                    <input 
                                    id="tempatlahir" 
                                    name='' 
                                    type="text" 
                                    // onChange={this.handleChange} 
                                    // value={'kemal'}
                                    placeholder="Email or Phone number"/>
                                    <label htmlFor="tempatlahir">Tempat Lahir *</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 im datapick">
                            <div className={this.state.borderActive === 'tanggallahir' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                <div className="has-float-label">
                                    <DatePicker selected={this.state.tanggalLahir} 
                                        onChange={date => this.setState({tanggalLahir: date})} 
                                        className="datapick-cus"
                                        dateFormat="dd - MMMM - yyyy"
                                        placeholderText='Tanggal Lahir'
                                        id='tanggallahir'
                                        showYearDropdown
                                        // withPortal
                                    />
                                    <label htmlFor="tanggallahir" className='icon-label'>
                                        <i className="fas fa-calendar-alt" ></i>
                                    </label>
                                    <label htmlFor="tanggallahir">Tanggal Lahir *</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 im">
                            <div className={this.state.borderActive === 'status' ?"w-input w-input-active" :"w-input"} onFocus={this.borderBlue} onBlur={()=> this.setState({borderActive : ''})}>
                                <div className="has-float-label">
                                    <input 
                                    id="status" 
                                    name='status' 
                                    type="text" 
                                    // onChange={this.handleChange} 
                                    // value={'kemal'}
                                    // disabled
                                    placeholder="status"/>
                                    <label htmlFor="status">Status Pernikahan</label>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                   </form>
               </div>

               <div className="foot-data-diri">
                   <p className="agreement">*Saya menjamin bahwa informasi yang saya cantumkan diatas adalah benar dan siap bertanggung jawab atas segala konsekuensi yang terjadi di kemudian hari, serta memiliki kemampuan analisis resiko terhadap saham penerbit dan memenuhi kriteria pemodal sesuai peraturan yang berlaku.</p>
                    <button type='submit'>SIMPAN & LANJUTKAN</button>
               </div>
           </div>
        );
    }
}

export default DataDiri;