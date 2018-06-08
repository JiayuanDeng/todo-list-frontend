import React, { Component } from 'react';

import Background from '../components/Background';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

import AddTodo from '../components/TodoApp/AddTodo';
import TodoList from '../components/TodoApp/TodoList';
import TodoFilter from '../components/TodoApp/TodoFilter';

class TestPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <AddTodo/>
        <TodoFilter/>
        <TodoList/>
      </div>
    );
  }
}

export default TestPage;