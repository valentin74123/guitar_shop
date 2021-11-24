import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import browserHistory from "./browser-history";

import "./scss/style.scss";

import * as data from './json/guitars.json';

const guitarsData = Object.values(data)[0];
const guitars = Object.values(guitarsData);

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App guitars={guitars}/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
