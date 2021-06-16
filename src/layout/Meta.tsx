import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Config } from '../utils/Config';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <link
        rel="apple-touch-icon"
        href={`${process.env.baseUrl}/apple-touch-icon.png`}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.baseUrl}/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.baseUrl}/favicon-16x16.png`}
        key="icon16"
      />
      <link rel="icon" href={`${process.env.baseUrl}/assets/img/favicon.png`} key="favicon" />

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/bootstrap.min.css`}/>

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/font-awesome.min.css`}/>

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/animate.min.css`}/>

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/owl.carousel.css`}/>

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/magnific-popup.css`}/>
      
      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/slicknav.min.css`}/>

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/animated-header.css`}/>

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/style.css`}/>

      <link rel="stylesheet" href={`${process.env.baseUrl}/assets/css/responsive.css`}/>

      <script src={`${process.env.baseUrl}/assets/js/jquery-2.2.4.min.js`}/>

      <script src={`${process.env.baseUrl}/assets/js/jquery.magnific-popup.min.js`}/>
    
      <script src={`${process.env.baseUrl}/assets/js/owl.carousel.min.js`}/>
      
      <script src={`${process.env.baseUrl}/assets/js/jquery.slicknav.min.js`}/>
      
      <script src={`${process.env.baseUrl}/assets/js/smooth-scroll.min.js`}/>
      
      <script src={`${process.env.baseUrl}/assets/js/wow-1.3.0.min.js`}/>
      
      <script src={`${process.env.baseUrl}/assets/js/modal.js`}/>
      
      <script src={`${process.env.baseUrl}/assets/js/waypoints.min.js`}/>
      
      <script src={`${process.env.baseUrl}/assets/js/jquery.counterup.min.js`}/>
      
      <script defer src={`${process.env.baseUrl}/assets/js/classie.js`}/>
      
      <script defer src={`${process.env.baseUrl}/assets/js/cbpAnimatedHeader.min.js`}/>
      
      <script src={`${process.env.baseUrl}/assets/js/active.js`}/>


    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: Config.locale,
        site_name: Config.site_name,
      }}
    />
  </>
);

export { Meta };
