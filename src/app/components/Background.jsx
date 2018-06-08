import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  background: {
    backgroundColor: '#F8F8F8',
    height: 'calc(100vh - 64px)',
    width: '100vw'
  }
};

class Background extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.background} justify='center' alignItems='center'>
        {this.props.children}
      </Grid>
    );
  }
}

export default withStyles(styles)(Background);