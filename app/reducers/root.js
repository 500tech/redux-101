import Immutable from 'immutable';
import { playlistReducer } from 'reducers/playlist';
import { playlistsReducer } from 'reducers/playlists';

const initialState = Immutable.fromJS({
  playlist: undefined,
  playlists: undefined
});

export function rootReducer(state = initialState, action) {
  return state
    .set('playlist', playlistReducer(state.get('playlist'), action))
    .set('playlists', playlistsReducer(state.get('playlists'), action));
}
