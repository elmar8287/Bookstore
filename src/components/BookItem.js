import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({
  book: {
    title, author, category, id,
  },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="">
        <li className="">{category}</li>
        <li className="">{title}</li>
        <li className="">Elmar Abdulkarimov</li>
        <div className="">
          <p className="o">Comments</p>
          <button type="button" className="" onClick={() => dispatch(removeBook(id))}>
            Delete
          </button>
          <p className="">Edit</p>

        </div>
      </div>
      <div className="t">
        <div className="">
          <div className="" />
          <div className="">
            <p className="">88%</p>
            <p className="">Completed</p>
          </div>
        </div>
        <div className="">
          <li className="">Current Chapter</li>
          <li className="">Chapter 5</li>
          <button type="button" className="">Update progress</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
