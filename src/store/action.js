import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  TEST: `data/test`,
};

export const checkTest = createAction(ActionType.TEST, (test) => {
  return {
    payload: test
  };
});
