import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import AddTodo from '../components/TodoApp/AddTodo';
import TodoList from '../components/TodoApp/TodoList';
import TodoFilter from '../components/TodoApp/TodoFilter';
import Grid from '../components/Layout/Grid';

class TodoListPage extends Component {
  render() {
    return (
      <div>
        <Grid
          hContainer
          width='100vw' height={96} padding={24}
          backgroundColor='#F8F8F8' borderWidth='0 0 1px 0' borderColor='#CCCCCC' borderStyle='solid'>
          <Grid item container alignLeft width={320}>
            <Typography variant='title'>Todo App</Typography>
            <Typography variant='body2'>Welcome to todo list app!</Typography>
          </Grid>
          <Grid item container>
            <TodoFilter/>
          </Grid>
          <Grid item container>
            <AddTodo/>
          </Grid>
          <Grid item grow/>
        </Grid>
        <Grid hContainer alignLeft>
          <Grid item fixedSize
                container alignUp
                width={320} height='calc(100vh - 160px)' overflow>
            <TodoList/>
          </Grid>
          <Grid item
                container alignUp
                width='100%' height='calc(100vh - 160px)'
                borderWidth='0 0 0 1px' borderColor='#CCCCCC' borderStyle='solid'>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TodoListPage;