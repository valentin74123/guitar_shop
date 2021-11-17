import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Rating, PopupType} from '../../const';
import {setPopup} from '../../store/actions';

import "./style.scss";

const Catalog = () => {
  const stars = Object.values(Rating);

  const dispatch = useDispatch();

  const handleBuyClick = useCallback(() => dispatch(setPopup(PopupType.ADD_GUITAR)), [dispatch]);

  return (
    <section className="catalog">
      <h3 className="visually-hidden">Каталог</h3>

      <ul className="catalog__list">
        <li className="catalog__item">
          <img className="catalog__img" src="./img/electro-guitar.png" width="80" height="202" alt="" />

          <div className="catalog__rating">
            <span className="catalog__stars">
              {stars.map((star, i) => (
                <svg key={star + i} className="navigation-icons__icon" width="11" height="11">
                  <use xlinkHref={`#${star}`}></use>
                </svg>
              ))}
            </span>
            <span className="catalog__rate">
              15
            </span>
          </div>

          <span className="catalog__name">Честер Bass</span>

          <span className="catalog__price">17 500 ₽</span>

          <button className="catalog__info gray-button">Подробнее</button>
          <button onClick={handleBuyClick} className="catalog__buy orange-button">
            <svg className="catalog__buy-icon" width="12" height="13">
              <use xlinkHref="#cart"></use>
            </svg>
            Купить
          </button>
        </li>
      </ul>

      <section className="catalog__pagination pagination">
        <ul className="pagination__list">
          <li className="pagination__item">
            <a className="pagination__link pagination__link--active" href="#">
              1
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              2
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              ...
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              7
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              Далее
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Catalog;
