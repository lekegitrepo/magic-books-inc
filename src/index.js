import React from 'react';
import ReactDOM from 'react-dom';
import { v4 } from 'uuid';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.css';
import App from './components/App';
import rootReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

const INITIALSTATE = {
  books: [
    {
      id: v4(),
      title: 'High flying Birds',
      category: 'Action',
    },
    {
      id: v4(),
      title: 'Genius',
      category: 'Biography',
    },
    {
      id: v4(),
      title: "The Englishman's Boy",
      category: 'History',
    },
    {
      id: v4(),
      title: 'Dark Sea',
      category: 'Horror',
    },
    {
      id: v4(),
      title: 'There was a Country',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, INITIALSTATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
