export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => state.getIn(['notifications', 'entities', 'notifications']);

export const getUnreadNotifications = state =>
  getNotifications(state).filter(notification => !notification.get('isRead'));
