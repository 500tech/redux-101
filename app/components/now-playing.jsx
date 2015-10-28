import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';

import SongDetails from 'components/song-details.jsx';

export default class NowPlaying extends PureComponent {
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
