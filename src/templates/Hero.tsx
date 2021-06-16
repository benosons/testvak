import React from 'react';

// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

const Hero = () => (
  <div className="header-area">
       <div className="cbp-af-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            <a href="index.html#top">
                                <h1>
                                  <img src={`${process.env.baseUrl}/assets/img/logo.png`} alt="chipsofic" />
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="main-menu">
                            <ul id="navigation">
                                <li><a data-scroll href="index.html#about-us">ABOUT</a></li>
                                <li><a data-scroll href="index.html#our-products">PRODUCTS</a></li>
                                <li><a data-scroll href="index.html#pic-gallery">GALLERY</a></li>
                                <li><a data-scroll href="index.html#our-team">TEAM</a></li>
                                <li><a data-scroll href="index.html#customer-feedback">TESTIMONIALS</a></li>
                                <li><a data-scroll href="index.html#our-blog">BLOG</a></li>
                                <li><a data-scroll href="index.html#purchase-now">PURCHASE</a></li>
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
                    <h1>Chipsofic: Leader of Potato Chips</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <a data-scroll href="index.html#about-us" className="btn">Learn More</a>
                </div>
            </div>
        </div>
  </div>
);

export { Hero };
