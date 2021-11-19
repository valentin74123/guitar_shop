import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  SET_POPUP: `page/setPopup`,
  LOAD_GUITARS: `data/loadGuitars`,
  SET_ACTIVE_SORT: `guitars/setActiveSort`
};

export const setPopup = createAction(ActionType.SET_POPUP, (popupType) => {
  return {
    payload: popupType
  };
});

export const loadGuitars = createAction(ActionType.LOAD_GUITARS, (guitars) => {
  return {
    payload: guitars
  };
});

export const setActiveSort = createAction(ActionType.SET_ACTIVE_SORT, (sort) => {
  return {
    payload: sort
  };
});
