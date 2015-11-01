import { PLAY_NEXT, PLAYLIST_FETCH_SUCCESS } from 'constants/action-types';
import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

const initialState = Immutable.fromJS({
  nowPlaying: null,
  songs: []
});

export const playlistReducer = createReducer(initialState, {
  [PLAY_NEXT](state) {
    const randomIndex = Math.floor(Math.random() * state.get('songs').size);
    return state.set('nowPlaying', state.getIn(['songs', randomIndex]));
  },

  [PLAYLIST_FETCH_SUCCESS](state, action) {
    return Immutable.fromJS(action.playlist);
  }
});
