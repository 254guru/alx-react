import courseReducer from './courseReducer';
import * as types from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('returns default state as an empty array', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('FETCH_COURSE_SUCCESS returns the data passed with isSelected set to false for each item', () => {
    const action = {
      type: types.FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ]
    };
    expect(courseReducer([], action)).toEqual([
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ]);
  });

  it('SELECT_COURSE returns the data with the right item updated', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const action = {
      type: types.SELECT_COURSE,
      index: 2
    };
    expect(courseReducer(initialState, action)).toEqual([
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ]);
  });

  it('UNSELECT_COURSE returns the data with the right item updated', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const action = {
      type: types.UNSELECT_COURSE,
      index: 2
    };
    expect(courseReducer(initialState, action)).toEqual([
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ]);
  });
});
