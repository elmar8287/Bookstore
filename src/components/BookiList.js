import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    {
      index: 1,
      title: 'title1',
      author: 'author1',
      categories: 'cat1',
    },
    {
      index: 2,
      title: 'title2',
      author: 'author2',
      categories: 'cat2',
    },
    {
      index: 1,
      title: 'title3',
      author: 'author3',
      categories: 'cat3',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          categories={book.categories}
        />
      ))}
    </ul>
  );
};

export default BookList;