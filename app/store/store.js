import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'reducers/root';

const finalCreateStore = compose(
  // Allows return functions as actions
  applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(rootReducer);


export default store;
