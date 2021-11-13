import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import CurrentPage from '../current-page/current-page';
import Filters from '../filters/filters';
import Sort from '../sort/sort';
import Catalog from '../catalog/catalog';

const MainScreen = () => {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <CurrentPage />

        <section className="catalog-section">
          <Filters />

          <Sort />

          <Catalog />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MainScreen;
