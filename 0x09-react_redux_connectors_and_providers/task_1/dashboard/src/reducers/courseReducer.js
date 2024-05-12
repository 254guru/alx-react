import { Map, fromJS } from 'immutable';
import * as types from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

// Initial state
const initialState = Map({
  courses: Map({}),
});

// Reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COURSE_SUCCESS:
      return state.merge(coursesNormalizer(action.data));
    case types.SELECT_COURSE:
    case types.UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], action.type === types.SELECT_COURSE);
    default:
      return state;
  }
};

export default courseReducer;

