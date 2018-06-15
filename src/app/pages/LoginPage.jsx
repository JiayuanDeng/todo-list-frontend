import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Grid from '../components/Layout/Grid'
import Login from '../components/Login';
import { logout } from "../actions/userActions";

class LoginPage extends Component {
  render() {
    return this.props.loggedIn ? (
      <Grid container height='calc(100vh - 64px)' backgroundColor='#F8F8F8'>
        <Grid item container>
          <Typography variant='display2'>You are Logged in as {this.props.email}</Typography>
        </Grid>
        <Grid item container padding={24}>
          <Button to='/' onClick={this.props.onLogoutClick} component={Link} variant='raised'>Logout</Button>
        </Grid>
      </Grid>
    ) : (
      <Grid container height='calc(100vh - 64px)' backgroundColor='#F8F8F8'>
        <Login/>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  email: state.user.email
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);