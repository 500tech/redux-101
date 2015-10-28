import React, { Component } from 'react';

import Root from 'components/root.jsx';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      nowPlaying: null,
      songs: [
        { title: 'Hey Jude' },
        { title: 'Let It Be' },
        { title: 'Yesterday' }
      ]
    }
  }

  render() {
    return <Root playlist={ this.state }/>;
  }
}
