import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  it('filterTypeSelected should return the filter type', () => {
    const state = Map({
      filter: 'DEFAULT'
    });
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications should return a list of notifications', () => {
    const state = Map({
      notifications: Map({
        entities: Map({
          notifications: Map({
            1: Map({ id: 1, isRead: false, type: "default", value: "New course available" }),
            2: Map({ id: 2, isRead: false, type: "urgent", value: "New resume available" }),
            3: Map({ id: 3, isRead: false, type: "urgent", value: "New data available" })
          })
        })
      })
    });
    expect(getNotifications(state)).toEqual(Map({
      1: Map({ id: 1, isRead: false, type: "default", value: "New course available" }),
      2: Map({ id: 2, isRead: false, type: "urgent", value: "New resume available" }),
      3: Map({ id: 3, isRead: false, type: "urgent", value: "New data available" })
    }));
  });

  it('getUnreadNotifications should return a list of unread notifications', () => {
    const state = Map({
      notifications: Map({
        entities: Map({
          notifications: Map({
            1: Map({ id: 1, isRead: false, type: "default", value: "New course available" }),
            2: Map({ id: 2, isRead: false, type: "urgent", value: "New resume available" }),
            3: Map({ id: 3, isRead: true, type: "urgent", value: "New data available" })
          })
        })
      })
    });
    expect(getUnreadNotifications(state)).toEqual(Map({
      1: Map({ id: 1, isRead: false, type: "default", value: "New course available" }),
      2: Map({ id: 2, isRead: false, type: "urgent", value: "New resume available" })
    }));
  });
});
