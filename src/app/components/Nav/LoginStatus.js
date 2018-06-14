import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Grid from '../Layout/Grid';

class LoginStatus extends Component {
  render() {
    return this.props.loggedIn ? (
      <Grid hContainer>
        <Typography variant="body1" color="inherit">{this.props.email}</Typography>
        <Button to='/' onClick={() => {}} component={Link} color='inherit'>Logout</Button>
      </Grid>
    ) : (
      <Button to='/login' component={Link} color="inherit">Login</Button>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  email: state.user.email
});

export default connect(mapStateToProps, null)(LoginStatus);
