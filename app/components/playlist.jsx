import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { connect } from 'react-redux';
import { addSong, playNext, fetchPlaylist } from 'actions/playlist';

import AddSong from 'components/add-song.jsx';
import SongList from 'components/song-list.jsx';
import NowPlaying from 'components/now-playing.jsx';

export class Playlist extends PureComponent {
  componentDidMount() {
    const playNextInterval = setInterval(
      () => this.props.dispatch(playNext()),
      5000
    );

    this.setState({ playNextInterval });

    this.props.dispatch(fetchPlaylist());
  }

  componentWillUnmount() {
    clearInterval(this.state.playNextInterval);
  }

  _addSong(youtubeUrl) {
    this.props.dispatch(addSong(youtubeUrl));
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
  songs: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    nowPlaying: state.get('nowPlaying'),
    songs: state.get('songs')
  };
}

export default connect(mapStateToProps)(Playlist);
