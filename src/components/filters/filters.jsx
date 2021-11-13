import React from 'react';

import "./style.scss";

const Filters = () => {
  return (
    <section className="filters">
      <h3 className="filters__title">Фильтр</h3>

      <form className="filters__form">
        <ul className="filters__list">
          <li className="filters__item">
            <h3 className="filters__filter-name">Цена, ₽</h3>
            <label htmlFor=""></label>
            <input type="number" />
            <input type="number" />
          </li>

          <li className="filters__item">
            <h3 className="filters__filter-name">Тип гитар</h3>

            <div className="filters__item-wrapper">
              <div>
                <input type="checkbox" />
                <label htmlFor="">Акустические гитары</label>
              </div>

              <div>
                <input type="checkbox" />
                <label htmlFor="">Электрогитары</label>
              </div>

              <div>
                <input type="checkbox" />
                <label htmlFor="">Укулеле</label>
              </div>
            </div>
          </li>

          <li className="filters__item">
            <h3 className="filters__filter-name">Количество струн</h3>

            <div className="filters__item-wrapper">
              <div>
                <input type="checkbox" />
                <label htmlFor="">4</label>
              </div>

              <div>
                <input type="checkbox" />
                <label htmlFor="">6</label>
              </div>

              <div>
                <input type="checkbox" />
                <label htmlFor="">7</label>
              </div>

              <div>
                <input type="checkbox" />
                <label htmlFor="">12</label>
              </div>
            </div>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Filters;
