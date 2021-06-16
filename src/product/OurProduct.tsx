import React from 'react';

import className from 'classnames';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const OurProduct = (props: IVerticalFeatureRowProps) => {
 

  return (
    <div className="container">
    <div className="row">
       <div className="col-md-12">
             <div className="section-title text-center">
                  <h1>Choose Your Flavor</h1>
                  <div className="chipsofic-subtitle">Choose any of our chips which better suits your needs</div>
             </div>
         </div>
      </div>
      
     <div className="choose-our-chips-content-area text-center wow fadeInUp">
          <div className="row">
              <div className="col-sm-6 col-md-3 single-chips-item">
                <img src={`${process.env.baseUrl}/assets/img/chips-01.png`} alt=""/>
                 <h3>Chipsofic Potato</h3>
                 <div className="pricing"><span>Price:</span> $40.00</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Order Now</a>
              </div>
              <div className="col-sm-6 col-md-3 single-chips-item">
              <img src={`${process.env.baseUrl}/assets/img/chips-02.png`} alt=""/>
                 <h3>Chipsofic Masala</h3>
                 <div className="pricing"><span>Price:</span> $50.00</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Order Now</a>
              </div>
              <div className="col-sm-6 col-md-3 single-chips-item">
              <img src={`${process.env.baseUrl}/assets/img/chips-03.png`} alt=""/>
                 <h3>Chipsofic Ring</h3>
                 <div className="pricing"><span>Price:</span> $30.00</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Order Now</a>
              </div>
              <div className="col-sm-6 col-md-3 single-chips-item">
              <img src={`${process.env.baseUrl}/assets/img/chips-04.png`} alt=""/>
                 <h3>Chipsofic Pasta</h3>
                 <div className="pricing"><span>Price:</span> $70.00</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a className="btn chipsofic-small-btn" data-scroll href="index.html#purchase-now">Order Now</a>
              </div>
          </div>
      </div>  
  </div>
  );
};

export { OurProduct };
