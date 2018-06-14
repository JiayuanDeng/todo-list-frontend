import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flexGrow: {
    flexGrow: 1,
  },
});

class Nav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Button to='/' component={Link} color='inherit'>Home</Button>
          <Button to='/todolist' component={Link} color="inherit">Todo App</Button>
          <Button to='/test' component={Link} color="inherit">Test</Button>
          <Typography variant="title" color="inherit" className={classes.flexGrow}> </Typography>
          <Button to='/login' component={Link} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Nav);
