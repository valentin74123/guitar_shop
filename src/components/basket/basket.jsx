import React, {useCallback, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PopupType, MIN_COUNT, MAX_COUNT, Promo} from '../../const';
import {setPopup, setGuitarInfoToPopup} from '../../store/actions';
import {returnGuitarSmallPicture, getNumberWithSpaces, getNumberFromString} from '../../utils';

import "./style.scss";

const Basket = () => {
  const {basket} = useSelector((state) => state.GUITARS);

  const [promo, setPromo] = useState(``);
  const [promoFake, setPromoFake] = useState(false);
  const [promoActivated, setPromoActivated] = useState(false);

  const [countGoods, setCountGoods] = useState(basket.map((guitar) => ({
    id: guitar.id,
    price: guitar.price,
    count: guitar.count,
    sum: guitar.price * guitar.count,
  })));

  const [sumAll, setSumAll] = useState(countGoods.length ? countGoods.map((good) => good.sum).reduce((prev, next) => prev + next) : 0);

  useEffect(() => {
    setSumAll(countGoods.length ? countGoods.map((good) => good.sum).reduce((prev, next) => prev + next) : 0);
    setPromoActivated(false);
  }, [countGoods]);

  const handleCount = (evt) => {
    const number = getNumberFromString(evt.target.value);
    const id = parseInt(evt.target.dataset.id, 10);

    setCountGoods(countGoods.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          price: item.price,
          count: number ? number : 0,
          sum: item.price * number,
        };
      } else {
        return item;
      }
    }));
  };

  const handleCountMinus = (evt) => {
    const id = parseInt(evt.target.dataset.id, 10);

    setCountGoods(countGoods.map((item) => {
      if (item.id === id) {
        if (item.count - 1 < MIN_COUNT) {
          dispatch(setPopup(PopupType.DELETE_GUITAR));
        }

        return {
          id: item.id,
          price: item.price,
          count: (item.count - 1) < MIN_COUNT ? MIN_COUNT : (item.count - 1),
          sum: (item.count - 1) < MIN_COUNT ? item.price * MIN_COUNT : item.price * (item.count - 1),
        };
      }

      return item;
    }));
  };

  const handleCountPlus = (evt) => {
    const id = parseInt(evt.target.dataset.id, 10);

    setCountGoods(countGoods.map((item) => item.id === id ? {
      id: item.id,
      price: item.price,
      count: (item.count + 1) > MAX_COUNT ? MAX_COUNT : (item.count + 1),
      sum: (item.count + 1) > MAX_COUNT ? item.price * MAX_COUNT : item.price * (item.count + 1),
    } : item));
  };


  const handlePromoType = (evt) =>{
    setPromo(evt.target.value);
    return;
  };

  const handlePromoClick = (evt) => {
    evt.preventDefault();

    if (sumAll === 0) {
      return;
    }

    const promoString = promo.toUpperCase().trim();

    switch (promoString) {
      case Promo.GITARAHIT.title.toUpperCase().trim(): {
        setPromoFake(false);
        if (promoActivated) {
          setPromoActivated(false);
          setSumAll(countGoods.map((good) => good.sum). reduce((prev, next)=> prev + next));
        } else {
          setPromoActivated(true);
          setSumAll(sumAll - (sumAll / 100 * Promo.GITARAHIT.percent));
        }

        break;
      }
      case Promo.SUPERGITARA.title.toUpperCase().trim(): {
        setPromoFake(false);
        if (promoActivated) {
          setPromoActivated(false);
          setSumAll(countGoods.map((good) => good.sum). reduce((prev, next)=> prev + next));
        } else {
          setPromoActivated(true);
          setSumAll(sumAll - Promo.SUPERGITARA.discount);
        }

        break;
      }
      case Promo.GITARA2020.title.toUpperCase().trim(): {
        setPromoFake(false);
        if (promoActivated) {
          setPromoActivated(false);
          setSumAll(countGoods.map((good) => good.sum). reduce((prev, next)=> prev + next));
        } else {
          setPromoActivated(true);
          if (Promo.GITARA2020.discount > sumAll / 100 * Promo.GITARA2020.percent) {
            setSumAll(sumAll - (sumAll / 100 * Promo.GITARA2020.percent));
          } else {
            setSumAll(sumAll - Promo.GITARA2020.discount);
          }
        }

        break;
      }
      default: {
        setSumAll(countGoods.map((good) => good.sum). reduce((prev, next)=> prev + next));
        setPromoFake(true);
        setPromoActivated(false);
        return;
      }
    }
  };

  const dispatch = useDispatch();

  const handleOpenClick = useCallback((evt) => {
    evt.preventDefault();

    const id = parseInt(evt.target.dataset.id, 10);
    const result = basket.find((guitar) => guitar.id === id);

    dispatch(setGuitarInfoToPopup(result));
    dispatch(setPopup(PopupType.DELETE_GUITAR));
  }, [dispatch]);

  const basketLength = basket.length === 0 ? true : false;

  return (
    <section className="basket">
      <div className="basket__wrapper">
        <form action="">
          <ul className="basket__list">
            {basketLength && <div className="basket__empty">Корзина пока пуста, добавьте понравившуюся гитару через каталог</div>}
            {basket.length !== 0 && basket.map((guitar, index) => (
              <li key={guitar.id} className="basket__item">
                <button data-id={guitar.id} onClick={handleOpenClick} className="basket__delete" type="button">
                  <svg data-id={guitar.id} className="basket__delete-icon" width="18" height="18" >
                    <use data-id={guitar.id} xlinkHref="#cross"></use>
                  </svg>
                  <span className="visually-hidden">Удалить из корзины</span>
                </button>

                <img className="basket__img" src={`${returnGuitarSmallPicture(guitar.type)}`} width="60" height="136" alt={guitar.name} />

                <div className="basket__info">
                  <h3 className="basket__name">{guitar.type} {guitar.name}</h3>
                  <span className="basket__article">Артикул: {guitar.article}</span><br />
                  <span className="basket__type">{guitar.type}, {guitar.strings} струнная </span>
                </div>

                <span className="basket__price">{getNumberWithSpaces(guitar.price)} ₽</span>

                <div className="basket__count">
                  <button onClick={handleCountMinus} data-id={guitar.id} className="basket__count-button basket__count-button--minus" type="button">
                    <svg className="basket__count-icon" width="8" height="1">
                      <use xlinkHref="#minus"/>
                    </svg>
                  </button>

                  <div className="basket__count-value">
                    <input onChange={handleCount} value={countGoods[index].count} data-id={guitar.id} className="basket__input" type="text" id="count" name="count"/>
                    <label className="visually-hidden" htmlFor="count">Количество гитар</label>
                  </div>

                  <button onClick={handleCountPlus} data-id={guitar.id} className="basket__count-button basket__count-button--plus" type="button">
                    <svg className="credit-price-field__icon" width="8" height="8">
                      <use xlinkHref="#plus"/>
                    </svg>
                  </button>
                </div>

                <span className="basket__all-price">{getNumberWithSpaces(guitar.price * countGoods[index].count)} ₽</span>
              </li>
            ))}
          </ul>

          <section className="basket__final-price price">
            <div className="price__promo">
              <h2 className="price__title">Промокод на скидку</h2>
              <label className="price__description" htmlFor="promo">Введите свой промокод, если он у вас есть.</label>
              {promoFake && <p className="price__description">Промокод не действителен</p>}

              <input onChange={handlePromoType} className="price__promo-text" type="text" id="promo" name="promo"/>
              <button onClick={handlePromoClick} type="button" className="price__activate gray-button">Применить купон</button>
            </div>

            <div className="price__price">
              <span className="price__final-price">Всего: {getNumberWithSpaces(sumAll)} ₽</span>
              <button disabled={basketLength} type="button" className="price__submit orange-button">Оформить заказ</button>
            </div>
          </section>
        </form>
      </div>
    </section>
  );
};

export default Basket;
