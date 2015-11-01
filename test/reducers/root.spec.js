import { rootReducer } from 'reducers/root';
import { addSong, playNext } from 'actions/playlist';
import Immutable from 'immutable';

describe('Root reducer', () => {
  const initialState = Immutable.fromJS({
    playlist: {
      nowPlaying: null,
      songs: []
    },
    playlists: []
  });

  it('should not change state on unknown action', () => {
    expect(rootReducer(initialState, { type: 'FAKE' }).toJS()).toEqual(initialState.toJS());
  });

});
