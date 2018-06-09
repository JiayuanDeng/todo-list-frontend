import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { register } from "../actions/userActions";
import { connect } from "react-redux";

class Register extends Component {
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
    this.handleRegister = this.handleRegister.bind(this);
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

  handleRegister() {
    this.props.onRegisterClick(this.state.auth)
  }

  render() {
    return (
      <Paper style={{width: 320, padding: 24}}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography variant='title' color='inherit' gutterBottom>Register</Typography>
            <Typography variant='body1' color='error' gutterBottom>{this.state.errorMessage}</Typography>
            <TextField
              onChange={this.handleChangeEmail}
              label='Email'
              placeholder='user@example.com'
              margin='dense'
              fullWidth/>
            <TextField
              onChange={this.handleChangePassword}
              label='Password'
              margin='dense'
              fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={this.handleRegister}
              variant='raised'
              color='primary'
              fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRegisterClick: auth => dispatch(register(auth))
});

export default connect(null, mapDispatchToProps)(Register);