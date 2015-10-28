import React, { Component, PropTypes } from 'react';

import AddSong from 'components/add-song.jsx';
import SongList from 'components/song-list.jsx';
import NowPlaying from 'components/now-playing.jsx';

export default class Playlist extends Component {
  render() {
    return (
      <div>

        <NowPlaying song={ this.props.nowPlaying }/>

        <SongList songs={ this.props.songs }/>

        <AddSong />

      </div>
    );
  }
}

Playlist.propTypes = {
  nowPlaying: PropTypes.object,
  songs: PropTypes.array.isRequired
};
