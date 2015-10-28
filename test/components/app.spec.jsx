import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import App from 'components/app.jsx';
import Root from 'components/root.jsx';

describe('App component', () => {

  let Component;
  const playlistState = {
    nowPlaying: null,
    songs: [
      { title: 'Hey Jude' },
      { title: 'Let It Be' },
      { title: 'Yesterday' }
    ]
  };

  beforeAll(() => {
    Component = ReactTestUtils.renderIntoDocument(<App />);
  });

  it('should render', () => {
    expect(Component).toBeDefined();
  });

  it('should pass playlist to Root component', () => {
    const rootComponent = ReactTestUtils
      .findRenderedComponentWithType(Component, Root);

    expect(rootComponent.props.playlist).toEqual(playlistState);
  });

});
