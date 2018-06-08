import React, { Component } from 'react';
import Background from '../components/Background';
import Navigation from '../components/Navigation';
import Register from '../components/Register';

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Background>
          <Register/>
        </Background>
      </div>
    );
  }
}

export default RegisterPage;