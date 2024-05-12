import { AppContext, user } from "./AppContext";
import React from 'react';
import { connect } from 'react-redux'; // Import connect from Redux
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { isLoggedIn, isNotificationDrawerVisible } from '../reducers/uiReducer'; // Import isLoggedIn and isNotificationDrawerVisible selectors
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'; // Import action creators

class App extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut(); // Update this.props.logOut()
    }
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut = () => {
    this.setState({
      user: user,
    });
  }

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter((notification) => notification.id !== id);
    this.setState({ listNotifications: newList });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              markNotificationAsRead={this.markNotificationAsRead}
              listNotifications={this.listNotifications}
              displayDrawer={this.props.displayDrawer} // Use this.props.displayDrawer
              handleDisplayDrawer={this.props.displayNotificationDrawer} // Use action creator from props
              handleHideDrawer={this.props.hideNotificationDrawer} // Use action creator from props
            />
            <Header />
          </div>
          {this.props.isLoggedIn ? ( // Use this.props.isLoggedIn
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
              ipsa iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false, // Add default prop for displayDrawer
  displayNotificationDrawer: () => {}, // Add default prop for displayNotificationDrawer
  hideNotificationDrawer: () => {}, // Add default prop for hideNotificationDrawer
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  logOut: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state), // Connect the uiReducer and the isLoggedIn property
  displayDrawer: isNotificationDrawerVisible(state), // Connect the uiReducer and the isNotificationDrawerVisible property
});

export default connect(mapStateToProps, { displayNotificationDrawer, hideNotificationDrawer })(App); // Connect mapStateToProps and action creators to the component

