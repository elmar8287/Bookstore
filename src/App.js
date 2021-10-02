import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navi from './components/nav';

const App = () => (
  <Provider store={store}>
    <Navi />
  </Provider>
);

export default App;
