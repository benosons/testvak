import React from 'react';

const OurTeam = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-title text-center">
          <h1>TIM KAMI</h1>
          <div className="chipsofic-subtitle">Tim dalam proses produksi</div>
        </div>
      </div>
    </div>
    <div className="row wow fadeInUp">
      <div className="col-sm-3 text-center">
        <div className="single-team-item">
          <img src={`${process.env.baseUrl}/assets/img/default-team.png`} alt="" />
          <h3>Icha</h3>
          <p>Founder Keripik iLiL</p>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter-square" />
              </a>
            </li>
            <li>
              <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin-square" />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <i className="fa fa-pinterest-square" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3 text-center">
        <div className="single-team-item">
          <img src={`${process.env.baseUrl}/assets/img/team-bg-2.png`} alt="" />
          <h3>Beno</h3>
          <p>Tim IT</p>
          <ul>
            <li>
              <a href="https://instagram.com/benosons" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/benosons" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/retno-sonjaya/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3 text-center">
        <div className="single-team-item">
          <img src={`${process.env.baseUrl}/assets/img/default-team.png`} alt="" />
          <h3>Mah Jijil</h3>
          <p>Tim Produksi</p>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter-square" />
              </a>
            </li>
            <li>
              <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin-square" />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <i className="fa fa-pinterest-square" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3 text-center">
        <div className="single-team-item">
          <img src={`${process.env.baseUrl}/assets/img/default-team.png`} alt="" />
          <h3>Kika</h3>
          <p>Tim Umum</p>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter-square" />
              </a>
            </li>
            <li>
              <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin-square" />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <i className="fa fa-pinterest-square" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export { OurTeam };
