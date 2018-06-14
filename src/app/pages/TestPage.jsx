import React, { Component } from 'react';

import Grid from '../components/Layout/Grid';

class TestPage extends Component {
  render() {
    return (
      <div>
        <Grid container
              width='100vw' height='calc(100vh - 64px)'>
          Nothing is tested!
        </Grid>
      </div>
    );
  }
}

export default TestPage;