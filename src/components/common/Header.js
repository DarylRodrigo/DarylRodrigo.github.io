import React from 'react';
import { Link } from 'gatsby';

import '../../assets/sass/main.scss';

const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      Hyperspace
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/generic">Projects</Link>
        </li>
        <li>
          <Link to="/elements">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
