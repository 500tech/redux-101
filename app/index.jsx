import 'bootstrap/dist/css/bootstrap.css';

import React    from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';

import Root from 'components/root.jsx';

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Root/>
    </Provider>
  </div>,
  document.getElementById('root')
);
