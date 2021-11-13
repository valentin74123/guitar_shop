import React from 'react';

import "./style.scss";

const CurrentPage = () => {
  return (
    <section className="current-page">
      <h2 className="current-page__title">Каталог гитар</h2>
      <div className="current-page__wrapper">
        <span className="current-page__main">Главная</span>
        <span className="current-page__page">Каталог</span>
      </div>
    </section>
  );
};

export default CurrentPage;
