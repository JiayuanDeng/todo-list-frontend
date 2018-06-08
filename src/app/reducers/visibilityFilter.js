import * as actionTypes from '../constants/actionTypes';
import * as formOptions from '../constants/formOptions';

export default (visibilityFilter = formOptions.VISIBILITY_FILTERS.SHOW_ALL.VALUE, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return visibilityFilter;
  }
};