import { ADD_SONG, PLAY_NEXT } from 'constants/action-types';

const initialState = {
  nowPlaying: null,
  songs: [
    { title: 'Hey Jude' },
    { title: 'Let It Be' },
    { title: 'Yesterday' }
  ]
};

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_SONG:
      return Object.assign({}, state, {
        songs: state.songs.concat({ title: action.title })
      });

    case PLAY_NEXT:
      let nextId = 0;

      if (state.nowPlaying) {
        const prevId = state.songs.findIndex(song => song.title === state.nowPlaying.title);
        nextId = prevId + 1 >= state.songs.length ? 0 : prevId + 1;
      }

      return Object.assign({}, state, {
        nowPlaying: state.songs[nextId]
      });

    default:
      return state;
  }
}
