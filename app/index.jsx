import 'bootstrap/dist/css/bootstrap.css';

import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from 'reducers/root';

import Root from 'components/root.jsx';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <Root/>
  </Provider>,
  document.getElementById('root')
);
