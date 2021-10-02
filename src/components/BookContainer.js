import { Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import InputBook from './InputBook';
import Categories from '../redux/categories/categories';
import Navi from './nav';

function BookContainer() {
  return (
    <>
      <Navi />
      <Switch>
        <Route exact path="/">
          <div className="books">
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
}

export default BookContainer;
