import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Sidebar extends Component {
  render() {
    return (
      <Grid
        container
        spacing={16}
        style={{width: '100%', backgroundColor: '#F8F8F8'}}>
        <Grid item xs={12} style={{margin: 24}}>
          <Typography variant='title'>{this.props.title}</Typography>
          <Typography variant='body2'>{this.props.subtitle}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Sidebar;