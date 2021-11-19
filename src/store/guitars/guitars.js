import {createReducer} from '@reduxjs/toolkit';
import {setActiveSort} from '../actions';

const initialState = {
  activeSort: null,
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveSort, (state, action) => {
      state.activeSort = action.payload;
    });
});

export {guitars};
