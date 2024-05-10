import { Map, fromJS } from 'immutable';
import * as types from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// Initial state
const initialState = Map({
  notifications: Map({}),
  filter: 'DEFAULT',
});

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationsNormalizer(action.data));
    case types.SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case types.MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    default:
      return state;
  }
};

export default notificationReducer;
