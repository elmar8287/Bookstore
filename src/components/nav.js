import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './navi.css';
import books from '../redux/books/books';
import categories from '../redux/categories/categories';

export default function Navi() {
  return (
    <Router>
      <div className="main">
        <header>
          <nav>
            <h1 className="appTitle">Bookstore CMS</h1>
            <ul>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <span><img src=""></img></span>
        </header>
        

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
      </div>
    </Router>
  );
}
