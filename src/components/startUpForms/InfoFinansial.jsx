import React, { Component, Fragment } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'

import { FormValidation } from "calidation";

import { Link } from 'react-router-dom';



class InfoFinansial extends Component {
    state={
        borderActive : '',
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

    handleFileUpload = (file, name)=>{
        console.log('====================================');
        console.log(file[0]);
        console.log(name);
        console.log('====================================');
        this.setState({modalFile : {}})
    } 

    onSubmit = ({ fields, errors, isValid }) => {
        if (isValid) {
         
        } else {
          // `errors` is also an object!
          console.log('Something is wrong:', errors);
        }
    }

    handleFileUpload = (file, name)=>{

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
           <div className="all-forms-style" >
               <div className="bg">
                    <div className="bg-round"></div> 
               </div>
               <Link to='/startup-form-informasi-perusahaan'>
                    <div className="back-button">
                        <img src={arrowback} alt=""/>
                    </div>
               </Link>
               <div className="logo-invest">
                   <img src={logo} alt=""/>
               </div>
               <p className="title">Selamat datang Cecillia</p>
                <p className="desc"> Terima kasih telah mendaftar di InvestX. <br/> Silahkan lengkapi daftar diri anda untuk untuk mengajukan funding</p>
                <div className="steps-startup">
                   <ul>
                       <li><div className="number">1</div> <span>Identitas Calon Penerbit</span></li>
                       <li ><div className="number">2</div> <span>Dokumen Calon Penerbit</span></li>
                       <li ><div className="number">3</div> <span> Informasi Perusahaan</span></li>
                       <li className='actbread'><div className="number">4</div> <span>Informasi Finansial</span></li>
                       <li><div className="number">5</div> <span>Informasi Non Finansial</span></li>
                       <li><div className="number">5</div> <span>Media</span></li>
                   </ul>
                   <hr/>
               </div>
               <div className="box-form-data">
                   {/* ///////////////////FORMS//////////////////// */}
                    <p className="title">Informasi Finansial</p>
                    <FormValidation onSubmit={this.onSubmit} config={config} id='datadiri'>
                        {
                            ({ fields, errors, submitted })=>(

                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="label-cus">Besar dana yang dibutuhkan*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Besar dana yang dibutuhkan'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Rata-rata omset per bulan tahun ini*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Rata-rata omset per bulan tahun ini'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Rata-Rata laba per bulan tahun ini*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Rata-Rata laba per bulan tahun ini'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Rata-rata omset per bulan tahun sebelumnya*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Rata-rata omset per bulan tahun sebelumnya'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Rata-rata laba per bulan tahun sebelumnya*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Rata-rata laba per bulan tahun sebelumnya'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Total hutang bank/ lembaga pembiayaan*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Total hutang bank/ lembaga pembiayaan'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Nama bank / lembaga pembiayaan*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Nama bank / lembaga pembiayaan'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">kdjhaksd</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan kkkkkk'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Total modal disetor*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Total modal disetor'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Nilai per lembar saham*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Nilai per lembar saham'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>}*/}
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

export default InfoFinansial;