import React, { Component } from 'react';
import {connect} from "react-redux";


class CheckLogin extends Component {
  render() {
    var {pass: Pass, fail: Fail, loggedIn, ...rest} = this.props;
    return loggedIn ? (<Pass {...rest} />) : (<Fail {...rest} />)
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, null)(CheckLogin);