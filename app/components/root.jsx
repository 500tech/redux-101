import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import Playlist from 'components/playlist.jsx';

export default class Root extends Component {
  render() {
    return (
      <Grid fluid={ true }>
        <Row>
          <Col md={ 8 } mdOffset={ 2 }>

            <PageHeader>TeamTube</PageHeader>

            <Playlist />

          </Col>
        </Row>
      </Grid>
    );
  }
}
