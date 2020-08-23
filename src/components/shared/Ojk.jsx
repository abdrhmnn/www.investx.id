import React, { Component } from 'react';

import logoOJK from '../../images/ojk.svg'

class Ojk extends Component {
    render(){
        return (
            <ojk>
                <div className="container">
                    <header> Attention </header>
                    <div className="row">
                    
                        <div className="col-md-6  border-right">
                            
                            <p>InvestX adalah Penyelenggara layanan urun dana melalui penawaran saham berbasis teknologi informasi (equity crowdfunding) dimana penerbit menawarkan saham bisnis kepada investor melalui jaringan sistem elektronik yang telah mendapatkan izin dari Otoritas Jasa Keuangan.</p>
                            <p>Sesuai dengan Pasal 23 Peraturan Otoritas Jasa Keuangan No. 37 Tahun 2018 tentang Layanan Urun Dana melalui Penawaran Saham Berbasis Teknologi Informasi atau Equity Crowdfunding (“POJK 37/2018”), kami menyatakan bahwa :</p>
                            <ul >
                                <li> OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.</li>
                                <br/>
                                <li>INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.</li>
                                <br/>
                                <li>PENERBIT DAN PENYELENGGARA, BAIK SENDIRI SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.</li>
                            </ul>
                            
                        </div>

                        <div className="col-md-6">
                            <p>Pembelian saham bisnis merupakan aktivitas beresiko tinggi. Anda berinvestasi pada bisnis yang mungkin saja mengalami kenaikan dan penurunan kinerja bahkan mengalami kegagalan.
                            <br/>Harap menggunakan pertimbangan ekstra dalam membuat keputusan untuk membeli saham. Ada kemungkinan Anda tidak bisa menjual kembali saham bisnis dengan cepat.
                            <br/>Lakukan diversifikasi investasi, hanya gunakan dana yang siap Anda lepaskan (affors to loose) dan atau disimpan dalam jangka panjang.
                            <br/>InvestX tidak memaksa pengguna untuk membeli saham bisnis sebagai investasi. Semua keputusan pembelian merupakan keputusan independen oleh pengguna.
                            <br/>InvestX bertindak sebagai penyelenggara urun dana yang mempertemukan pemodal dan penerbit, bukan sebagai pihak yang menjalankan bisnis (Penerbit). Otoritas Jasa Keuangan bertindak sebagai regulator dan pemberi izin, bukan sebagai penjamin investasi.
                            <br/>Keputusan pembelian saham, sepenuhnya merupakan hak dan tanggung jawab Pemodal (investor).
                            <br/>Dengan membeli saham di Santara berarti Anda sudah menyetujui seluruh syarat dan ketentuan serta memahami semua risiko investasi termasuk resiko kehilangan sebagian atau seluruh modal.
                            </p>
                            <img src={logoOJK} alt="logo"/>
                        </div>
                    </div>
                    <p>© 2020 InvestX.id All Rights Reserved</p>
                </div>
           
            </ojk>
        );
    }
  }
export default Ojk;