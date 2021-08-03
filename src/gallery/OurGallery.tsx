import React from 'react';

// import className from 'classnames';

// type IVerticalFeatureRowProps = {
//   title: string;
//   description: string;
//   image: string;
//   imageAlt: string;
//   reverse?: boolean;
// };

const OurGallery = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h1>Galeri</h1>
            <div className="chipsofic-subtitle">Koleksi Foto Keripik iLiL</div>
          </div>
        </div>
      </div>
    </div>

    <div className="gallery-area">
      <div className="container-fluid">
        <div className="row wow fadeInUp">

          <div className="col-sm-6 col-md-3">
            <a title="Lorem Ipsum 01" className="gallery-lightbox" href={`${process.env.baseUrl}/assets/img/gallery-img-01.png`}>
              <i className="fa fa-plus" />
              <img src={`${process.env.baseUrl}/assets/img/gallery-img-01.png`} alt="" />
            </a>
          </div>
          <div className="col-sm-6 col-md-3">
            <a title="Lorem Ipsum 01" className="gallery-lightbox" href={`${process.env.baseUrl}/assets/img/gallery-img-02.png`}>
              <i className="fa fa-plus" />
              <img src={`${process.env.baseUrl}/assets/img/gallery-img-02.png`} alt="" />
            </a>
          </div>
          <div className="col-sm-6 col-md-3">
            <a title="Lorem Ipsum 01" className="gallery-lightbox" href={`${process.env.baseUrl}/assets/img/gallery-img-03.png`}>
              <i className="fa fa-plus" />
              <img src={`${process.env.baseUrl}/assets/img/gallery-img-03.png`} alt="" />
            </a>
          </div>
          <div className="col-sm-6 col-md-3">
            <a title="Lorem Ipsum 01" className="gallery-lightbox" href={`${process.env.baseUrl}/assets/img/gallery-img-04.png`}>
              <i className="fa fa-plus" />
              <img src={`${process.env.baseUrl}/assets/img/gallery-img-04.png`} alt="" />
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export { OurGallery };
