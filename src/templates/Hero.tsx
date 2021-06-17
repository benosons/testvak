import React from 'react';

// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

const Hero = () => (
  <div className="header-area" style={{paddingBottom: '8%'}} >
       <div className="cbp-af-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            <a href="#top">
                                <h1>
                                  <img src={`${process.env.baseUrl}/assets/img/logo.png`} alt="chipsofic" />
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="main-menu">
                            <ul id="navigation">
                                <li><a data-scroll href="#about-us">TENTANG</a></li>
                                <li><a data-scroll href="#our-products">PRODUK</a></li>
                                <li><a data-scroll href="#pic-gallery">GALERI</a></li>
                                {/* <li><a data-scroll href="#our-team">TEAM</a></li> */}
                                <li><a data-scroll href="#customer-feedback">TESTIMONIAL</a></li>
                                <li><a data-scroll href="#purchase-now">PESAN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            <div className="container"><div className="responsive-menu-wrap"></div></div>
        
        <div className="container">
            <div className="row">
                <div className="top-area text-center">
                    <h1><img src={`${process.env.baseUrl}/assets/img/berani_coba.png`} alt="chipsofic" style={{width: '80%'}} /></h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <a data-scroll href="#about-us" className="btn">Tentang Kami</a>
                </div>
            </div>
        </div>
  </div>
);

export { Hero };
