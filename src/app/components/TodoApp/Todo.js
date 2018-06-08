import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class Todo extends Component {
  render () {
    return (
      <ListItem
        button
        onClick={this.props.onClick}
      >
        <Checkbox
          checked={this.props.completed}
          disableRipple
        />
        <ListItemText primary={this.props.text} />
      </ListItem>
    );
  }
}

export default Todo;