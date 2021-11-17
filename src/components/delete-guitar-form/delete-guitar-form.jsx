import React from "react";
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';

const DeleteGuitarForm = (props) => {
  const {onButtonClick} = props;

  return (
    <FocusTrap>
      <div className="popup__wrapper">
        <button className="popup__close" onClick={onButtonClick} />

        <h3 className="popup__title">Удалить этот товар?</h3>
        <form className="popup__form" action="">
          <div className="popup__form-wrapper">
            <img className="popup__img" src="./img/small-guitar.png" width="56" height="128" alt="Гитара Честер bass" />

            <div className="popup__info-wrapper">
              <div className="popup__name">Гитара Честер bass</div>
              <div className="popup__article">Артикул: SO757575</div>
              <div className="popup__type">Электрогитара, 6 струнная</div>
              <div className="popup__price">Цена: 17 500 ₽</div>
            </div>
          </div>

          <div className="popup__button-wrapper">
            <button className="popup__submit orange-button" type="submit">Удалить товар</button>
            <button className="popup__continue" type="button" onClick={onButtonClick}>Продолжить покупки</button>
          </div>
        </form>
      </div>
    </FocusTrap>
  );
};

DeleteGuitarForm.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default DeleteGuitarForm;
