import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class AddSong extends Component {
  _submit(event) {
    event.preventDefault();

    this.props.addSong(this.refs.title.value);

    this.refs.title.value = '';
  }

  render() {
    return (
      <div className="form-group group-class">
        <form className="input-group" onSubmit={ this._submit.bind(this) }>
          <input type="text"
                 ref="title"
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