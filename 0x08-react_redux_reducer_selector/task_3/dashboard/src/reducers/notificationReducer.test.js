import notificationReducer from './notificationReducer';
import * as types from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('returns default state', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      notifications: [],
      filter: "DEFAULT"
    });
  });

  it('FETCH_NOTIFICATIONS_SUCCESS returns the data passed with isRead set to false for each item', () => {
    const action = {
      type: types.FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" }
      ]
    };
    expect(notificationReducer([], action)).toEqual({
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    });
  });

  it('MARK_AS_READ returns the data with the right item updated', () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    };
    const action = {
      type: types.MARK_AS_READ,
      index: 2
    };
    expect(notificationReducer(initialState, action)).toEqual({
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    });
  });

  it('SET_TYPE_FILTER sets the filter correctly', () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    };
    const action = {
      type: types.SET_TYPE_FILTER,
      filter: "URGENT"
    };
    expect(notificationReducer(initialState, action)).toEqual({
      filter: "URGENT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ]
    });
  });
});
