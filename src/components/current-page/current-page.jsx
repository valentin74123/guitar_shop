import React from 'react';
import PropTypes from 'prop-types';

import "./style.scss";

const CurrentPage = (props) => {
  const {isBasket} = props;

  return (
    <section className={`current-page ${isBasket ? `current-page--basket` : ``}`}>
      <h2 className="current-page__title">{isBasket ? `Корзина` : `Каталог гитар`}</h2>
      <div className="current-page__wrapper">
        <span className="current-page__main">Главная</span>
        <span className="current-page__page">Каталог</span>
        {isBasket &&
          <span className="current-page__page">Оформляем</span>
        }
      </div>
    </section>
  );
};

CurrentPage.propTypes = {
  isBasket: PropTypes.bool.isRequired,
};

export default CurrentPage;
