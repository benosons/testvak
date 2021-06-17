import React from 'react';

// import className from 'classnames';

// type IVerticalFeatureRowProps = {
//   title: string;
//   description: string;
//   image: string;
//   imageAlt: string;
//   reverse?: boolean;
// };

const OurProduct = () => {
 

  return (
    <div className="container">
    <div className="row">
       <div className="col-md-12">
             <div className="section-title text-center">
                  <h1>varian rasa</h1>
                  <div className="chipsofic-subtitle">Pilih sesuai dengan keinginan</div>
             </div>
         </div>
      </div>
      
     <div className="choose-our-chips-content-area text-center wow fadeInUp">
          <div className="row">
              <div className="col-sm-6 col-md-2 single-chips-item">
                {/* <img src={`${process.env.baseUrl}/assets/img/chips-01.png`} alt=""/> */}
                 <h3>Original</h3>
                 <div className="pricing"><span>Harga:</span> Rp. 13.500</div>
                  <p>Rasa natural dan gurih dengan aroma bawang yang menambah cita rasa.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Pesan</a>
              </div>
              <div className="col-sm-6 col-md-2 single-chips-item">
              {/* <img src={`${process.env.baseUrl}/assets/img/chips-02.png`} alt=""/> */}
                 <h3>Keju</h3>
                 <div className="pricing"><span>Harga:</span> Rp. 13.500</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Pesan</a>
              </div>
              <div className="col-sm-6 col-md-2 single-chips-item">
              {/* <img src={`${process.env.baseUrl}/assets/img/chips-03.png`} alt=""/> */}
                 <h3>Balado</h3>
                 <div className="pricing"><span>Harga:</span> Rp. 13.500</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Pesan</a>
              </div>
              <div className="col-sm-6 col-md-2 single-chips-item">
              {/* <img src={`${process.env.baseUrl}/assets/img/chips-04.png`} alt=""/> */}
                 <h3>Coklat</h3>
                 <div className="pricing"><span>Harga:</span> Rp. 14.500</div>
                  <p>Rasa dari bumbu kualitas terbaik manis nya pas dan rasa coklat yg tebal.</p>
                  <a className="btn chipsofic-small-btn" target="_blank" data-scroll href="https://api.whatsapp.com/send?phone=6285220968816&text=Halo%20Keripik%20iLiL%20Order%20dong%20yang%20Coklat">Pesan</a>
              </div>
              <div className="col-sm-6 col-md-2 single-chips-item">
              {/* <img src={`${process.env.baseUrl}/assets/img/chips-04.png`} alt=""/> */}
                 <h3>Pedas Level 1</h3>
                 <div className="pricing"><span>Harga:</span> Rp. 13.500</div>
                  <p>Rasa pedas yang memanjakan lidah, sampai membuat ketagihan.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Pesan</a>
              </div>
              <div className="col-sm-6 col-md-2 single-chips-item">
              {/* <img src={`${process.env.baseUrl}/assets/img/chips-04.png`} alt=""/> */}
                 <h3>Pedas Level 2</h3>
                 <div className="pricing"><span>Harga:</span> Rp. 13.500</div>
                  <p>Bagi kalian pecinta pedas wajib mencoba dan rasakan sensasinya.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Pesan</a>
              </div>
          </div>
      </div>  
  </div>
  );
};

export { OurProduct };
