import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col, Thumbnail } from 'react-bootstrap';

export default class SongDetails extends PureComponent {
  render() {
    const details = this.props.song.toJS();

    return (
      <Row>
        <Col md={ 4 }>
          <Thumbnail src={ details.thumbnailUrl } bsSize="xs"/>
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
