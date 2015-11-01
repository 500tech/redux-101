import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { connect } from 'react-redux';
import { fetchPlaylists } from 'actions/playlists';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

export class Playlists extends PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchPlaylists());
  }

  _links() {
    return this.props.playlists.map((playlsitId) => {
      return (
        <ListGroupItem key={ playlsitId }>
          <Link to={ `/${playlsitId}` }>{ playlsitId }</Link>
        </ListGroupItem>
      );
    })
  }

  render() {
    return (
      <Panel header="Playlists">
        <ListGroup>
          { this._links() }
        </ListGroup>
      </Panel>
    );
  }
}

Playlists.propTypes = {
  playlists: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    playlists: state.get('playlists'),
  };
}

export default connect(mapStateToProps)(Playlists);
