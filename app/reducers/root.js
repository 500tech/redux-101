import { PLAY_NEXT, PLAYLIST_FETCH_SUCCESS } from 'constants/action-types';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  nowPlaying: null,
  songs: []
});

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case PLAY_NEXT:
      let nextId = 0;

      if (state.get('nowPlaying')) {
        const prevId = state.get('songs').toJS().findIndex(song => song.title === state.getIn(['nowPlaying', 'title']));
        nextId = prevId + 1 >= state.get('songs').size ? 0 : prevId + 1;
      }

      return state.set('nowPlaying', state.getIn(['songs', nextId]));

    case PLAYLIST_FETCH_SUCCESS:
      return Immutable.fromJS(action.playlist);

    default:
      return state;
  }
}
