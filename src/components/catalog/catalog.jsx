import React from 'react';

import "./style.scss";

const Catalog = () => {
  return (
    <section className="catalog">
      <h3 className="catalog__title">Каталог</h3>

      <ul className="catalog__list">
        <li className="catalog__item">
          <img className="catalog__img" src="" width="68" height="90" alt="" />

          <div className="catalog__rating">
            <span className="catalog__stars">
              stars
            </span>
            <span className="catalog__rate">
              15
            </span>
          </div>

          <span className="catalog__name">Честер Bass</span>

          <span className="catalog__price">17 500 ₽</span>

          <button className="catalog__info">Подробнее</button>
          <button className="catalog__buy"> Купить</button>
        </li>
      </ul>
    </section>
  );
};

export default Catalog;
