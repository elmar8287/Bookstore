import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const onChange = (e) => {
    setInputBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...inputBook,
      id: uuidv4(),
    };
    dispatch(addBook(payload));
  };
  const { title, author, category } = inputBook;
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          name="title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={onChange}
        />
        <input
          name="author"
          type="text"
          placeholder="Book author"
          value={author}
          onChange={onChange}
        />
        <select name="category" id="categories" value={category} onChange={onChange}>
          <option value="1st category">1st category</option>
          <option value="2nd category">2nd category</option>
          <option value="3d category">3d category</option>
          <option value="4th category">4th category</option>
        </select>
        <button type="button" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBook;
