import { rootReducer } from 'reducers/root';
import { addSong, playNext } from 'actions/playlist';
import Immutable from 'immutable';

describe('Root reducer', () => {
  const initialState = Immutable.fromJS({
    nowPlaying: null,
    songs: [
      { title: 'Hey Jude' },
      { title: 'Let It Be' },
      { title: 'Yesterday' }
    ]
  });

  it('should not change state on unknown action', () => {
    expect(rootReducer(initialState, { type: 'FAKE' })).toEqual(initialState);
  });

  it('should add song', () => {
    const nextState = Immutable.fromJS({
      nowPlaying: null,
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' },
        { title: 'TEST' }
      ]
    });

    expect(rootReducer(prevState, addSong('TEST'))).toEqual(nextState);
  });
});
