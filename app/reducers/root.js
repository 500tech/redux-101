import { ADD_SONG } from 'constants/action-types';

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

    default:
      return state;
  }
}
