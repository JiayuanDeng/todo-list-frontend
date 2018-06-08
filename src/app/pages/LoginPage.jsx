import React, { Component } from 'react';
import Background from '../components/Background';
import Navigation from '../components/Navigation';
import Login from '../components/Login';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Background>
          <Login />
        </Background>
      </div>
    );
  }
}

export default LoginPage;