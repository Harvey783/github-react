import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar background-primary">
      <Link to="/">
        <h3>
          <i className="fab fa-github"></i>
          Github React
        </h3>
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
