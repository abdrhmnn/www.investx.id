import React, { Component } from "react";

import QuestionReveal from "../shared/QuestionReveal";

class FAQ extends Component {
  state = {
    expanded: "",
  };

  render() {
    const questions = [
      {
        q: "Apa itu InvestX?",
        a:
          "InvestX membantu anda menghimpun dana dengan mudah dengan aturan yang lebih mudah dibanding pinjaman bank dan mekanisme penawaran saham yang lebih sederhana dibanding IPO. Dengan sistem equity crowdfunding, anda hanya perlu membagi dividen kepada investor tanpa bunga atau denda.",
      },
      {
        q: "Bagaimana cara kerja Crowdfunding?",
        a: "Crowdfunding memiliki dua pilar yaitu adanya website atau situs untuk diakses dan tentunya pemilik modal. Usaha atau bisnis yang dimiliki nantinya akan didaftarkan ke dalam sebuah website dan ditampilkan agar para pemilik dana dapat menanamkan dananya untuk disalurkan dengan tujuan membantu pemilik usaha untuk mengembangkan usahanya. Agar terkumpul biasanya proses tersebut akan memakan waktu beberapa hari, apabila dana yang sudah ditargetkan terkumpul maka dana tersebut dapat dicairkan ke rekening pemilik usahanya.",
      },
      {
        q: "Kenapa InvestX?",
        a: "Sebagian dari Anda mungkin bertanya mengapa harus melalui sebuah website jika ingin berinvestasi pada bisnis UKM. Pemilik dana bisa saja mencari UKM yang bisnisnya bagus dan memiliki rencana untuk ekspansi usahanya. Pemilik dana bisa melakukan negosiasi langsung dan jika beruntung akan ada kesepakatan yang bagus untuk bekerja sama dengan UKM tersebut. Namun, InvestX menawarkan beberapa kemudahan bagi anda sebagai pemilik dana untuk berinvestasi di bisnis UKM. Yang InvestX dapat tawarkan untuk Anda sebagai pemilik modal diantaranya: Ada banyak pilihan bisnis UKM. Jika Anda ingin berinvestasi di banyak bisnis, maka InvestX merupakan pilihan yang tepat. Anda tidak perlu repot-repot mencari UKM dan menemui owner dari bisnis tersebut satu-persatu. InvestX menawarkan beberapa pilihan bisnis UKM dari berbagai bidang mulai dari F&B, ritel, dan jasa yang dapat Anda pilih sesuai dengan keinginan Anda. Tidak perlu terlibat operasional Berinvestasi pada UKM di InvestX memungkinkan Anda mendapatkan keuntungan dari dividen usaha sebuah UKM tanpa perlu terlibat langsung dalam operasional usaha UKM. Praktis Proses pembuatan akun, memilih UKM, investasi, mendapatkan dividen, hingga pengambilan dividen melalui rekening bank dapat dilakukan melalui satu platform saja. Seleksi Ketat Startup Kurang dari 3% startup yang mendaftar lolos uji dari komite investasi kami. Sehingga sudah dipastikan bahwa perusahaan yang menjadi peserta merupakan perusahaan yang terpercaya. Modal terjangkau Dengan sistem Equity Crowdfunding, membuat kegiatan berinvestasi dengan memiliki sebagian saham di bisnis UKM dapat dimulai dengan modal yang relatif rendah.",
      },
      {
        q: "Bagaimana cara bergabung dengan InvestX?",
        a: "Untuk bergabung di InvestX anda bisa melakukan langkah sebagai berikut: Registrasi di halaman utama klik menu login Setelah itu klik Sign Up. Selanjutnya isi dengan data diri seperti nama lengkap yang sesuai dengan KTP, alamat email, nomor handphone aktif, dan password. Setelah selesai klik register. Setelah itu akan muncul permintaan kode OTP yang akan dikirimkan melalui SMS ke nomor yang dicantumkan saat registrasi awal. Setelah sms kode OTP masuk bisa dimasukkan kode OTP nya dan kemudian setelah berhasil bisa dilanjutkan verifikasi email yang sudah didaftarkan, lalu buka email anda dan klik verifikasi email.  Apabila jika sudah verifikasi email, Anda bisa masuk kembali ke akun InvestX dengan melakukan login, kemudian mengisi biodata, isi biodata dengan lengkap, kemudian klik lanjutkan lalu tunggu diverifikasi oleh admin. Setelah akun Anda terverifikasi, Anda sudah dapat berinvestasi di InvestX."
      },
      {
        q: "Apa yang harus saya ketahui sebelum menjadi investor?",
        a: "Perlu diketahui bahwa pembelian saham bisnis merupakan aktivitas beresiko tinggi. Anda berinvestasi pada bisnis yang mungkin saja mengalami kenaikan dan penurunan kinerja bahkan mengalami kegagalan. Harap menggunakan pertimbangan ekstra dan membuat keputusan untuk membeli saham. Hanya gunakan dana yang siap anda lepaskan atau siap disimpan dalam jangka waktu yang panjang.",
      },
      {
        q: "Apa yang harus saya ketahui sebelum mendaftarkan startup?",
        a: "ipsum",
      },
      {
        q: "Bagaimana cara mendapat keuntungan di InvestX?",
        a: "ipsum",
      },
      {
        q: "Bagaimana cara mengurangi resiko investasi di InvestX?",
        a: "ipsum",
      },
      {
        q: "Berapa maksimal dana yang dihimpun melalui InvestX?",
        a: "ipsum",
      },
      {
        q: "Berapa jumlah minimum nominal investasi di InvestX?",
        a: "Dengan hanya 10$, sebenarnya anda sudah dapat berinvestasi di InvestX. Namun batas minimum tersebut tidak diterapkan pada semua usaha UKM, melainkan masing-masing UKM menentukan berapa jumlah minimum untuk para investor dapat memulai investasi.",
      },
    ];

    const midIndex = Math.ceil(questions.length / 2);
    const leftQuestion = questions.slice(0, midIndex);
    const rightQuestion = questions.slice(midIndex, questions.length);

    return (
      <div className="faq">
        <h1 className="title">Pertanyaan yang sering diajukan</h1>
        <br className="mobile-hidden" />
        <br className="mobile-hidden" />
        <div className="row justify-content-between">
          <div className="col-md-6">
            {leftQuestion.map((data, index) => (
              <QuestionReveal key={index} data={data} />
            ))}
          </div>
          <div className="col-md-6">
            {rightQuestion.map((data, index) => (
              <QuestionReveal key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
