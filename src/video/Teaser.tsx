import React from 'react';

// import className from 'classnames';

const Teaser = () => {
  const handleClick = (e:any) => {
    e.preventDefault();

    // const iframe = document.getElementById('iframeYoutube');
    // iframe.src = `https://www.youtube.com/embed/${path}`;

    $('#myModal').modal('show');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <a onClick={(e) => handleClick(e)}><i className="fa fa-play-circle" /></a>
            <h1>Check our Video</h1>
            <div className="chipsofic-subtitle">Berani Coba Berani Ketagihan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Teaser };
