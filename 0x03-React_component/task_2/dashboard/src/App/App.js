import { getLatestNotification } from "../utils/utils";
import './App.css';
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handlekeyPress = this.handlekeyPress.bind(this);
    }
    listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
    ];

    listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: getLatestNotification() },
    ];
    handleKeyPress(e) {
        if (e.ctrlKey && e.key === "h") {
            alert("Logging you out");
            this.props.logOut();
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="heading-section">
                        <Notifications listNotifications={listNotifications} />
                        <Header />
                    </div>
                    {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {
        return;
    },
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

export default App;
