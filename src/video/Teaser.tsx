import React from 'react';

import className from 'classnames';

const Teaser = () => {
  const handleClick = (e:any, path:string) => {
    e.preventDefault()
    alert(path)
  };

  return (
    <div className="container">
          <div className="row">
             <div className="col-md-12">
                   <div className="section-title text-center">
                        <a onClick={(e) => handleClick(e, "ctvlUvN6wSE")}><i className="fa fa-play-circle"></i></a>
                        <h1>Check our Process</h1>
                        <div className="chipsofic-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt</div>
                   </div>
               </div>
            </div> 
        </div>
  );
};

export { Teaser };
