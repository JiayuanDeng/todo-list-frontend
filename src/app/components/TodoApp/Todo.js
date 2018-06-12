import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';

class Todo extends Component {
  render() {
    return (
      <ListItem
        button
      >
        <ListItemSecondaryAction>
          <Checkbox
            onChange={this.props.onClick}
            checked={this.props.completed}
            disableRipple
          />
        </ListItemSecondaryAction>
        <ListItemText primary={this.props.text}/>
      </ListItem>
    );
  }
}

export default Todo;