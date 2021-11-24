import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import {useDispatch, useSelector} from 'react-redux';
import {getNumberWithSpaces, returnGuitarSmallPicture} from '../../utils';
import {deleteFromBasket, setPopup} from '../../store/actions';

const DeleteGuitarForm = (props) => {
  const {onButtonClick} = props;

  const {guitarInfo} = useSelector((state) => state.GUITARS);

  const dispatch = useDispatch();

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();

    dispatch(deleteFromBasket(guitarInfo));
    dispatch(setPopup(null));
  }, [dispatch]);

  return (
    <FocusTrap>
      <div className="popup__wrapper">
        <button className="popup__close" onClick={onButtonClick} />

        <h3 className="popup__title">Удалить этот товар?</h3>
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
