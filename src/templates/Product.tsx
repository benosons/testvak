import React from 'react';

import { OurProduct } from '../product/OurProduct';
// import { Section } from '../layout/Section';

const Product = () => (
  <div scroll-spy="true" id="our-products" className="chipsofic-content-block section-gray">
    <OurProduct
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
  </div>
);

export { Product };
