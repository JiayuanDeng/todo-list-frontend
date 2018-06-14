import React, { Component } from 'react';
import { BrowserRouter, Route, /*Redirect*/ } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
// import {connect} from "react-redux";

// Components
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import TodoListPage from '../pages/TodoListPage';
import TestPage from '../pages/TestPage';
//
// const mapStateToProps = state => ({
//   loggedIn: state.user.loggedIn
// });
// const PrivateRoute = connect(mapStateToProps)(({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       props.loggedIn ? (<Component {...props} />) : (<Redirect to={{pathname: '/login', state: { from: props.location }}}/>)
//     }
//   />
// ));
//



class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/todolist" component={TodoListPage} />
          <Route path="/test" component={TestPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;