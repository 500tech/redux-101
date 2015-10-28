import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import SongDetails from 'components/song-details.jsx';

export default class NowPlaying extends Component {
  render() {
    if (!this.props.song) {
      return null;
    }

    return (
      <Panel bsStyle="info" header="Now playing">
        <SongDetails song={ this.props.song }/>
      </Panel>
    );
  }
}

NowPlaying.propTypes = {
  song: PropTypes.object
};
