import request from 'superagent';
import { UPDATE_PLAYLISTS } from 'constants/action-types';

export function fetchPlaylists() {
  return (dispatch) => {
    request.get('http://redux101.500tech.com/playlists')
      .end((error, response) => {
        dispatch(updatePlaylists(response.body));
      });
  };
}

export function updatePlaylists(playlists) {
  return { type: UPDATE_PLAYLISTS, playlists }
}
