import { rootReducer } from 'reducers/root';
import { addSong } from 'actions/playlist';

describe('Root reducer', () => {
  const initialState = {
    nowPlaying: null,
    songs: [
      { title: 'Hey Jude' },
      { title: 'Let It Be' },
      { title: 'Yesterday' }
    ]
  };

  let prevState;

  beforeEach(() => {
    prevState = Object.assign({}, initialState);
  });

  it('should not change state on unknown action', () => {
    expect(rootReducer(prevState, { type: 'FAKE' })).toEqual(prevState);
  });

  it('should add song', () => {
    const nextState = {
      nowPlaying: null,
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' },
        { title: 'foo' }
      ]
    };

    expect(rootReducer(prevState, addSong('foo')).toEqual(nextState);
  });
});