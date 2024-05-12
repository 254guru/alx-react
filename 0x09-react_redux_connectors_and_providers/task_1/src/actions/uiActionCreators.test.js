import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middleWares = [thunk];
const mockStore = configureStore(middleWares);

describe("tests for UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "oluda@gmail.com";
    const password = "goodjob";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "oluda@gmail.com", password: "goodjob" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });

});
