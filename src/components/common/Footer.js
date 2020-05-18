import React from 'react';
import londonSkyline from '../../images/londonSkyline.jpg';

import '../../assets/sass/main.scss';

const Footer = () => (
  <footer id="footer">
    <div id="line-parent">
      <div id="line"></div>
      <center>
        <img
          className="footer-image"
          src={londonSkyline}
          alt=""
          data-position="center center"
        />
      </center>
    </div>

    <div className="wrapper style1-alt">
      <div className="inner">
        <ul className="menu">
          <li>&copy; Daryl Rodrigo. All rights reserved.</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
