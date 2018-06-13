import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import LoginPage from '../pages/LoginPage'


class PrivateRoute extends Component {
  render() {
    var { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          this.props.loggedIn ? (<Component {...props} />) : (<LoginPage/>)
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, null)(PrivateRoute);