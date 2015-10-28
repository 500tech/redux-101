import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AddSong extends Component {
  render() {
    return (
      <div className="form-group group-class">
        <form className="input-group" >
          <input type="text"
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
