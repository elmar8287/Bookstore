import React from 'react';
import { NavLink } from 'react-router-dom';
import './navi.css';

const Navi = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="Navi">
      <ul className="left-nav">
        <h1>Bookstore CMS</h1>
        {links.map((link) => (
          <li className="left-nav-li" key={link.id}>
            <NavLink to={link.path} className="left-nav-a" activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      <span className="right-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      </span>
      </ul>
    </nav>
  );
};

export default Navi;
