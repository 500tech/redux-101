import { createStore, compose } from 'redux';
import { rootReducer } from 'reducers/root';
import { devTools, persistState } from 'redux-devtools';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(rootReducer);

export default store;