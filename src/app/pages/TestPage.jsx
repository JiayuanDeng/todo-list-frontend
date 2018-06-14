import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Grid from '../components/Layout/Grid';

class TestPage extends Component {
  render() {
    return (
      <div>
        <Grid container
              width='100vw' height='calc(100vh - 64px)'>
          <Typography variant='display3'>Nothing is tested</Typography>
        </Grid>
      </div>
    );
  }
}

export default TestPage;