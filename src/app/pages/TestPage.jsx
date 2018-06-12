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
          horizontal container
          width={'100vw'}
          height={96}
          padding={24}
          color='#F8F8F8'
          border='1px solid #CCCCCC'>
          <Grid item vertical container alignLeft>
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
        <Grid horizontal container alignLeft>
          <Grid item overflow container
                width={320}
                height={'calc()'}
                border='1px solid #CCCCCC'>
            <TodoList/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TestPage;