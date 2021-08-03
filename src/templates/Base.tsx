import React from 'react';

import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { About } from './About';
import { Checkout } from './Checkout';
import { Footer } from './Footer';
import { Gallery } from './Gallery';
import { Hero } from './Hero';
import { Loading } from './Loading';
import { Modal } from './Modal';
import { Product } from './Product';
import { Team } from './Team';
import { Testimoni } from './Testimoni';
import { Video } from './Video';

function Base() {
  return (
    <div>
      <Meta title={Config.title} description={Config.description} />
      <Loading />
      <Hero />
      <About />
      <Product />
      <Video />
      <Modal />
      <Gallery />
      <Team />
      <Testimoni />
      <Checkout />
      <Footer />
    </div>
  );
}

export { Base };
