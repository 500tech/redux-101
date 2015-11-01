import request from 'superagent';
import * as actions from 'actions/playlist';

describe('Playlist actions', () => {

  let action;
  const fakeDispatch = jasmine.createSpy('fakeDispatch');

  describe('fetchPlaylist', () => {

    beforeEach(() => action = actions.fetchPlaylist());
    afterEach(() => fakeDispatch.calls.reset());

    it('should fire fetching action', () => {
      action(fakeDispatch);

      expect(fakeDispatch)
        .toHaveBeenCalledWith(actions.playlistFetching());
    });

    it('should fire success action', () => {
      spyOn(request, 'get').and.returnValue({
        end: (cb) => cb(null, { body: 'TEST' })
      });

      action(fakeDispatch);

      expect(fakeDispatch)
        .toHaveBeenCalledWith(actions.playlistFetchSuccess('TEST'));
    });

    it('should fire error action', () => {
      spyOn(request, 'get').and.returnValue({
        end: (cb) => cb('ERROR', { body: 'TEST' })
      });

      action(fakeDispatch);

      expect(fakeDispatch)
        .not.toHaveBeenCalledWith(actions.playlistFetchSuccess('TEST'));

      expect(fakeDispatch)
        .toHaveBeenCalledWith(actions.playlistFetchError('ERROR'));
    });
  });

});
