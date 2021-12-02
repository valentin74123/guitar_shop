import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Logo = (props) => {
  const {isFooter, isBasket} = props;

  const img = isFooter ? `./img/logo-white.svg` : `./img/logo.svg`;

  if (isBasket) {
    return (
      <Link to={AppRoute.MAIN}>
        <img src={img} width="67" height="70" alt="Логотип сайта" />
      </Link>
    );
  } else {
    return (
      <>
        <img src={img} width="67" height="70" alt="Логотип сайта" />
      </>
    );
  }
};

Logo.propTypes = {
  isFooter: PropTypes.bool.isRequired,
  isBasket: PropTypes.bool,
};

export default Logo;
