import { Map } from 'immutable';
import * as types from '../actions/courseActionTypes';

// Default state
const initialState = [];

// Reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COURSE_SUCCESS:
      // Set isSelected to false for each course
      return action.data.map(course => ({
        ...course,
        isSelected: false
      }));
    case types.SELECT_COURSE:
      return state.map(course =>
        course.id === action.index
          ? { ...course, isSelected: true }
          : course
      );
    case types.UNSELECT_COURSE:
      return state.map(course =>
        course.id === action.index
          ? { ...course, isSelected: false }
          : course
      );
    default:
      return state;
  }
};

export default courseReducer;
