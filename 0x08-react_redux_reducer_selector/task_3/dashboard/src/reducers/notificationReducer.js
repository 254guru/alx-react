import * as types from '../actions/notificationActionTypes';

// Default state
const initialState = {
  notifications: [],
  filter: "DEFAULT"
};

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NOTIFICATIONS_SUCCESS:
      // Set isRead to false for each notification
      const notifications = action.data.map(notification => ({
        ...notification,
        isRead: false
      }));
      return {
        ...state,
        notifications
      };
    case types.MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        )
      };
    case types.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};

export default notificationReducer;
