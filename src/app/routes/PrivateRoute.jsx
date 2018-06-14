import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import LoginPage from '../pages/LoginPage'


class PrivateRoute extends Component {
  render() {
    var {component: Component, loggedIn, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return loggedIn ? (<Component {...props} />) : (<LoginPage/>)
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));