import React from 'react';

// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { CenteredFooter } from '../footer/CenteredFooter';
// import { Section } from '../layout/Section';
// import { Logo } from './Logo';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-widget">
              <h3 className="footer-logo">
                <img src={`${process.env.baseUrl}/assets/img/footer-logo.png`} alt="" />
              </h3>
              <p>
                Informasi Produk, Reseller dan Keterangan Lainnya bisa menghubungi Kontak yang
                tercantum dibawah ini.
              </p>
              <p>
                <a href="tel:+6282218401847">
                  <i className="fa fa-phone" /> (+62) 822-1840-1847
                </a>{' '}
                |{' '}
                <a href="https://live.themefic.com/cdn-cgi/l/email-protection#7c081904083c19041d110c1019521f1311">
                  <i className="fa fa-envelope-o" />
                  <span className="__cf_email__" data-cfemail="0f7b6a777b4f6a776e627f636a216c6062">
                    [email&#160;protected]
                  </span>
                </a>{' '}
                |{' '}
                <a href="https://instagram.com/keripikilil" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram" /> @keripikilil
                </a>{' '}
                | <i className="fa fa-map-marker" /> Bandung, Indonesia
              </p>

              {/* <div className="footer-social">
                                <ul>
                                    <li><a href="https://facebook.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="http://linkedin.com" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="https://pinterest.com" target="_blank"><i className="fa fa-pinterest-square"></i></a></li>
                                </ul>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            &copy; Copyright 2021 Keripik iLiL | All Rights Reserved
          </div>
        </div>
        <a data-scroll href="#top" className="go-top">
          Top
          <i className="fa fa-long-arrow-up" />
        </a>
      </div>
    </div>
  </footer>
);

export { Footer };
