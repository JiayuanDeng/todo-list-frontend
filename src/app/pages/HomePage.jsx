import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '../components/Layout/Grid'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Grid container alignLeft
              width='100vw' height={96} padding={24}
              backgroundColor='#F8F8F8' borderWidth='0 0 1px 0' borderColor='#CCCCCC' borderStyle='solid'>
          <Typography variant='title'>Home</Typography>
          <Typography variant='body2'>Welcome!</Typography>
        </Grid>
        <Grid container height='calc(100vh - 160px)'>
          <h2>Welcome to todo list app!</h2>
        </Grid>
      </div>
    );
  }
}

export default HomePage;