import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col, Thumbnail } from 'react-bootstrap';

export default class SongDetails extends PureComponent {
  _randomThumbnailUrl() {
    const randomHeight = 300 + Math.round(Math.random() * 10);
    const randomWidth  = 200 + Math.round(Math.random() * 10);

    return `http://lorempixel.com/g/${randomHeight}/${randomWidth}/cats`;
  }

  render() {
    const details = this.props.song.toJS();

    return (
      <Row>
        <Col md={ 4 }>
          <Thumbnail
            src={ details.thumbnailUrl || this._randomThumbnailUrl() }
            style={{ minHeight: 160 }}
            bsSize="xs"/>
        </Col>

        <Col md={ 8 }>
          <h3>{ details.title }</h3>
        </Col>
      </Row>
    );
  }
}

SongDetails.propTypes = {
  song: PropTypes.object.isRequired
};
