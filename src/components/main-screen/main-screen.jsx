import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import CurrentPage from '../current-page/current-page';
import Filters from '../filters/filters';
import Sort from '../sort/sort';
import Catalog from '../catalog/catalog';
import Popup from '../popup/popup';
import {getPopup} from '../../store/page/selectors';
import {setPopup} from '../../store/actions';

const MainScreen = () => {
  const isBasket = false;

  const dispatch = useDispatch();

  const popupName = useSelector(getPopup);
  const isPopupShown = Boolean(popupName);
  const closePopup = useCallback(() => dispatch(setPopup(null)), [dispatch]);

  return (
    <div className="page">
      <Header />

      <main className="main">
        <CurrentPage isBasket={isBasket} />

        <section className="catalog-section">
          <Filters />

          <Sort />

          <Catalog />
        </section>
      </main>

      <Footer />

      {isPopupShown && <Popup id={popupName} onClose={closePopup}/>}
    </div>
  );
};

export default MainScreen;
