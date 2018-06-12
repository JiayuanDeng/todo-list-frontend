import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class Sidebar extends Component {
  render() {
    return (
      <div style={{width: 320, overflow: 'auto'}}>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Inbox"/>
          </ListItem>
          <Divider/>
          <ListItem button divider>
            <ListItemText primary="Drafts"/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash"/>
          </ListItem>
          <Divider light/>
          <ListItem button>
            <ListItemText primary="Spam"/>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Sidebar;