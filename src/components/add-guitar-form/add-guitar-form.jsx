import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {PopupType} from '../../const';
import {setPopup} from '../../store/actions';
import FocusTrap from 'focus-trap-react';

import "./style.scss";

const AddGuitarForm = (props) => {
  const {onButtonClick} = props;

  const dispatch = useDispatch();

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();

    dispatch(setPopup(PopupType.SUCCESS_MESSAGE));
  }, [dispatch]);

  return (
    <FocusTrap>
      <div className="popup__wrapper">
        <button className="popup__close" onClick={onButtonClick} />

        <h3 className="popup__title">Добавить товар в корзину</h3>
        <form onSubmit={handleFormSubmit} className="popup__form" action="">
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
            <button className="popup__submit orange-button" type="submit">Добавить в корзину</button>
          </div>
        </form>
      </div>
    </FocusTrap>
  );
};

AddGuitarForm.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default AddGuitarForm;
