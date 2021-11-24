import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {PopupType} from '../../const';
import {setPopup, addToBasket} from '../../store/actions';
import FocusTrap from 'focus-trap-react';
import {getNumberWithSpaces, returnGuitarSmallPicture} from '../../utils';

import "./style.scss";

const AddGuitarForm = (props) => {
  const {onButtonClick} = props;
  const {guitarInfo} = useSelector((state) => state.GUITARS);

  const dispatch = useDispatch();

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();

    dispatch(addToBasket(guitarInfo));
    dispatch(setPopup(PopupType.SUCCESS_MESSAGE));
  }, [dispatch]);

  return (
    <FocusTrap>
      <div className="popup__wrapper">
        <button className="popup__close" onClick={onButtonClick} />

        <h3 className="popup__title">Добавить товар в корзину</h3>
        <form onSubmit={handleFormSubmit} className="popup__form" action="">
          <div className="popup__form-wrapper">
            <img className="popup__img" src={`${returnGuitarSmallPicture(guitarInfo.type)}`} width="56" height="128" alt="Гитара Честер bass" />

            <div className="popup__info-wrapper">
              <div className="popup__name">{guitarInfo.name}</div>
              <div className="popup__article">Артикул: {guitarInfo.article}</div>
              <div className="popup__type">{guitarInfo.type}, {guitarInfo.strings} струнная</div>
              <div className="popup__price">Цена: {getNumberWithSpaces(guitarInfo.price)} ₽</div>
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
