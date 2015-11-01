import { UPDATE_PLAYLISTS } from 'constants/action-types'
import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

const initialState = Immutable.List([]);

export const playlistsReducer = createReducer(initialState, {
  [UPDATE_PLAYLISTS](state, action) {
    return Immutable.List(action.playlists);
  }
});
