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

            <div className="filters__item-wrapper filters__item-wrapper--price">
              <label className="visually-hidden" htmlFor="min-price"></label>
              <input className="filters__input" type="number" id="min-price" name="min-price" defaultValue="1000" />

              <label className="visually-hidden" htmlFor="max-price"></label>
              <input className="filters__input" type="number" id="max-price" name="max-price" defaultValue="30000" />
            </div>
          </li>

          <li className="filters__item">
            <h3 className="filters__filter-name">Тип гитар</h3>

            <div className="filters__item-wrapper">
              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
                <label className="filters__label" htmlFor="acoustic">
                  <span className="filters__label-box"/>
                  Акустические гитары
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="electric" name="electric" />
                <label className="filters__label" htmlFor="electric">
                  <span className="filters__label-box"/>
                  Электрогитары
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="ukulele" name="ukulele" />
                <label className="filters__label" htmlFor="ukulele">
                  <span className="filters__label-box"/>
                  Укулеле
                </label>
              </div>
            </div>
          </li>

          <li className="filters__item">
            <h3 className="filters__filter-name">Количество струн</h3>

            <div className="filters__item-wrapper">
              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="4-strings" name="4-strings" />
                <label className="filters__label" htmlFor="4-strings">
                  <span className="filters__label-box"/>
                    4
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="6-strings" name="6-strings" />
                <label className="filters__label" htmlFor="6-strings">
                  <span className="filters__label-box"/>
                    6
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
                <label className="filters__label" htmlFor="7-strings">
                  <span className="filters__label-box"/>
                    7
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
                <label className="filters__label filters__label--disabled" htmlFor="12-strings">
                  <span className="filters__label-box"/>
                    12
                </label>
              </div>
            </div>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Filters;
