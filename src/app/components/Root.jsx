import React, { Component } from 'react';
import { BrowserRouter, Route, /*Redirect*/ } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Nav from './Navigation/Navigation';

// Components
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import TodoListPage from '../pages/TodoListPage';
import TestPage from '../pages/TestPage';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
            <PrivateRoute path="/todolist" component={TodoListPage}/>
            <Route path="/test" component={TestPage}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

//

export default Root;