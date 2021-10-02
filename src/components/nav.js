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
      </ul>
    </nav>
  );
};

export default Navi;
