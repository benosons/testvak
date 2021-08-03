import React from 'react';

import { MyModal } from '../modal/MyModal';
// import { Section } from '../layout/Section';

const Modal = () => (
  <div className="modal fade" id="myModal" role="dialog" aria-label="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="embed-responsive embed-responsive-16by9">
            <MyModal />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Modal };
