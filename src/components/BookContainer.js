import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../redux/categories/categories';
import Navi from './nav';
import BookList from './BookList';
import InputBook from './InputBook';

const BookContainer = () => (
  <>
    <Navi />
    <Switch>

      <Route exact path="/">
        <div>
          <BookList />
          <InputBook />
        </div>

      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </>
);

export default BookContainer;