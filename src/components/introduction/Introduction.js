import React from 'react';
import Scroll from '../common/Scroll';

import laptopCover from '../../images/laptopCover.png';

const Introduction = () => (
  <section id="intro" className="wrapper style2 spotlights show-case">
    <div className="inner">
      <div className="content-section">
        <div className="intro-nav">
          <h2 className="navLink">
            <a href="#work">Work</a>
          </h2>

          <h2 className="navLink">
            <a href="#projects">Projects</a>
          </h2>

          <h2 className="navLink">
            <a href="#about">About</a>
          </h2>
        </div>

        <div className="intro-content">
          <h1 className="title"> Daryl Rodrigo</h1>
          <div className="break"></div>
          <h3 className="description">
            {' '}
            Research Engineer - passionate about how <b>AI</b> can make a{' '}
            <b>positive</b> impact on the world.{' '}
          </h3>
        </div>
        <div className="intro-nav mobile-hide"></div>
      </div>

      <div className="content-section intro-image">
        <center>
          <img
            className="cover-image"
            src={laptopCover}
            alt=""
            data-position="center center"
          />
        </center>
      </div>
    </div>

    <ul className="icons social-links">
      <li>
        <a
          href="https://twitter.com/DarylRodrigo"
          target="_blank"
          className="icon fa-twitter fa-2x"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/DarylRodrigo"
          className="icon fa-github fa-2x"
          target="_blank"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/darylrodrigo"
          target="_blank"
          className="icon fa-linkedin fa-2x"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
    </ul>
  </section>
);

export default Introduction;
