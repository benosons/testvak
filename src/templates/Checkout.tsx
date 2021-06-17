import React from 'react';

import { GetCheckout } from '../checkout/GetCheckout';

const Checkout = () => (
  <div scroll-spy="true" id="purchase-now" className="chipsofic-content-block purchase-block">
      <GetCheckout />
  </div>

);

export { Checkout };