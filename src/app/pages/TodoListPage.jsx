import React, { Component } from 'react';

import AddTodo from '../components/TodoApp/AddTodo';
import TodoList from '../components/TodoApp/TodoList';
import TodoFilter from '../components/TodoApp/TodoFilter';


class TodoListPage extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <TodoFilter/>
        <TodoList/>
      </div>
    );
  }
}

export default TodoListPage;