import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Logo = (props) => {
  const {footer} = props;

  const img = footer ? `./img/logo-white.svg` : `./img/logo.svg`;

  return (
    <Link to={AppRoute.MAIN}>
      <img src={img} width="67" height="70" alt="Логотип сайта" />
    </Link>
  );
};

Logo.propTypes = {
  footer: PropTypes.bool.isRequired,
};

export default Logo;
