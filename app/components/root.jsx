import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

export default class Root extends Component {

  render() {
    return (
      <Grid fluid={ true }>
        <Row>
          <Col md={ 8 } mdOffset={ 2 }>

            <PageHeader>TeamTube</PageHeader>
            
          </Col>
        </Row>
      </Grid>
    );
  }

}

Root.propTypes = {
  playlist: PropTypes.object.isRequired
};
