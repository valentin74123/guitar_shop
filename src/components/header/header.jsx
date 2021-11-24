import React from 'react';
import {useSelector} from 'react-redux';
import Logo from '../logo/logo';
import {Navigation, AppRoute} from '../../const';
import {Link} from 'react-router-dom';

import "./style.scss";

const Header = () => {
  const {basket} = useSelector((state) => state.GUITARS);

  let count = 0;
  basket.map((guitar) => {
    count += guitar.count;
  });

  const isFooter = false;
  const navigation = Object.values(Navigation);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo isFooter={isFooter} />

        <nav className="header__navigation navigation">
          <ul className="navigation__list">
            {navigation.map((titel, i) => (
              <li key={titel + i} className="navigation__item">
                <Link className="navigation__link"
                  to={`${titel === Navigation.Ctalog ? AppRoute.MAIN : `#`}`}
                >
                  {titel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__icons navigation-icons">
          <ul className="navigation-icons__list">
            <li className="navigation-icons__item">
              <Link className="navigation-icons__link navigation-icons__link--map" to="#">
                <svg className="navigation-icons__icon" width="15" height="19">
                  <use xlinkHref="#map"></use>
                </svg>
                <span className="visually-hidden">Месторасположения</span>
              </Link>
            </li>

            <li className="navigation-icons__item">
              <Link className="navigation-icons__link navigation-icons__link--search" to="#">
                <svg className="navigation-icons__icon" width="14" height="14">
                  <use xlinkHref="#search"></use>
                </svg>
                <span className="visually-hidden">Поиск</span>
              </Link>
            </li>

            <li className="navigation-icons__item">
              <Link className="navigation-icons__link navigation-icons__link--basket" to={AppRoute.BASKET}>
                <svg className="navigation-icons__icon" width="16" height="18">
                  <use xlinkHref="#basket"></use>
                </svg>
                <span className="visually-hidden">Корзина</span>
                {basket.length !== 0 && <span className="navigation-icons__count">{count}</span>}
              </Link>
            </li>
          </ul>
        </div>

        <div className="guitar guitar--header">
          <span className="visually-hidden">Гитара</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
