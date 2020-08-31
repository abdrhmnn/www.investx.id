import React, { Component, Fragment } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'
import Select from 'react-dropdown-select';

import { FormValidation } from "calidation";

import { Link } from 'react-router-dom';
import InputFiles from 'react-input-files';



class InfoPerusahaan extends Component {
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
               <Link to='/startup-form-dokumen'>
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
                       <li className='actbread'><div className="number">3</div> <span> Informasi Perusahaan</span></li>
                       <li><div className="number">4</div> <span>Informasi Finansial</span></li>
                       <li><div className="number">5</div> <span>Informasi Non Finansial</span></li>
                       <li><div className="number">5</div> <span>Media</span></li>
                   </ul>
                   <hr/>
               </div>
               <div className="box-form-data">
                   {/* ///////////////////FORMS//////////////////// */}
                    <p className="title">Informasi Perusahaan</p>
                    <FormValidation onSubmit={this.onSubmit} config={config} id='datadiri'>
                        {
                            ({ fields, errors, submitted })=>(

                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="label-cus">Nama Perusahaan*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Nama Perusahaan*'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {submitted && errors.born && <div className="error">{errors.born}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Merk Dagang*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Merk Dagang'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {submitted && errors.born && <div className="error">{errors.born}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Jenis Usaha*</div>
                                            <Select
                                                options={[
                                                    {label:'kemal', value: 'kemal'},
                                                    {label:'aditya aditya ', value: 'aditya djfhkasd dfmbashjfaskbjfkshff kjhfjskhfkshkfshjkfsk kjdhfkjshfkjsa'},
                                                    {label:'zul', value: 'zul'}]}
                                                className='rs'
                                                name='kawin'
                                                style={{boxShadow : 'none'}}
                                                // placeholder='status perkawinan'
                                                onChange={(values) => console.log(values)}
                                                closeOnSelect={true}
                                                dropdownHandleRenderer={({ state }) => (
                                                    // if dropdown is open show "–" else show "+"
                                                    <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                )}
                                            />
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Sub Jenis Usaha*</div>
                                            <Select
                                                options={[
                                                    {label:'kemal', value: 'kemal'},
                                                    {label:'aditya aditya ', value: 'aditya djfhkasd dfmbashjfaskbjfkshff kjhfjskhfkshkfshjkfsk kjdhfkjshfkjsa'},
                                                    {label:'zul', value: 'zul'}]}
                                                className='rs'
                                                name='kawin'
                                                style={{boxShadow : 'none'}}
                                                // placeholder='status perkawinan'
                                                onChange={(values) => console.log(values)}
                                                closeOnSelect={true}
                                                dropdownHandleRenderer={({ state }) => (
                                                    // if dropdown is open show "–" else show "+"
                                                    <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                )}
                                            />
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Kota Lokasi Usaha*</div>
                                            <Select
                                                options={[
                                                    {label:'kemal', value: 'kemal'},
                                                    {label:'aditya aditya ', value: 'aditya djfhkasd dfmbashjfaskbjfkshff kjhfjskhfkshkfshjkfsk kjdhfkjshfkjsa'},
                                                    {label:'zul', value: 'zul'}]}
                                                className='rs'
                                                name='kawin'
                                                style={{boxShadow : 'none'}}
                                                // placeholder='status perkawinan'
                                                onChange={(values) => console.log(values)}
                                                closeOnSelect={true}
                                                dropdownHandleRenderer={({ state }) => (
                                                    // if dropdown is open show "–" else show "+"
                                                    <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                )}
                                            />
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Alamat Lengkap Perusahaan*</div>
                                            <div className="frame-area">
                                                <textarea name="" rows="4" placeholder='Masukan Alamat Lengkap Perusahaan' />  
                                            </div>
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Bentuk Badan Usaha*</div>
                                            <Select
                                                options={[
                                                    {label:'kemal', value: 'kemal'},
                                                    {label:'aditya aditya ', value: 'aditya djfhkasd dfmbashjfaskbjfkshff kjhfjskhfkshkfshjkfsk kjdhfkjshfkjsa'},
                                                    {label:'zul', value: 'zul'}]}
                                                className='rs'
                                                name='kawin'
                                                style={{boxShadow : 'none'}}
                                                // placeholder='status perkawinan'
                                                onChange={(values) => console.log(values)}
                                                closeOnSelect={true}
                                                dropdownHandleRenderer={({ state }) => (
                                                    // if dropdown is open show "–" else show "+"
                                                    <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                )}
                                            />
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Lama Usaha ( Bulan )*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Lama Usaha ( Bulan )'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Jumlah Cabang*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Jumlah Cabang'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Jumlah Karyawan*</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Masukan Jumlah Karyawan'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Deskripsi Singkat Perusahaan ( Maksimal 500 karakter )*</div>
                                            <div className="frame-area">
                                                <textarea maxLength='500' name="" rows="4" placeholder='Masukan Deskripsi Singkat Perusahaan ( Maksimal 500 karakter )' />  
                                            </div>
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="label-cus">Logo perusahaan *</div>
                                        <div className="frame-inp file-frame">
                                            <span>Select File...</span>
                                            <InputFiles onChange={files => this.handleFileUpload(files,'logo-perusanaan')}>
                                                <button type='button'>Browse</button>
                                            </InputFiles>
                                        </div>
                                        <div className="error-input p-0">
                                            {/* {submitted && errors.born && <div className="error">{errors.born}</div>} */}
                                        </div>
                                        <p className="info-file">*File data <span>Pdf / Jpeg / PNG</span>  dan tidak lebih dari <span>5MB</span> </p>
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

export default InfoPerusahaan;