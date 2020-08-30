import React from 'react';
import './index.css';

import pic from './desert_view.jpg';

function Footer() {
  return (
    <img
      class="bottom-img"
      src={pic}
      alt="beautiful_desert_view"
      draggable="false"
      // (dragstart)="false;"
    />
  );
}

export default Footer;
