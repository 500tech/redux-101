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
    const nextState = {
      nowPlaying: null,
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' },
        { title: 'foo' }
      ]
    };

    expect(rootReducer(initialState, addSong('foo')).toJS()).toEqual(nextState);
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

    expect(rootReducer(initialState, playNext()).toJS()).toEqual(nextState);
  });

  it('should play the next song one is playing', () => {
    const prevState = initialState.set('nowPlaying', initialState.getIn(['songs', 1]));

    const nextState = {
      nowPlaying: { title: 'Yesterday' },
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' }
      ]
    };

    expect(rootReducer(prevState, playNext()).toJS()).toEqual(nextState);
  });
});