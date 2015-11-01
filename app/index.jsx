import 'bootstrap/dist/css/bootstrap.css';

import React    from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';

import Root from 'components/root.jsx';

ReactDOM.render(
  <Provider store={ store }>
    <Root/>
  </Provider>,
  document.getElementById('root')
);
