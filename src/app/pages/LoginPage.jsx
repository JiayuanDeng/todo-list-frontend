import React, { Component } from 'react';
import Grid from '../components/Layout/Grid'
import Navigation from '../components/Navigation';
import Login from '../components/Login';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Grid container height='calc(100vh - 64px)' backgroundColor='#F8F8F8'>
          <Login/>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;