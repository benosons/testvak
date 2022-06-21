import React from 'react';

// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

const Hero = () => (
  <div className="gamfi_header_V2">
    <header id="gamfi-header" hidden className="gamfi-header-section transparent-header">
      <div className="menu-area menu-sticky">
        <div className="container">
          <div className="heaader-inner-area d-flex justify-content-between align-items-center">
            <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
              <div className="logo">
                <a href="index.html">
                  <img src={`${process.env.baseUrl}assets/images/logo.png`} alt="logo" />
                </a>
              </div>
            </div>
            <div className="gamfi-btn-area">
              <ul>
                <li>
                  <a id="nav-expander" className="nav-expander bar" href="index2.html#">
                    <div className="bar">
                      <span className="dot1" />
                      <span className="dot2" />
                      <span className="dot3" />
                    </div>
                  </a>
                </li>
                <li className="buy-token">
                  <a className="readon black-shape" href="index2.html#">
                    <span className="btn-text">Buy Token </span>
                    <i className="icon-arrow_down" />
                    <span className="hover-shape1" />
                    <span className="hover-shape2" />
                    <span className="hover-shape3" />
                  </a>
                  <ul>
                    <li>
                      <a href="index2.html#">
                        <img
                          alt=""
                          src={`${process.env.baseUrl}assets/images/icons/pancake.png"`}
                        />{' '}
                        PancakeSwap
                      </a>
                    </li>
                    <li>
                      <a href="index2.html#">
                        <img
                          alt=""
                          src={`${process.env.baseUrl}assets/images/icons/uniswap.png"`}
                        />{' '}
                        UniSwap
                      </a>
                    </li>
                    <li>
                      <a href="index2.html#">
                        <img alt="" src={`${process.env.baseUrl}assets/images/icons/market.png"`} />{' '}
                        CoinMarketCap
                      </a>
                    </li>
                    <li>
                      <a href="index2.html#">
                        <img alt="" src={`${process.env.baseUrl}assets/images/icons/gate.png"`} />{' '}
                        Gate.io
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="readon white-btn hover-shape"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img src={`${process.env.baseUrl}assets/images/icons/connect.png`} alt="Icon" />
                    <span className="btn-text">Connect </span>
                    <span className="hover-shape1" />
                    <span className="hover-shape2" />
                    <span className="hover-shape3" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
        <div className="close-btn">
          <a id="nav-close2" className="nav-close">
            <div className="line">
              <span className="line1" />
              <span className="line2" />
            </div>
          </a>
        </div>
        <div className="sidebar-logo mb-30">
          <a href="index.html">
            <img src={`${process.env.baseUrl}assets/images/logo-dark.png`} alt="" />
          </a>
        </div>
        <ul className="nav-menu">
          <li className="current-menu-item">
            <a href="index.html">Home</a>
            <ul className="sub-menu">
              <li>
                <a href="index.html">Home 1</a>
              </li>
              <li>
                <a href="index2.html">Home 2</a>
              </li>
              <li>
                <a href="index3.html">Home 3</a>
              </li>
              <li>
                <a href="index4.html">Home 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="project.html">Projects</a>
            <ul className="sub-menu">
              <li>
                <a href="project-clasic.html">Projects Clasic 1</a>
              </li>
              <li>
                <a href="project-clasic-2.html">Projects Clasic 2</a>
              </li>
              <li>
                <a href="project.html">Projects List</a>
              </li>
              <li>
                <a href="explore.html">Project Grid</a>
              </li>
              <li>
                <a href="calendar.html">Project Calendar</a>
              </li>
              <li>
                <a href="project-details.html">Project Details 1</a>
              </li>
              <li>
                <a href="project_details2.html">Project Details 2</a>
              </li>
              <li>
                <a href="igo-ranking.html">Project Ranking</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="staking.html">Staking</a>
            <ul className="sub-menu">
              <li>
                <a href="staking.html">Staking 1</a>
              </li>
              <li>
                <a href="staking-2.html">Staking 2</a>
              </li>
              <li>
                <a href="staking-3.html">Staking 3</a>
              </li>
              <li>
                <a href="staking-4.html">Staking 4</a>
              </li>
              <li>
                <a href="staking-5-lp.html">Staking 5 LP</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="index2.html#">Pages</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="project.html">Projects Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="project-clasic.html">Projects Clasic 1</a>
                  </li>
                  <li>
                    <a href="project-clasic-2.html">Projects Clasic 2</a>
                  </li>
                  <li>
                    <a href="project.html">Projects List</a>
                  </li>
                  <li>
                    <a href="explore.html">Project Grid</a>
                  </li>
                  <li>
                    <a href="calendar.html">Project Calendar</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details 1</a>
                  </li>
                  <li>
                    <a href="project_details2.html">Project Details 2</a>
                  </li>
                  <li>
                    <a href="igo-ranking.html">Project Ranking</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index2.html#">Stake & Farm</a>
                <ul className="sub-menu">
                  <li>
                    <a href="staking.html">Staking 1</a>
                  </li>
                  <li>
                    <a href="staking-2.html">Staking 2</a>
                  </li>
                  <li>
                    <a href="staking-3.html">Staking 3</a>
                  </li>
                  <li>
                    <a href="staking-4.html">Staking 4</a>
                  </li>
                  <li>
                    <a href="staking-5-lp.html">Staking 5 LP</a>
                  </li>
                  <li>
                    <a href="farm.html">Farming</a>
                  </li>
                  <li>
                    <a href="leaderboard.html">Leaderboard</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index2.html#">Other Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="get-in-touch.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="roadmap.html">Roadmap</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="igo-apply.html">Apply For Project</a>
                  </li>
                  <li>
                    <a href="teamdetails.html">Team Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index2.html#">Tokenomics & Tier</a>
                <ul className="sub-menu">
                  <li>
                    <a href="tier.html">Tier System 1</a>
                  </li>
                  <li>
                    <a href="tier-2.html">Tier System 2</a>
                  </li>
                  <li>
                    <a href="tier-3.html">Tier System 3</a>
                  </li>
                  <li>
                    <a href="tokenomics.html">Tokenomics</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index2.html#">Blog & Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-clasic.html">Blog classNameic</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Artcles Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="signin.html">Auth Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="kyc-process.html">KYC Step 01</a>
                  </li>
                  <li>
                    <a href="kyc-process-step2.html">KYC Step 02</a>
                  </li>
                  <li>
                    <a href="kyc-process-step3.html">KYC Step 03</a>
                  </li>
                  <li>
                    <a href="connect-wallet.html">Connect Wallet</a>
                  </li>
                  <li>
                    <a href="index2.html#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Wallet Module
                    </a>
                  </li>
                  <li>
                    <a href="signup.html">Register</a>
                  </li>
                  <li>
                    <a href="signin.html">Login</a>
                  </li>
                  <li>
                    <a href="forget-password.html">Forgot Password</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="index2.html#">Buy Token</a>
            <ul className="sub-menu">
              <li>
                <a href="index2.html#">PancakeSwap</a>
              </li>
              <li>
                <a href="index2.html#">UniSwap</a>
              </li>
              <li>
                <a href="index2.html#">CoinMarketCap</a>
              </li>
              <li>
                <a href="index2.html#">Gate.io</a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="readon black-shape-big connectWalletBtnforMobile"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={`${process.env.baseUrl}assets/images/icons/connect_white.png`} alt="Icon" />
              <span className="btn-text">Connect </span>
              <span className="hover-shape1" />
              <span className="hover-shape2" />
              <span className="hover-shape3" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <div id="sc-banner" className="sc-banner banner-bg position-relative">
      <div className="container">
        <div className="banner-content text-center">
          <div className="gamfi_V2_heroRocket">
            <img
              width="30%"
              src="assets/images/homeV2/rocket-front-color.png"
              alt="Rocket Img"
              className="Img-fluid RedRocketImg wow fadeInUp"
            />
            <span className="rocketshadow1">
              <img alt="" src="assets/images/homeV2/rocketStar.svg" className="img-fluid" />
            </span>
            <span className="rocketshadow2">
              <img alt="" src="assets/images/homeV2/rocketStar.svg" className="img-fluid" />
            </span>
            <span className="rocketshadow3">
              <img alt="" src="assets/images/homeV2/rocketStar.svg" className="img-fluid" />
            </span>
            <span className="rocketshadow4">
              <img alt="" src="assets/images/homeV2/rocketStar.svg" className="img-fluid" />
            </span>
            <span className="rocketshadow5">
              <img alt="" src="assets/images/homeV2/rocketStar.svg" className="img-fluid" />
            </span>
          </div>

          <h2 className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
            Tes Model Pembelajaran
            <span style={{ color: '#F82552' }}>VAK</span>
          </h2>

          <div
            className="description wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="0.7s"
            style={{ color: '#F82552' }}
          >
            (Visual, Auditory, Kinesthetic)
          </div>
          <a
            className="banner-btn wow fadeInUp black-shape-big"
            data-wow-delay="0.4s"
            data-wow-duration="0.7s"
            href="explore.html"
          >
            <span className="btn-text">Tes Sekarang</span>
            <span className="hover-shape1" />
            <span className="hover-shape2" />
            <span className="hover-shape3" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
