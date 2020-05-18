import React from 'react';

import me from '../../images/me.jpeg';

const About = () => {
  return (
    <section id="about" className="wrapper style2 spotlights show-case">
      <div className="inner">
        <div className="parent">
          <span>About</span>
          <div className="under-line ul-projects"></div>
        </div>

        <div id="about">
          <div id="content">
            <h3>
              Daryl is an enthusiastic, social and creative software engineer
              with a passion for learning and artificial intelligence. He
              currently works as CTO for Metronome Technologies, a company that
              aims to have a positive social impact by making decarbonization
              profitable. He is a wine, coffee and travel lover and always up
              for drink.
            </h3>
          </div>
          <div id="image">
            <img src={me} alt="" data-position="center center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
