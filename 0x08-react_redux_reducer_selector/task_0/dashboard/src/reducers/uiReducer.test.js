import uiReducer from './uiReducer';
import * as types from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('returns initial state when SELECT_COURSE action is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('correctly changes isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: types.DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action)).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
  });
});
