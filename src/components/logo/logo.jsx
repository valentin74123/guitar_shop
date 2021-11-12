import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Logo = () => {
  return (
    <Link to={AppRoute.MAIN}>
      <img src="./img/logo.svg" width="67" height="70" alt="Логотип сайта" />
    </Link>
  );
};

export default Logo;
