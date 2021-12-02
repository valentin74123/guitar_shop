import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Rating, PopupType} from '../../const';
import {setPopup, setGuitarInfoToPopup} from '../../store/actions';
import {returnGuitarPicture, getNumberWithSpaces} from '../../utils';
import {guitarPropType} from '../guitar-props/guitar-props';

import "./style.scss";

const Catalog = (props) => {
  const {
    guitars,
    currentGuitars,
    pagesCount,
    activePage,
    handlePrevPageClick,
    handleLinkPageClick,
    handleNextPageClick
  } = props;

  const stars = Object.values(Rating);

  const dispatch = useDispatch();

  const handleBuyClick = useCallback((evt) => {
    evt.preventDefault();
    const id = parseInt(evt.target.dataset.id, 10);
    const result = currentGuitars.find((guitar) => guitar.id === id);

    dispatch(setGuitarInfoToPopup(result));
    dispatch(setPopup(PopupType.ADD_GUITAR));
  }, [dispatch]);

  if (guitars.length === 0) {
    return <div>Подходящих гитар нет в наличии</div>;
  }

  return (
    <section className="catalog">
      <h3 className="visually-hidden">Каталог</h3>

      <ul className="catalog__list">
        {guitars.map((guitar) => (
          <li key={guitar.id} className="catalog__item">
            <img className="catalog__img" src={`${returnGuitarPicture(guitar.type)}`} width="80" height="202" alt={guitar.name} />

            <div className="catalog__rating">
              <span className="catalog__stars">
                {stars.map((star) => (
                  <svg key={star.count} className="navigation-icons__icon" width="11" height="11">
                    <use xlinkHref={`#${star.status}`}></use>
                  </svg>
                ))}
              </span>
              <span className="catalog__rate">
                {guitar.rating}
              </span>
            </div>

            <span className="catalog__name">{guitar.name}</span>

            <span className="catalog__price">{getNumberWithSpaces(guitar.price)} ₽</span>

            <button className="catalog__info gray-button">Подробнее</button>
            <button data-id={guitar.id} onClick={handleBuyClick} className="catalog__buy orange-button">
              <svg data-id={guitar.id} className="catalog__buy-icon" width="12" height="13">
                <use data-id={guitar.id} xlinkHref="#cart"></use>
              </svg>
              Купить
            </button>
          </li>
        ))}
      </ul>

      {pagesCount !== 1
        ? <section className="catalog__pagination pagination">
          <ul className="pagination__list">
            {activePage !== 1
              ? <li className="pagination__item">
                <a onClick={handlePrevPageClick} className="pagination__link pagination__link--word" href="#">
                  Назад
                </a>
              </li>
              : ``
            }

            {Array.from({length: pagesCount}).map((_elem, index) => (
              <li className="pagination__item" key={Date.now() * Math.random()}>
                <a onClick={handleLinkPageClick} id={index + 1} className={`pagination__link ${activePage === index + 1 ? `pagination__link--active` : ``}`} href="#">
                  {index + 1}
                </a>
              </li>
            ))}

            {activePage !== pagesCount && pagesCount !== 1 && pagesCount !== 0
              ? <li className="pagination__item">
                <a onClick={handleNextPageClick} className="pagination__link pagination__link--word" href="#">
                  Далее
                </a>
              </li>
              : ``
            }
          </ul>
        </section>
        : ``
      }
    </section>
  );
};

Catalog.propTypes = {
  guitars: PropTypes.arrayOf(guitarPropType).isRequired,
  currentGuitars: PropTypes.arrayOf(guitarPropType).isRequired,
  pagesCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  handlePrevPageClick: PropTypes.func.isRequired,
  handleLinkPageClick: PropTypes.func.isRequired,
  handleNextPageClick: PropTypes.func.isRequired,
};

export default Catalog;
