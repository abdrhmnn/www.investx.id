import React, { Component, Fragment } from 'react';
import arrowback from '../../images/arrowback.svg'
import logo from '../../images/logo.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment'
import { FormValidation } from "calidation";


import Select from 'react-dropdown-select';
import { Link } from 'react-router-dom';


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

    onSubmit = ({ fields, errors, isValid }) => {
        if (isValid) {
         
        } else {
          // `errors` is also an object!
          console.log('Something is wrong:', errors);
          
            // for (const property in errors) {
            //     console.log(`${property}: ${errors[property]}`);
            //     if (errors[property] !== null) {
            //         this[property].focus()
            //         break
            //     }
            // }
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
                <Link to='/select-form/'>
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
                       <li className='actbread'><div className="number">1</div> <span>Data Diri</span></li>
                       <li><div className="number">2</div> <span>Pendidikan & Pekerjaan</span></li>
                       <li><div className="number">3</div> <span>Dokumen</span></li>
                       <li><div className="number">4</div> <span>Bank</span></li>
                       <li><div className="number">5</div> <span>Preference</span></li>
                   </ul>
                   <hr/>
               </div>
               <div className="box-form-data">
                   {/* ///////////////////FORMS//////////////////// */}
                    <p className="title">Data Diri</p>
                    <FormValidation onSubmit={this.onSubmit} config={config} id='datadiri'>
                        {
                            ({ fields, errors, submitted })=>(

                                <div className="row">

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Nama Lengkap Sesua KTP</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name="username"
                                            // disabled
                                            // ref={ i => this.username = i}
                                            id=""/>
                                        </div>
                                    </div>
                                    <div className="error-input">
                                        {submitted && errors.username && <div className="error">{errors.username}</div> }
                                    </div>

                                    <div className="col-md-12 p-0">
                                        <div className="col-md-6">
                                            <p className="label-cus">Jenis Kelamin *</p>
                                            <div className="box-sex"  ref={ i => this.gender = i}>
                                                <div className={this.state.gender === 'pria'? "gen active-gen" : 'gen'} onClick={()=> this.setState({gender : 'pria'})}>Pria</div>
                                                <div className={this.state.gender === 'wanita'? "gen active-gen" : 'gen'}  onClick={()=> this.setState({gender : 'wanita'})}>Wanita</div>
                                            </div>
                                        </div>
                                        <div className="error-input">
                                            {submitted && this.state.gender === '' && <div className="error">{errors.gender}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="label-cus">Tempat Lahir *</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name="born"
                                            // value='kemal' 
                                            // disabled
                                            placeholder='Tempat Lahir'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            {submitted && errors.born && <div className="error">{errors.born}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6 datapick">
                                        <div className="label-cus">Tanggal Lahir *</div>
                                        <div className="date-wrap">
                                            <DatePicker selected={this.state.tanggalLahir} 
                                                onChange={date => this.setState({tanggalLahir: date})} 
                                                className="datapick-cus"
                                                dateFormat="dd - MMMM - yyyy"
                                                placeholderText='Tanggal Lahir'
                                                showYearDropdown
                                                id='dateborn'
                                                // withPortal
                                            />
                                            <label className='m-0' htmlFor="dateborn">
                                                <i class="fas fa-calendar-alt"></i>
                                            </label>
                                        </div>
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Status Pernikahan *</div>
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
                                        <div className="label-cus">Status Kewarganegaraan *</div>
                                        <Select
                                            options={[
                                                {label:'kemal', value: 'kemal'},
                                                {label:'aditya aditya ', value: 'aditya djfhkasd '},
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

                                    <div className="col-md-6">
                                        <div className="label-cus">No Handphone</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            value='0816161616' 
                                            disabled
                                            placeholder='Tempat Lahir'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="label-cus">No Telepon Rumah</div>
                                        <div className="frame-inp">
                                            <input 
                                            type="text" 
                                            name=""
                                            // value='kemal' 
                                            // disabled
                                            placeholder='No Telepon Rumah'
                                            />
                                        </div>
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-12 ">
                                        <div className="label-cus">Alamat Sesuai KTP *</div>
                                            <div className="frame-area">
                                                <textarea name="" rows="4" placeholder='Alamat Sesuai KTP' />  
                                            </div>
                                        <div className="error-input p-0">
                                            error
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="label-cus">Provinsi *</div>
                                        <Select
                                            options={[
                                                {label:'kemal', value: 'kemal'},
                                                {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                {label:'zul', value: 'zul'}]}
                                            className='rs'
                                            name='kawin'
                                            style={{boxShadow : 'none'}}
                                            placeholder='Pilih Provinsi'
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

                                    <div className="col-md-6 ">
                                        <div className="label-cus">Kota/Kabupaten *</div>
                                        <Select
                                            options={[
                                                {label:'kemal', value: 'kemal'},
                                                {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                {label:'zul', value: 'zul'}]}
                                            className='rs'
                                            name='kawin'
                                            style={{boxShadow : 'none'}}
                                            placeholder='Pilih Kota/Kabupaten'
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

                                    <div className="col-md-6 ">
                                        <div className="label-cus">Kecamatan *</div>
                                        <Select
                                            options={[
                                                {label:'kemal', value: 'kemal'},
                                                {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                {label:'zul', value: 'zul'}]}
                                            className='rs'
                                            name='kawin'
                                            style={{boxShadow : 'none'}}
                                            placeholder='Pilih Kecamatan'
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

                                    <div className="col-md-6 ">
                                        <div className="label-cus">Kode Pos *</div>
                                        <Select
                                            options={[
                                                {label:'kemal', value: 'kemal'},
                                                {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                {label:'zul', value: 'zul'}]}
                                            className='rs'
                                            name='kawin'
                                            style={{boxShadow : 'none'}}
                                            placeholder='Pilih Kode Pos'
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
                                        <div className="label-cus">Alamat Tinggal Sekarang</div>
                                            <div className="frame-area">
                                                <textarea name="" rows="4" placeholder='Alamat Tinggal Sekarang' />  
                                            </div> 
                                        <div className="error-input p-0">
                                            {/* error */}
                                        </div>
                                    </div>


                                    {/* OPTIONAL ADDRESS  */}
                                    <div className="col-md-12">
                                        <div className="w-addnow">
                                            <div className="w-check">
                                                <div className="cbox" onClick={()=> this.setState({isSameAddress : !this.state.isSameAddress})}>
                                                    {this.state.isSameAddress?<i className="fas fa-check"></i>:null}
                                                </div>
                                                <span>Sama Seperti KTP</span>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        !this.state.isSameAddress?
                                        <Fragment>
                                            <div className="col-md-6 ">
                                                <div className="label-cus">Provinsi</div>
                                                <Select
                                                    options={[
                                                        {label:'kemal', value: 'kemal'},
                                                        {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                        {label:'zul', value: 'zul'}]}
                                                    className='rs'
                                                    name='kawin'
                                                    style={{boxShadow : 'none'}}
                                                    placeholder='Pilih Provinsi'
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

                                            <div className="col-md-6 ">
                                                <div className="label-cus">Kota/Kabupaten</div>
                                                <Select
                                                    options={[
                                                        {label:'kemal', value: 'kemal'},
                                                        {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                        {label:'zul', value: 'zul'}]}
                                                    className='rs'
                                                    name='kawin'
                                                    style={{boxShadow : 'none'}}
                                                    placeholder='Pilih Kota/Kabupaten'
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

                                            <div className="col-md-6 ">
                                                <div className="label-cus">Kecamatan</div>
                                                <Select
                                                    options={[
                                                        {label:'kemal', value: 'kemal'},
                                                        {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                        {label:'zul', value: 'zul'}]}
                                                    className='rs'
                                                    name='kawin'
                                                    style={{boxShadow : 'none'}}
                                                    placeholder='Pilih Kecamatan'
                                                    onChange={(values) => console.log(values)}
                                                    closeOnSelect={true}
                                                    dropdownHandleRenderer={({ state }) => (
                                                        // if dropdown is open show "–" else show "+"
                                                        <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                    )}
                                                />
                                                {/* <div className="error-input p-0">
                                                    error
                                                </div> */}
                                            </div>

                                            <div className="col-md-6 ">
                                                <div className="label-cus">Kode Pos</div>
                                                <Select
                                                    options={[
                                                        {label:'kemal', value: 'kemal'},
                                                        {label:'aditya aditya ', value: 'aditya djfhkasd '},
                                                        {label:'zul', value: 'zul'}]}
                                                    className='rs'
                                                    name='kawin'
                                                    style={{boxShadow : 'none'}}
                                                    placeholder='Pilih Kode Pos'
                                                    onChange={(values) => console.log(values)}
                                                    closeOnSelect={true}
                                                    dropdownHandleRenderer={({ state }) => (
                                                        // if dropdown is open show "–" else show "+"
                                                        <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                    )}
                                                />
                                                {/* <div className="error-input p-0">
                                                    error
                                                </div> */}
                                            </div>
                                        </Fragment>
                                        :null
                                    }
                                    {/* OPTIONAL ADDRESS END */}

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

export default DataDiri;