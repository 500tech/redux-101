import request from 'superagent';
import { ADD_SONG_ERROR, PLAY_NEXT, PLAYLIST_FETCHING, PLAYLIST_FETCH_SUCCESS, PLAYLIST_FETCH_ERROR } from 'constants/action-types';

export function addSong(youtubeUrl) {
  return (dispatch) => {
    request.post('http://redux101.500tech.com/playlists/redux101')
      .send({ youtubeUrl })
      .end((error, response) => {
        if (error) {
          return dispatch(addSongError(error));
        }

        dispatch(fetchPlaylist(response.body));
      });
  };
}

export function addSongError(error) {
  return { type: ADD_SONG_ERROR, error }
}

export function playNext(title) {
  return { type: PLAY_NEXT };
}

export function playlistFetchSuccess(playlist) {
  return { type: PLAYLIST_FETCH_SUCCESS, playlist }
}

export function playlistFetchError(error) {
 return { type: PLAYLIST_FETCH_ERROR, error }
}

export function playlistFetching() {
  return { type: PLAYLIST_FETCHING }
}

export function fetchPlaylist() {
  return (dispatch) => {
    dispatch(playlistFetching());

    request.get('http://redux101.500tech.com/playlists/redux101')
      .end((error, response) => {
        if (error) {
          return dispatch(playlistFetchError(error));
        }

        dispatch(playlistFetchSuccess(response.body));
      });
  };
}
