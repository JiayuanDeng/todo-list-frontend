import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { login } from "../actions/userActions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        email: '',
        password: ''
      },
      errorMessage: ''
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({
      auth: {
        ...this.state.auth,
        email: event.target.value
      },
      errorMessage: ''
    });
  }

  handleChangePassword(event) {
    this.setState({
      auth: {
        ...this.state.auth,
        password: event.target.value
      },
      errorMessage: ''
    });
  }

  handleLogin() {
    this.props.onLoginClick(this.state.auth)
  }

  render() {
    return (
      <Paper style={{width: 320, backgroundColor: '#FFFFFF', padding: 24}}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography variant='title' color='inherit' gutterBottom>Login</Typography>
            <Typography variant='body1' color='error' gutterBottom>{this.state.errorMessage}</Typography>
            <TextField
              onChange={this.handleChangeEmail}
              label='Email'
              placeholder='user@example.com'
              margin='dense'
              fullWidth
            />
            <br/>
            <TextField
              onChange={this.handleChangePassword}
              label='Password'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={this.handleLogin}
              variant='raised'
              color='primary'
              fullWidth
            >
              Log In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              href='/register'
              variant='raised'
              fullWidth
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: auth => dispatch(login(auth))
});

export default connect(null, mapDispatchToProps)(Login);