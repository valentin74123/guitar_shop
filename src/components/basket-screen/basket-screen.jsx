import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import CurrentPage from '../current-page/current-page';
import Basket from '../basket/basket';

const BasketScreen = () => {
  const isBasket = true;

  return (
    <div className="page">
      <Header />

      <main className="main">
        <CurrentPage isBasket={isBasket} />

        <Basket />
      </main>

      <Footer />
    </div>
  );
};

export default BasketScreen;
