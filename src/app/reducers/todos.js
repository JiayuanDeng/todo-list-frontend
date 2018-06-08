import * as actionTypes from '../constants/actionTypes';

export default (todos = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case actionTypes.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.id)
          return {
            ...todo,
            completed: !todo.completed
          };
        else
          return todo;
      });
    default:
      return todos;
  }
};