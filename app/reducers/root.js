import Immutable from 'immutable';
import { playlistReducer } from './playlist';

const initialState = Immutable.fromJS({
  playlist: undefined,
  playlists: undefined
});

export function rootReducer(state = initialState, action) {
  return state
    .set('playlist', playlistReducer(state.get('playlist'), action));
}