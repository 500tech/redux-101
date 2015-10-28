import 'bootstrap/dist/css/bootstrap.css';

import React    from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';

import Root from 'components/root.jsx';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Root/>
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
