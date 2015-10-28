import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import SongDetails from 'components/song-details.jsx';
import { Thumbnail } from 'react-bootstrap';

describe('SongDetails Component', () => {

  let Component;
  const song = {
    thumbnailUrl: 'TEST_URL',
    title: 'TEST_SONG'
  };

  beforeAll(() => {
    Component = ReactTestUtils.renderIntoDocument(<SongDetails song={ song }/>);
  });

  it('should render', () => {
    expect(Component).toBeDefined();
  });

  it('should render two SongDetails components', () => {
    const thumbnail = ReactTestUtils
      .findRenderedComponentWithType(Component, Thumbnail);

    const songTitle = ReactTestUtils
      .findRenderedDOMComponentWithTag(Component, 'h3');

    expect(thumbnail.props.src).toBe(song.thumbnailUrl);
    expect(songTitle.innerText).toBe(song.title);
  })

});
