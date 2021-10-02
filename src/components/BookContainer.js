import React from 'react';
import Navi from './nav';
import BookList from './BookList';
import InputBook from './InputBook';

const BookContainer = () => (
  <main>
    <Navi />
    <div>
      <BookList />
      <InputBook />
    </div>
  </main>
);

export default BookContainer;
