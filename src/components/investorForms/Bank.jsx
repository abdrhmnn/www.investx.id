import React, { Component } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment'
import { FormValidation } from "calidation";


import Select from 'react-dropdown-select';
import { Link } from 'react-router-dom';


class Bank extends Component {
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

    onSubmit = ({ fields, errors, isValid }) => {
        if (isValid) {
         
        } else {
          // `errors` is also an object!
          console.log('Something is wrong:', errors);
        }
    }

    render() {
        const config = {
            username: {
              isRequired: "Name lengkap field is required!",
            },
            gender: {
                isRequired: "Jenis kelamin field is required!",
            },

            born: {
                isRequired: "Tempat lahir field is required!",
            },

            password: {
              isRequired: "Password field required!",
              isMinLength: {
                message: "16+ character password is required",
                length: 16
              }
            }
          };
        return (
           <div className="all-forms-style">
               <div className="bg">
                    <div className="bg-round"></div> 
               </div>
               <Link to='/investor-form-dokumen'>
                    <div className="back-button">
                        <img src={arrowback} alt=""/>
                    </div>
               </Link>

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
                       <li className='actbread'><div className="number">4</div> <span>Bank</span></li>
                       <li><div className="number">5</div> <span>Preference</span></li>
                   </ul>
                   <hr/>
               </div>
               <div className="box-form-data">
                   {/* ///////////////////FORMS//////////////////// */}
                    <p className="title">BANK</p>
                    <FormValidation onSubmit={this.onSubmit} config={config} id='datadiri'>
                        {
                            ({ fields, errors, submitted })=>(

                                <div className="row">

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Nama Bank *</div>
                                            <Select
                                                options={[
                                                    {label:'kemal', value: 'kemal'},
                                                    {label:'aditya aditya ', value: 'aditya djfhkasd dfmbashjfaskbjfkshff kjhfjskhfkshkfshjkfsk kjdhfkjshfkjsa'},
                                                    {label:'zul', value: 'zul'}]}
                                                className='rs'
                                                name='kawin'
                                                style={{boxShadow : 'none'}}
                                                placeholder='Pilih Nama Bank'
                                                onChange={(values) => console.log(values)}
                                                closeOnSelect={true}
                                                dropdownHandleRenderer={({ state }) => (
                                                    // if dropdown is open show "–" else show "+"
                                                    <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                )}
                                            />
                                        <div className="error-input p-0">
                                            {/* error */}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Kantor Cabang *</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Kantor Cabang'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {submitted && errors.born && <div className="error">{errors.born}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Nama Pemilik Rekening *</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Nama Pemilik Rekening'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {submitted && errors.born && <div className="error">{errors.born}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">No Rekening *</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="number" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan No Rekening'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {submitted && errors.born && <div className="error">{errors.born}</div>}
                                        </div>
                                    </div>



                                </div>
                            )
                        }
                    </FormValidation>

                   {/* ///////////////////FORMS END//////////////////// */}

               </div>

               <div className="foot-data-diri">
                   <p className="agreement">*Saya menjamin bahwa informasi yang saya cantumkan diatas adalah benar dan siap bertanggung jawab atas segala konsekuensi yang terjadi di kemudian hari, serta memiliki kemampuan analisis resiko terhadap saham penerbit dan memenuhi kriteria pemodal sesuai peraturan yang berlaku.</p>
                    <button type='submit' form='datadiri'>SIMPAN & LANJUTKAN</button>
               </div>
           </div>
        );
    }
}

export default Bank;