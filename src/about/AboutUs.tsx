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
                        <p>Diam nonummy nibh, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio.</p>
                        <div className="row">
                            <div className="col-sm-6">
                               <h3><i className="fa fa-ban" aria-hidden="true"></i><span>No</span> Preservatives</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem doloremque ea eum eveniet quas.</p>
                            </div>
                            <div className="col-sm-6">
                               <h3><i className="fa fa-heartbeat" aria-hidden="true"></i><span>Health</span> Friendly</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem doloremque ea eum eveniet quas.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                               <h3><i className="fa fa-money" aria-hidden="true"></i><span>Low</span> Cost</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem doloremque ea eum eveniet quas.</p>
                            </div>
                            <div className="col-sm-6">
                               <h3><i className="fa fa-commenting" aria-hidden="true"></i><span>24/7</span> Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem doloremque ea eum eveniet quas.</p>
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
