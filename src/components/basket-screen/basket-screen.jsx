import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import CurrentPage from '../current-page/current-page';
import Basket from '../basket/basket';
import Popup from '../popup/popup';
import {getPopup} from '../../store/page/selectors';
import {setPopup} from '../../store/actions';

const BasketScreen = () => {
  const isBasket = true;

  const dispatch = useDispatch();

  const popupName = useSelector(getPopup);
  const isPopupShown = Boolean(popupName);
  const closePopup = useCallback(() => dispatch(setPopup(null)), [dispatch]);

  return (
    <div className="page">
      <Header isBasket={isBasket} />

      <main className="main">
        <CurrentPage isBasket={isBasket} />

        <Basket />
      </main>

      <Footer isBasket={isBasket}/>

      {isPopupShown && <Popup id={popupName} onClose={closePopup}/>}
    </div>
  );
};

export default BasketScreen;
