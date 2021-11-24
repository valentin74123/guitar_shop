import React from 'react';
import PropTypes from 'prop-types';
import {GuitarType, StringsCount, Price} from '../../const';
import {getNumberWithSpaces} from '../../utils';

import "./style.scss";

const Filters = (props) => {
  const {
    priceRange,
    onFocusMin,
    onBlurMin,
    onChangeMin,
    onFocusMax,
    onBlurMax,
    onChangeMax,

    guitarType,
    handleGuitarTypeChange,

    stringsType,
    stringsCount,
    handleStringsCountClick
  } = props;

  return (
    <section className="filters">
      <h3 className="filters__title">Фильтр</h3>

      <form className="filters__form">
        <ul className="filters__list">
          <li className="filters__item">
            <h3 className="filters__filter-name">Цена, ₽</h3>

            <div className="filters__item-wrapper filters__item-wrapper--price">
              <label className="visually-hidden" htmlFor="min-price"></label>
              <input className="filters__input" type="text" id="min-price" name="min-price" placeholder="1 700" maxLength="8"
                onFocus={onFocusMin}
                onBlur={onBlurMin}
                onChange={onChangeMin}
                value={priceRange.min !== Price.MIN ? getNumberWithSpaces(priceRange.min) : ``}
              />

              <label className="visually-hidden" htmlFor="max-price"></label>
              <input className="filters__input" type="text" id="max-price" name="max-price" placeholder="35 000" maxLength="8"
                onFocus={onFocusMax}
                onBlur={onBlurMax}
                onChange={onChangeMax}
                value={priceRange.max !== Price.MAX ? getNumberWithSpaces(priceRange.max) : ``}
              />
            </div>
          </li>

          <li className="filters__item">
            <h3 className="filters__filter-name">Тип гитар</h3>

            <div className="filters__item-wrapper">
              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="acoustic" name="acoustic"
                  value={GuitarType.ACOUSTIC}
                  defaultChecked={guitarType.acoustic}
                  onChange={handleGuitarTypeChange}
                />
                <label className="filters__label" htmlFor="acoustic">
                  <span className="filters__label-box"/>
                  Акустические гитары
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="electric" name="electric"
                  value={GuitarType.ELECTRO}
                  defaultChecked={guitarType.electro}
                  onChange={handleGuitarTypeChange}
                />
                <label className="filters__label" htmlFor="electric">
                  <span className="filters__label-box"/>
                  Электрогитары
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="ukulele" name="ukulele"
                  value={GuitarType.UKULELE}
                  defaultChecked={guitarType.ukulele}
                  onChange={handleGuitarTypeChange}
                />
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
                <input className="filters__checkbox visually-hidden" type="checkbox" id="4-strings" name="4-strings"
                  value={StringsCount.FOUR}
                  disabled={stringsType.four}
                  checked={stringsCount.four}
                  onChange={handleStringsCountClick}
                />
                <label className="filters__label" htmlFor="4-strings">
                  <span className="filters__label-box"/>
                    4
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="6-strings" name="6-strings"
                  value={StringsCount.SIX}
                  disabled={stringsType.six}
                  checked={stringsCount.six}
                  onChange={handleStringsCountClick}
                />
                <label className="filters__label" htmlFor="6-strings">
                  <span className="filters__label-box"/>
                    6
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="7-strings" name="7-strings"
                  value={StringsCount.SEVEN}
                  disabled={stringsType.seven}
                  checked={stringsCount.seven}
                  onChange={handleStringsCountClick}
                />
                <label className="filters__label" htmlFor="7-strings">
                  <span className="filters__label-box"/>
                    7
                </label>
              </div>

              <div className="filters__item-wrapper-checkbox">
                <input className="filters__checkbox visually-hidden" type="checkbox" id="12-strings" name="12-strings"
                  value={StringsCount.TWELVE}
                  disabled={stringsType.twelve}
                  checked={stringsCount.twelve}
                  onChange={handleStringsCountClick}
                />
                <label className="filters__label" htmlFor="12-strings">
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

Filters.propTypes = {
  priceRange: PropTypes.object,
  onFocusMin: PropTypes.func.isRequired,
  onBlurMin: PropTypes.func.isRequired,
  onChangeMin: PropTypes.func.isRequired,
  onFocusMax: PropTypes.func.isRequired,
  onBlurMax: PropTypes.func.isRequired,
  onChangeMax: PropTypes.func.isRequired,
  guitarType: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleGuitarTypeChange: PropTypes.func.isRequired,
  stringsType: PropTypes.objectOf(PropTypes.bool).isRequired,
  stringsCount: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleStringsCountClick: PropTypes.func.isRequired,
};

export default Filters;
