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
      <meta name="description" content="" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>testVAK</title>

      <link
        rel="apple-touch-icon"
        href="https://uigaint.com/demo/html/GamFi/apple-touch-icon.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={`${process.env.baseUrl}/assets/images/fav.png`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/bootstrap.min.css`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/animate.css`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/magnific-popup.css`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/owl.carousel.css`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/off-canvas.css`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/ico-moon-fonts.css`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/sc-spacing.css`}
      />
      <link rel="stylesheet" type="text/css" href={`${process.env.baseUrl}assets/css/slick.css`} />
      <link rel="stylesheet" href={`${process.env.baseUrl}assets/css/slick-theme.min.css`} />
      <link rel="stylesheet" type="text/css" href={`${process.env.baseUrl}assets/css/style.css`} />
      <link
        rel="stylesheet"
        type="text/css"
        href={`${process.env.baseUrl}assets/css/responsive.css`}
      />
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
