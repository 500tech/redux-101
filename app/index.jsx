import 'bootstrap/dist/css/bootstrap.css';

import React    from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import { Router, Route } from 'react-router';
import Root from 'components/root.jsx';
import Playlist from 'components/playlist.jsx';
import Playlists from 'components/playlists.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Router history={ history }>
        <Route component={ Root }>
          <Route path='/' component={ Playlists } />
          <Route path='/:playlistId' component={ Playlist } />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
