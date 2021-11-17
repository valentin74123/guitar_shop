import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {PopupType} from '../../const';
import {setPopup} from '../../store/actions';

import "./style.scss";

const Basket = () => {
  const dispatch = useDispatch();

  const handleDeleteClick = useCallback((evt) => {
    evt.preventDefault();

    dispatch(setPopup(PopupType.DELETE_GUITAR));
  }, [dispatch]);

  return (
    <section className="basket">
      <div className="basket__wrapper">
        <form action="">
          <ul className="basket__list">
            <li className="basket__item">
              <button onClick={handleDeleteClick} className="basket__delete">
                <svg className="basket__delete-icon" width="18" height="18" >
                  <use xlinkHref="#cross"></use>
                </svg>
                <span className="visually-hidden">Удалить из корзины</span>
              </button>

              <img className="basket__img" src="./img/small-guitar.png" alt="ЭлектроГитара Честер bass" />

              <div className="basket__info">
                <h3 className="basket__name">ЭлектроГитара Честер bass</h3>
                <span className="basket__article">Артикул: SO757575</span><br />
                <span className="basket__type">Электрогитара, 6 струнная </span>
              </div>

              <span className="basket__price">17 500 ₽</span>

              <div className="basket__count">
                <button className="basket__count-button basket__count-button--minus" type="button">
                  <svg className="basket__count-icon" width="8" height="1">
                    <use xlinkHref="#minus"/>
                  </svg>
                </button>

                <div className="basket__count-value">
                  <input className="basket__input" type="number" id="count" name="count" defaultValue="1"/>
                  <label className="visually-hidden" htmlFor="count">Количество гитар</label>
                </div>

                <button className="basket__count-button basket__count-button--plus" type="button">
                  <svg className="credit-price-field__icon" width="8" height="8">
                    <use xlinkHref="#plus"/>
                  </svg>
                </button>
              </div>

              <span className="basket__all-price">17 500 ₽</span>
            </li>

            <li className="basket__item">
              <button className="basket__delete">
                <svg className="basket__delete-icon" width="18" height="18" >
                  <use xlinkHref="#cross"></use>
                </svg>
                <span className="visually-hidden">Удалить из корзины</span>
              </button>

              <img className="basket__img" src="./img/small-guitar.png" alt="ЭлектроГитара Честер bass" />

              <div className="basket__info">
                <h3 className="basket__name">ЭлектроГитара Честер bass</h3>
                <span className="basket__article">Артикул: SO757575</span><br />
                <span className="basket__type">Электрогитара, 6 струнная </span>
              </div>

              <span className="basket__price">17 500 ₽</span>

              <div className="basket__count">
                <button className="basket__count-button basket__count-button--minus" type="button">
                  <svg className="basket__count-icon" width="8" height="1">
                    <use xlinkHref="#minus"/>
                  </svg>
                </button>

                <div className="basket__count-value">
                  <input className="basket__input" type="number" id="count" name="count" defaultValue="1"/>
                  <label className="visually-hidden" htmlFor="count">Количество гитар</label>
                </div>

                <button className="basket__count-button basket__count-button--plus" type="button">
                  <svg className="credit-price-field__icon" width="8" height="8">
                    <use xlinkHref="#plus"/>
                  </svg>
                </button>
              </div>

              <span className="basket__all-price">17 500 ₽</span>
            </li>
          </ul>

          <section className="basket__final-price price">
            <div className="price__promo">
              <h2 className="price__title">Промокод на скидку</h2>
              <label className="price__description" htmlFor="promo">Введите свой промокод, если он у вас есть.</label>
              <input className="price__promo-text" type="text" id="promo" name="promo" defaultValue="Gitarahit"/>
              <button className="price__activate gray-button">Применить купон</button>
            </div>

            <div className="price__price">
              <span className="price__final-price">Всего: 47 000 ₽</span>
              <button type="submit" className="price__submit orange-button">Оформить заказ</button>
            </div>
          </section>
        </form>
      </div>
    </section>
  );
};

export default Basket;
