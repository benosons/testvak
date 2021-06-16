import React from 'react';

import { AboutUs } from '../about/AboutUs';
// import { Section } from '../layout/Section';

const About = () => (
  <div scroll-spy="true" id="about-us" className="chipsofic-content-block">
    <AboutUs
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
  </div>
);

export { About };
