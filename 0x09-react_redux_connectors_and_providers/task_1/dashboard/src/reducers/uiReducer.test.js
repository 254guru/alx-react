import uiReducer from './uiReducer';
import * as types from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqualImmutable(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    }));
  });

  it('returns initial state when SELECT_COURSE action is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqualImmutable(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    }));
  });

  it('correctly changes isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: types.DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action)).toEqualImmutable(Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({})
    }));
  });
});
