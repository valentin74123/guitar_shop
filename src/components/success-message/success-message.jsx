import React from "react";
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import FocusTrap from 'focus-trap-react';
import {Link} from "react-router-dom";

const SuccessMessage = (props) => {
  const {onButtonClick} = props;

  return (
    <FocusTrap>
      <div className="popup__wrapper popup__wrapper--success">
        <button className="popup__close" onClick={onButtonClick} />

        <h3 className="popup__title">Товар успешно добавлен в корзину</h3>

        <div className="popup__button-wrapper">
          <Link className="popup__submit popup__submit--to-basket orange-button" type="button" onClick={onButtonClick} to={AppRoute.BASKET}>Перейти в корзину</Link>
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
