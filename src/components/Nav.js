import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
  const navStyle = {
    color: '#9e9ea7',
    textDecoration: 'none',
    cursor: 'pointer',
  };
  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h1 className="flex-left">BookStore</h1>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/books">
          <li>Books</li>
        </Link>
        <Link to="/categories" style={navStyle}>
          <li>Categories</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
