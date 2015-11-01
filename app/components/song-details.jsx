import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col, Glyphicon, Thumbnail } from 'react-bootstrap';

export default class SongDetails extends PureComponent {

  _voteButton(direction) {
    return this.props.vote
      ? <Glyphicon glyph={ `arrow-${direction}` }
                   onClick={ this._vote.bind(this, direction) }/>
      : null;
  }

  _vote(direction) {
    this.props.vote(direction, this.props.song.get('id'));
  }

  render() {
    const details = this.props.song.toJS();

    return (
      <Row>
        <Col md={ 1 }>
          { this._voteButton('up') }
          { details.votes }
          { this._voteButton('down') }
        </Col>

        <Col md={ 2 }>
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
  song: PropTypes.object.isRequired,
  vote: PropTypes.func
};
