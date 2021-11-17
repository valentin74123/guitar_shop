import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  SET_POPUP: `page/setPopup`,
};

export const setPopup = createAction(ActionType.SET_POPUP, (popupType) => {
  return {
    payload: popupType
  };
});
