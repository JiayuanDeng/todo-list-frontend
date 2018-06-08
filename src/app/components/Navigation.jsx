import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flexGrow: {
    flexGrow: 1,
  },
});

class Navigation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton className={classes.menuButton} style={{width: 100}} color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Button href='/' color="inherit">Home</Button>
          <Button href='/todolist' color="inherit">Todo App</Button>
          <Button href='/test' color="inherit">Test</Button>
          <Typography variant="title" color="inherit" className={classes.flexGrow}></Typography>
          <Button href='/login' color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navigation);
