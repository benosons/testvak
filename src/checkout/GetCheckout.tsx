import React from 'react';

const GetCheckout = () => {
  return(
    <div className="container">
           <div className="row">
                <div className="col-md-12">
                   <div className="section-title text-center">
                        <h1>Pesan Sekarang Juga</h1>
                        <div className="chipsofic-subtitle">Please use any of the two methods below to purchase.</div>
                    </div>

                   <div className="purchase now text-center wow fadeInUp">
                       <div className="row">
                            <div className="col-sm-6">
                                <a className="btn chipsofic-purchase-btn btn-right" href="https://shopee.co.id/karisa_official" target="_blank">
                                  <ul>
                                    <li>
                                      <i className="fa fa-shopping-cart"></i>Checkout Lewat<br /><span>Shopee</span>
                                    </li>
                                  </ul>
                                </a>
                             </div>
                           <div className="col-sm-6">
                                <a className="btn chipsofic-purchase-btn btn-left" href="https://api.whatsapp.com/send?phone=6282218401847&text=Hallo%20Keripik%20iLil%20Order%20dong%20" target="_blank">
                                  <ul>
                                    <li><i className="fa fa-whatsapp"></i>Pesan Lewat<br /><span>whatsapp</span></li>
                                  </ul>
                                </a>
                             </div>
                       </div>   
                    </div>
               </div>
           </div>
        </div>
  );
};

export { GetCheckout };