import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './navi.css';
import Books from '../redux/books/books';
import Categories from '../redux/categories/categories';

export default function Navi() {
  return (
    <Router>
      <nav className="panel-pg">
          <nav className="navi">
            <div className="list-container">
            <h1 className="Bookstore-CMS">Bookstore CMS</h1>
            <ul className="menuList">
              <li>
                <Link to="/books">BOOKS</Link>
              </li>
              <li>
                <Link to="/categories">CATEGORIES</Link>
              </li>
            </ul>
            </div>
            <div className="account"><i>user</i></div>
          </nav>
            
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </nav>
    </Router>
  );
}
