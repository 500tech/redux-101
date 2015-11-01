import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Immutable from 'immutable';

import SongList from 'components/song-list.jsx';
import SongDetails from 'components/song-details.jsx';

describe('SongList component', () => {

  let Component;
  const songs = Immutable.fromJS([
    { id: 1, title: 'Hey Jude' },
    { id: 2, title: 'Let It Be' }
  ]);

  beforeAll(() => {
    Component = ReactTestUtils.renderIntoDocument(<SongList songs={ songs } />);
  });

  it('should render', () => {
    expect(Component).toBeDefined();
  });

  it('should render two SongDetails components', () => {
    const songDetailsComponents = ReactTestUtils
      .scryRenderedComponentsWithType(Component, SongDetails);

    expect(songDetailsComponents.length).toBe(2);

    songDetailsComponents.forEach((component, index) => {
      expect(component.props.song).toEqual(songs.get(index));
    })
  })

});
