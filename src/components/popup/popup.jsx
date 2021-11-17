import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {ESC_KEY, PopupType} from '../../const';
import {getBodyScrollTop, isVerticalScroll} from '../../utils';

import AddGuitarForm from '../add-guitar-form/add-guitar-form';
import DeleteGuitarForm from '../delete-guitar-form/delete-guitar-form';
import SuccessMessage from '../success-message/success-message';

import "./style.scss";

const Popup = (props) => {
  const {id, onClose} = props;

  const pageTopPosition = getBodyScrollTop();
  const pageLeftPosition = document.body.offsetLeft;

  const handleEscKeyDown = useCallback((evt) => {
    if (evt.key === ESC_KEY) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener(`keydown`, handleEscKeyDown);
    return () => document.removeEventListener(`keydown`, handleEscKeyDown);
  }, [handleEscKeyDown]);

  useEffect(() => {
    if (isVerticalScroll()) {
      document.body.style.top = `-${pageTopPosition}px`;
      document.body.classList.add(`page--lock`);
    }

    return () => {
      if (isVerticalScroll()) {
        document.body.classList.remove(`page--lock`);
        document.body.style = void 0;
        window.scrollTo(0, pageTopPosition);
      }
    };
  }, [pageLeftPosition, pageTopPosition]);

  const renderContent = useCallback((type) => {
    switch (type) {
      case PopupType.ADD_GUITAR:
        return (
          <AddGuitarForm onButtonClick={onClose} />
        );
      case PopupType.DELETE_GUITAR:
        return (
          <DeleteGuitarForm onButtonClick={onClose} />
        );
      case PopupType.SUCCESS_MESSAGE:
        return (
          <SuccessMessage onButtonClick={onClose} />
        );
      default:
        return null;
    }
  }, [onClose]);

  return (
    <section className="popup">
      {renderContent(id)}
    </section>
  );
};

Popup.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
