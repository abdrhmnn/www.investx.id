import React, { Component } from 'react';
import arrowback from '../../images/arrowback.svg'

class DataDiri extends Component {
    render() {
        return (
           <div className="data-diri">
               <div className="back-button">
                   <img src={arrowback} alt=""/>
               </div>
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
                   <p className="title">Selamat datang Cecillia</p>
                   <p className="desc"> Terima kasih telah mendaftar di InvestX. <br/> Silahkan lengkapi daftar diri anda untuk mulai berinvestasi</p>
                   <form action="">
                    <div className="row">

                        <div className="col-md-4 ">
                            <p className="label">Tanggal Lahir</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-4 ">
                            <p className="label">Bulan</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-4 ">
                            <p className="label">Tahun</p>
                            <input type="text" className="w-100"/>
                        </div>

                        <div className="col-md-4 ">
                            <p className="label">Status Pernikahan</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-8 ">
                            <p className="label">Kewarganegaraan</p>
                            <input type="text" className="w-100"/>
                        </div>

                        <div className="col-md-12 ">
                            <p className="label">Latar Belakang</p>
                            <textarea className="w-100" id="" cols="30" rows="7"></textarea>
                        </div>

                        <div className="col-md-6 ">
                            <p className="label">No Ponsel</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-6 ">
                            <p className="label">No Telephone Rumah</p>
                            <input type="text" className="w-100"/>
                        </div>

                        <div className="col-md-12 ">
                            <p className="label">Alamat Sesuai KTP</p>
                            <textarea className="w-100" id="" cols="30" rows="4"></textarea>
                        </div>

                        <div className="col-md-4 ">
                            <p className="label">Provinsi</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-4 ">
                            <p className="label">Kabupaten</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-4 ">
                            <p className="label">Kecamatan</p>
                            <input type="text" className="w-100"/>
                        </div>

                        <div className="col-md-12 ">
                            <p className="label">Alamat Tinggal Sekarang</p>
                            <textarea className="w-100" id="" cols="30" rows="4"></textarea>
                        </div>

                        <div className="col-md-4 ">
                            <p className="label">Provinsi</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-4 ">
                            <p className="label">Kabupaten</p>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-md-4 ">
                            <p className="label">Kecamatan</p>
                            <input type="text" className="w-100"/>
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