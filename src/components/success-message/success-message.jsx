import React from "react";
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import FocusTrap from 'focus-trap-react';

const SuccessMessage = (props) => {
  const {onButtonClick} = props;

  const handleLocationClick = () => {
    location.href = AppRoute.BASKET;
  };

  return (
    <FocusTrap>
      <div className="popup__wrapper popup__wrapper--success">
        <button className="popup__close" onClick={onButtonClick} />

        <h3 className="popup__title">Товар успешно добавлен в корзину</h3>

        <div className="popup__button-wrapper">
          <button className="popup__submit orange-button" onClick={handleLocationClick}>Перейти в корзину</button>
          <button className="popup__continue" type="button" onClick={onButtonClick}>Продолжить покупки</button>
        </div>
      </div>
    </FocusTrap>
  );
};

SuccessMessage.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default SuccessMessage;
