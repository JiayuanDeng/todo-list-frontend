import React, { Component } from 'react';

import Background from '../components/Background';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

import AddTodo from '../components/TodoApp/AddTodo';
import TodoFilter from '../components/TodoApp/TodoFilter';
import TodoList from '../components/TodoApp/TodoList';

import Grid from '../components/Layout/Grid';
import Login from '../components/Login';
import Paper from '@material-ui/core/Paper';


import Typography from '@material-ui/core/Typography';

class TestPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Grid
          hContainer
          width='100vw' height={96} padding={24}
          color='#F8F8F8' borderWidth='0 0 1px 0' borderColor='#CCCCCC' borderStyle='solid'>
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
          <Grid item container alignUp
                width='100%' height='calc(100vh - 160px)'
                borderWidth='0 0 0 1px' borderColor='#CCCCCC' borderStyle='solid'>
            Main
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TestPage;