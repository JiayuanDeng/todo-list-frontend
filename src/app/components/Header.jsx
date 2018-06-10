import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
    return (
      <div style={{padding: 24, backgroundColor: '#F8F8F8'}}>
        <Typography variant='title'>{this.props.title}</Typography>
        <Typography variant='body2'>{this.props.subtitle}</Typography>
      </div>
    );
  }
}

export default Header;