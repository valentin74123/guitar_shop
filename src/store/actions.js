import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  SET_POPUP: `page/setPopup`,
  LOAD_GUITARS: `data/loadGuitars`,
  SET_GUITAR_INFO: `guitars/setGuitarInfo`,
  ADD_TO_BASKET: `guitars/addToBasket`,
  DELETE_FROM_BASKET: `guitars/deleteFromBasket`
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

export const setGuitarInfoToPopup = createAction(ActionType.SET_GUITAR_INFO, (guitar) => {
  return {
    payload: guitar
  };
});

export const addToBasket = createAction(ActionType.ADD_TO_BASKET, (guitar) => {
  return {
    payload: guitar
  };
});

export const deleteFromBasket = createAction(ActionType.DELETE_FROM_BASKET, (guitar) => {
  return {
    payload: guitar
  };
});
