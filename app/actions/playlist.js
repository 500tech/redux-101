import { ADD_SONG } from 'constants/action-types';

export function addSong(title) {
  return { type: ADD_SONG, title };
}
