import React from 'react';

// import className from 'classnames';

const IndexBreadcrumbs = () => (
  <div className="gamfi-breadcrumbs-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="breadcrumbs-area sec-heading">
            <div className="sub-inner mb-15">
              <a className="breadcrumbs-link" href="index.html">
                Home
              </a>
              <span className="sub-title">Team Deails</span>
              <img className="heading-left-image" src="assets/images/icons/steps.png" alt="Steps" />
            </div>
            <h2 className="title mb-0">MEMBER DETAILS</h2>
          </div>
        </div>
        <div className="col-lg-7 breadcrumbs-form" />
      </div>
    </div>
  </div>
);

export { IndexBreadcrumbs };
