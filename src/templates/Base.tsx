import React from 'react';

import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { About } from './About';
import { Product } from './Product';
import { Video } from './Video';
import { Gallery } from './Gallery';
import { Testimoni } from './Testimoni';
import { Loading } from './Loading';
import { Checkout  } from './Checkout';

function Base() {
  return (
    <div>
      <Meta title={Config.title} description={Config.description} />
      <Loading />
      <Hero />
      <About />
      <Product />
      <Video />
      <Gallery />
      <Testimoni />
      <Checkout />
      <Footer />
    </div>
  );
}

export { Base };
