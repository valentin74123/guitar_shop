import React from 'react';
import {Link} from 'react-router-dom';

import "./style.scss";

const Sort = () => {
  return (
    <section className="sort">
      <h3 className="sort__title">Сортировать:</h3>
      <Link className="sort__type sort__type--price" to="#">
        по цене
      </Link>

      <Link className="sort__type sort__type--popular" to="#">
        по популярности
      </Link>

      <input className="sort__input visually-hidden " type="radio" id="down-up" name="sort" checked/>
      <label className="sort__label" htmlFor="down-up">
        <span className="sort__label-box sort__label-box--down"/>
        <span className="visually-hidden">От меньшего к большему</span>
      </label>

      <input className="sort__input visually-hidden" type="radio" id="up-down" name="sort" />
      <label className="sort__label" htmlFor="up-down">
        <span className="sort__label-box sort__label-box--up"/>
        <span className="visually-hidden">От большего к меньшему</span>
      </label>
    </section>
  );
};

export default Sort;
