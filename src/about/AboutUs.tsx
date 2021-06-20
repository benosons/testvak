import React from 'react';

// import className from 'classnames';

const AboutUs = () => {
 

  return (
        <div className="container">
            <div className="row">
               <div className="about-us-section">
                    <div className="col-md-6">
                        <h1><span>Tentang</span> KERIPIK ilil</h1>
                        <h2>Berani Coba, Berani Ketagihan</h2>
                        <p style={{textAlign:'justify'}} >Sering muncul pertanyaan kenapa namanya Keripik "<b>iLiL</b>". Sejarah berdirinya keripik iLiL adalah saat itu owner masih mengenyam pendidikan S1 disalahsatu Universitas Swasta di kota Bandung. sebulan sekali owner pulang kampung ke Talaga (sebuah Kota di Majalengka) Owner sering sekali dibuatkan camilan keripik pisang oleh nenek dan keripikik ini jadi buah tangan keluarga dari kampung. saat itu perekonomian keluarga sedang sangat sulit tapi disamping itu juga owner harus tetap melanjutkan pendidikan S1. akhirnya karena terdesak kebutuhan ekonomi, owner mencoba untuk menjual oleh-oleh keripik pisang dari nenek ini ke teman sekelas, tanpa disangka keripik pisang ini sangat disukai. maka sejak itu Februari tahun 2014, owner memutuskan untuk produksi keripik pisang ini seadanya dengan modal Rp 50.000, dan memasarkannya ke teman dan tetangga. rasa awal yg pertama kali dibuat adalah original dan pedas. atas cerita tersebut untuk nama keripik ini diambil dari nama nenek owner yang dibalik yaitu Emak "<b>LiLi</b>".</p>
                        <p> Allhamdullilah segala puji Bagi Allah SWT atas segala rahmat dan karunia-Nya. sehingga Keripik iLiL bisa sampai sejauh ini.</p>
                        <p style={{textAlign:'justify'}} >"<b>Sahabat iLiL</b>" adalah panggilan sayang kepada seluruh pengemar Keripik iLiL. terimakasih sudah sangat setia menjadi bagian dari Keripik iLiL dan senantiasa mengharapkan serta mendukung Keripik iLiL, maka dari itu Keripik iLiL akan berusaha semaksimal mungkin untuk memberikan yang terbaik kepada semua sahabat iLiL. </p>
                        <div className="row">
                            <div className="col-sm-6">
                               <h3><i className="fa fa-thumbs-up" aria-hidden="true"></i><span>Tipis</span> dan <span>Renyah</span></h3>
                                <p>Pelopor keripik pisang yang tipis sehingga kerenyahan selalu ada disetiap gigitannya.</p>
                            </div>
                            <div className="col-sm-6">
                               <h3><i className="fa fa-heartbeat" aria-hidden="true"></i>Tanpa <span>MSG</span></h3>
                                <p>Berbahan dasar organik dan aman untuk semua kalangan, termasuk anak-anak.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                               <h3><i className="fa fa-money" aria-hidden="true"></i><span>Kualitas</span> Terjaga</h3>
                                <p>Diproduksi dengan mengutamakan kebersihan dan bahan-bahan yang aman.</p>
                            </div>
                            <div className="col-sm-6">
                               <h3><i className="fa fa-commenting" aria-hidden="true"></i><span>Garansi 100%</span></h3>
                                <p>Mengganti Produk baru apabila dalam pengiriman kami terdapat kekeliruan atau kerusakan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInRight">
                        <img src={`${process.env.baseUrl}/assets/img/about-chips.png`} alt=""/>
                    </div>
                </div>
            </div>
        </div>
  );
};

export { AboutUs };
