import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
    return (
      <Grid container alignItems="center" spacing={16}
            style={{flexGrow: 1, backgroundColor: '#F8F8F8'}}>
        <Grid item>
          <Typography variant='title'>{this.props.title}</Typography>
          <Typography variant='body2'>{this.props.subtitle}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Header;