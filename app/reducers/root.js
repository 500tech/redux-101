import { ADD_SONG, PLAY_NEXT, PLAYLIST_FETCH_SUCCESS } from 'constants/action-types';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  nowPlaying: null,
  songs: []
});

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_SONG:
      const songs = state.get('songs').push(Immutable.Map({ title: action.title }));
      return state.set('songs', songs);

    case PLAY_NEXT:
      const randomIndex = Math.floor(Math.random() * state.get('songs').size);

      return state.set('nowPlaying', state.getIn(['songs', randomIndex]));

    case PLAYLIST_FETCH_SUCCESS:
      return Immutable.fromJS(action.playlist);

    default:
      return state;
  }
}
