import { ADD_SONG, PLAY_NEXT } from 'constants/action-types';

export function addSong(title) {
  return { type: ADD_SONG, title };
}

export function playNext(title) {
  return { type: PLAY_NEXT };
}