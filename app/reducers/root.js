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
        songs: [...state.songs, { title: action.title }]
      });

    case PLAY_NEXT:
      const randomIndex = Math.floor(Math.random() * state.songs.length);

      return Object.assign({}, state, {
        nowPlaying: state.songs[randomIndex]
      });

    default:
      return state;
  }
}
