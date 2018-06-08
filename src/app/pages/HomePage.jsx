import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from "../components/Header";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Header title='Home' subtitle='Welcome to home page!'/>
        <h4>Welcome to todo list app</h4>
        <p>Please login.</p>
      </div>
    );
  }
}

export default HomePage;