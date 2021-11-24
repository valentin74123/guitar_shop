import {createReducer} from '@reduxjs/toolkit';
import {setGuitarInfoToPopup, addToBasket, deleteFromBasket} from '../actions';

const initialState = {
  guitarInfo: {},
  basket: [],
};

const basketDelete = (item, basket) => {
  const index = basket.findIndex((element) => element.id === item.id);

  if (index > -1) {
    return [...basket.slice(0, index), ...basket.slice(index + 1)];
  }

  return basket;
};

const basketAdd = (item, basket) => {
  const index = basket.findIndex((element) => element.id === item.id);

  if (index > -1) {
    basket[index].count = basket[index].count + 1;

    return basket;
  }

  return [...basket, {...item, count: 1}];
};

const guitars = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarInfoToPopup, (state, action) => {
      state.guitarInfo = action.payload;
    })
    .addCase(addToBasket, (state, action) => {
      state.basket = basketAdd(action.payload, state.basket);
    })
    .addCase(deleteFromBasket, (state, action) => {
      state.basket = basketDelete(action.payload, state.basket);
    });
});

export {guitars};
