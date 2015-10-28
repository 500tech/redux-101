import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import Playlist from 'components/playlist.jsx';

export default class Root extends PureComponent {
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
