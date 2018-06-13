import React, { Component } from 'react';

class Grid extends Component {
  render() {
    var style = {};
    if(this.props.width) style.width = this.props.width;
    if(this.props.height) style.height = this.props.height;
    if(this.props.padding) style.padding = this.props.padding;
    if(this.props.backgroundColor) style.backgroundColor = this.props.backgroundColor;
    if(this.props.border) style.border = this.props.border;
    if(this.props.borderColor) style.borderColor = this.props.borderColor;
    if(this.props.borderWidth) style.borderWidth = this.props.borderWidth;
    if(this.props.borderStyle) style.borderStyle = this.props.borderStyle;
    if(this.props.container || this.props.hContainer) {
      style.display = 'flex';
      style.justifyContent = 'center';
      style.alignItems = 'center';
      if (this.props.container) {
        style.flexDirection = 'column';
        if (this.props.alignLeft) style.alignItems = 'flex-start';
        if (this.props.alignRight) style.alignItems = 'flex-end';
        if (this.props.alignUp) style.justifyContent = 'flex-start';
        if (this.props.alignDown) style.justifyContent = 'flex-end';
      }
      if (this.props.hContainer) {
        style.flexDirection = 'row';
        if (this.props.alignLeft) style.justifyContent = 'flex-start';
        if (this.props.alignRight) style.justifyContent = 'flex-end';
        if (this.props.alignUp) style.alignItems = 'flex-start';
        if (this.props.alignDown) style.alignItems = 'flex-end';
      }
      if (this.props.wrap) style.flexWrap = 'wrap';
    }
    if(this.props.item) {
      if(this.props.fixedSize) style.flex = '0 0 auto';
      if(this.props.grow) style.flexGrow = 1;
      if(this.props.growRatio) style.flexGrow = this.props.growRatio;
      if(this.props.compress) style.flexShrink = 1;
      if(this.props.compressRatio) style.flexShrink = this.props.compressRatio;
    }
    if(this.props.fill) style.flexItems = 'stretch';
    if(this.props.overflow) style.overflow = 'auto';

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Grid;