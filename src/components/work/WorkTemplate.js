import React from 'react';
import { Link } from 'gatsby';

const Feature = ({ href, image, company, title, description, to }) => (
  <section id="feature">
    <div className="feature-image">
      <a href={href} className="image" alt="image">
        <img
          className="image"
          src={image}
          alt=""
          data-position="center center"
        />
      </a>
    </div>

    <div className="feature-content">
      <div className="content">
        <div className="inner">
          <h3>
            <b>{company}</b>
          </h3>
          <h3 className="title">{title}</h3>

          <div className="break"></div>
          <p className="description">{description}</p>

          <a href={to.href} target="_blank">
            {to.label}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Feature;
