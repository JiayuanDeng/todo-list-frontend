import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
    return (
      <div style={{
        height: 96,
        padding: 24,
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexWrap: 'nowrap'
      }}>
        <div style={{flex: '0 1 320px'}}>
          <Typography variant='title'>{this.props.title}</Typography>
          <Typography variant='body2'>{this.props.subtitle}</Typography>
        </div>
        <div style={{flex: 1}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;