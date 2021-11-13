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

      <input className="sort__input sort__input--down" type="radio" id="down-up" name="sort" />
      <label className="sort__label visually-hidden" htmlFor="down-up">От меньшего к большему</label>
      <input className="sort__input sort__input--up" type="radio" id="up-down" name="sort" />
      <label className="sort__label visually-hidden" htmlFor="up-down">От большего к меньшему</label>
    </section>
  );
};

export default Sort;
