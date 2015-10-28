import React, { Component, PropTypes } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';

export default class SongDetails extends Component {
  _randomThumbnailUrl() {
    const randomHeight = 300 + Math.round(Math.random() * 10);
    const randomWidth  = 200 + Math.round(Math.random() * 10);

    return `http://lorempixel.com/g/${randomHeight}/${randomWidth}/cats`;
  }

  render() {
    return (
      <Row>
        <Col md={ 4 }>
          <Thumbnail
            src={ this.props.song.thumbnailUrl || this._randomThumbnailUrl() }
            style={{ minHeight: 160 }}
            bsSize="xs"/>
        </Col>

        <Col md={ 8 }>
          <h3>{ this.props.song.title }</h3>
        </Col>
      </Row>
    );
  }
}

SongDetails.propTypes = {
  song: PropTypes.object.isRequired
};
