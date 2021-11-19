import {createReducer} from '@reduxjs/toolkit';
import {loadGuitars} from '../actions';

const initialState = {
  guitarsInfo: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitarsInfo = action.payload;
    });
});

export {data};
