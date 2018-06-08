import * as actionTypes from '../constants/actionTypes';

export const addTodo = (id, text) => {
  return {
    type: actionTypes.ADD_TODO,
    id: id,
    text: text
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

export const setVisibilitFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
};