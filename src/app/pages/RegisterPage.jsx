import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Register from '../components/Register';
import Grid from '../components/Layout/Grid'

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Grid container height='calc(100vh - 64px)' backgroundColor='#F8F8F8'>
          <Register/>
        </Grid>
      </div>
    );
  }
}

export default RegisterPage;