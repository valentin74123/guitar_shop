import {checkTest} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  testInfo: {
    test: `test`
  }
};

const test = createReducer(initialState, (builder) => {
  builder.addCase(checkTest, (state, action) => {
    state.testInfo = action.payload;
  });
});

export {test};
