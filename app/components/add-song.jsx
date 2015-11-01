import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';

export default class AddSong extends PureComponent {
  _submit(event) {
    event.preventDefault();

    this.props.addSong(this.refs.url.value);

    this.refs.url.value = '';
  }

  render() {
    return (
      <div className="form-group group-class">
        <form className="input-group" onSubmit={ this._submit.bind(this) }>
          <input type="text"
                 ref="url"
                 placeholder="Song URL"
                 className="form-control"/>

          <span className="input-group-btn">
            <Button type="submit">Add</Button>
          </span>
        </form>
      </div>
    );
  }
}

AddSong.propTypes = {
  addSong: PropTypes.func.isRequired
};
