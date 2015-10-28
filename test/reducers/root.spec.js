import { rootReducer } from 'reducers/root';
import { addSong, playNext } from 'actions/playlist';

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

    expect(rootReducer(prevState, addSong('foo'))).toEqual(nextState);
  });

  it('should play the next song when none are playing', () => {
    const nextState = {
      nowPlaying: { title: 'Hey Jude' },
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' }
      ]
    };

    expect(rootReducer(prevState, playNext())).toEqual(nextState);
  });

  it('should play the next song one is playing', () => {
    prevState = {
      nowPlaying: { title: 'Let It Be' },
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' }
      ]
    };

    const nextState = {
      nowPlaying: { title: 'Yesterday' },
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' }
      ]
    };

    expect(rootReducer(prevState, playNext())).toEqual(nextState);
  });
});