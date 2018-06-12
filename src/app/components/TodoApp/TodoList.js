import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/todoListActions'
import Todo from './Todo';
import List from '@material-ui/core/List';

class TodoList extends Component {
  render() {
    return (
      <div style={{width: 320, overflow: 'auto'}}>
        <List>
          {this.props.todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => this.props.onTodoClick(todo.id)}
            />
          )}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);