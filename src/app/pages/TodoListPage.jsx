import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import AddTodo from '../components/TodoApp/AddTodo';
import TodoList from '../components/TodoApp/TodoList';
import TodoFilter from '../components/TodoApp/TodoFilter';


class TodoListPage extends Component {
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

export default TodoListPage;