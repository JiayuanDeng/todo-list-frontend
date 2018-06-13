import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilitFilter } from '../../actions/todoListActions'
import { VISIBILITY_FILTERS } from "../../constants/formOptions";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


class TodoFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };


  handleMenuItemClick = (event, filter) => {
    this.props.onFilterLinkClick(filter);
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div>
        <List>
          <ListItem
            button
            aria-owns={this.state.anchorEl ? 'filter' : null}
            aria-haspopup="true"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Filter"
              secondary={VISIBILITY_FILTERS[this.props.visibilityFilter].TEXT }
            />
          </ListItem>
        </List>
        <Menu
          id="filter"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          {Object.values(VISIBILITY_FILTERS).map((option, index) => (
            <MenuItem
              key={index}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, option.VALUE)}
            >
              {option.TEXT}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
    onFilterLinkClick: (filter) => dispatch(setVisibilitFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);