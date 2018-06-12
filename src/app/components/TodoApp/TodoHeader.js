import React, { Component } from 'react';
import Header from '../Header';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';

class TodoHeader extends Component {
  render() {
    return (
      <Header title='Todo App' subtitle='Welcome to todo app!'>
        <div></div>
        <TodoFilter/>
        <AddTodo/>
      </Header>
    );
  }
}

export default TodoHeader;