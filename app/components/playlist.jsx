import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addSong } from 'actions/playlist';

import AddSong from 'components/add-song.jsx';
import SongList from 'components/song-list.jsx';
import NowPlaying from 'components/now-playing.jsx';

export class Playlist extends Component {
  _addSong(title) {
    this.props.dispatch(addSong(title));
  }

  render() {
    return (
      <div>

        <NowPlaying song={ this.props.nowPlaying }/>

        <SongList songs={ this.props.songs }/>

        <AddSong addSong={ this._addSong.bind(this) }/>

      </div>
    );
  }
}

Playlist.propTypes = {
  nowPlaying: PropTypes.object,
  songs: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    nowPlaying: state.nowPlaying,
    songs: state.songs
  };
}

export default connect(mapStateToProps)(Playlist);
