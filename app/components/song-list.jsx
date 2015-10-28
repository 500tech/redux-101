import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import SongDetails from 'components/song-details.jsx';

export default class SongList extends Component {

  _songList() {
    return this.props.songs.map((song) => {
      return <SongDetails song={ song } key={ song.id }/>;
    });
  }

  render() {
    if (!this.props.songs.length) {
      return null;
    }

    return (
      <Panel header="Playlist">
        { this._songList() }
      </Panel>
    );
  }

}

SongList.propTypes = {
  songs: PropTypes.array.isRequired
};
