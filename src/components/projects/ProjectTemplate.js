import React from 'react';
import { Link } from 'gatsby';

const ProjectTemplate = ({ href, image, title, description, to }) => (
  <section id="feature">
    <div className="feature-padding"></div>
    <div className="feature-image">
      <a href={href} className="image" alt="image">
        <img
          className="image shadow"
          src={image}
          alt=""
          data-position="center center"
        />
      </a>
    </div>

    <div className="feature-content">
      <div className="content">
        <div className="inner">
          <h3 className="title">
            <b>{title}</b>
          </h3>

          <div className="break"></div>
          <p className="description">{description}</p>

          <a href={to.href} target="_blank">
            {to.label}
          </a>
        </div>
      </div>
    </div>
    <div className="feature-padding"></div>
  </section>
);

export default ProjectTemplate;
