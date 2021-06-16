import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <footer className="site-footer">
        <div className="footer-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-widget">
                            <h3 className="footer-logo"><img src={`${process.env.baseUrl}/assets/img/footer-logo.png`} alt=""/></h3>
                            <p>Chipsofic is a One page Landing Page Template designed for Chips, Fries and Food Product Sellers.<br/>It can be easily customized as it is well documented and developed using latest web technologies.</p>
                            <p><a href="https://live.themefic.com/cdn-cgi/l/email-protection#7c081904083c19041d110c1019521f1311"><i className="fa fa-envelope-o"></i> 
                            <span className="__cf_email__" data-cfemail="0f7b6a777b4f6a776e627f636a216c6062">[email&#160;protected]</span></a> | <a href="tel:123-456-789"><i className="fa fa-phone"></i> (123) 456-789</a> | <i className="fa fa-map-marker"></i> 123 ABC Road, USA</p>
                            
                            <div className="footer-social">
                                <ul>
                                    <li><a href="https://facebook.com" target="_blank"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="http://linkedin.com" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="https://pinterest.com" target="_blank"><i className="fa fa-pinterest-square"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer-copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        &copy; Copyright 2018 Chipsofic | All Rights Reserved
                    </div>
                </div>
                <a data-scroll href="index.html#top" className="go-top">Top <i className="fa fa-long-arrow-up"></i></a>
            </div>
        </div>
        
    </footer> 
);

export { Footer };
