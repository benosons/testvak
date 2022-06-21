import React from 'react';

import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { Breadcrumb } from './Breadcrumbs';
import { Detail } from './Detail';
// import { Footer } from './Footer';
import { Hero } from './Hero';

function Base() {
  return (
    <div>
      <Meta title={Config.title} description={Config.description} />
      {/* <Loading /> */}
      <Hero />
      <Breadcrumb />
      <Detail />
      {/* <Footer /> */}
    </div>
  );
}

export { Base };
