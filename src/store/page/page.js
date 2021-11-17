import {createReducer} from '@reduxjs/toolkit';
import {setPopup} from '../actions';

const initialState = {
  popup: null,
};

const page = createReducer(initialState, (builder) => {
  builder
    .addCase(setPopup, (state, action) => {
      state.popup = action.payload;
    });
});

export {page};
