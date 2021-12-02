import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {SortType, SortDirection} from '../../const';

import "./style.scss";

const Sort = (props) => {
  const {
    sort,
    handleSortPriceClick,
    handleSortPopularClick,
    sortDirection,
    handleSortAscendingClick,
    handleSortDescendingClick
  } = props;

  return (
    <section className="sort">
      <h3 className="sort__title">Сортировать:</h3>
      <div className="sort__wrapper">
        <Link onClick={handleSortPriceClick} className={`sort__type ${sort === SortType.PRICE ? `sort__type--active` : ``}`} to="#">
          по цене
        </Link>

        <Link onClick={handleSortPopularClick} className={`sort__type ${sort === SortType.POPULAR ? `sort__type--active` : ``}`} to="#">
          по популярности
        </Link>
      </div>

      <div className="sort__inputs">
        <input type="button" id="down-up" name="sort"
          className={`sort__input visually-hidden ${sortDirection === SortDirection.UP ? `sort__input--checked` : ``}`}
          onClick={handleSortAscendingClick}
        />
        <label className="sort__label" htmlFor="down-up">
          <span className="sort__label-box sort__label-box--down"/>
          <span className="visually-hidden">От меньшего к большему</span>
        </label>

        <input type="button" id="up-down" name="sort"
          className={`sort__input visually-hidden ${sortDirection === SortDirection.DOWN ? `sort__input--checked` : ``}`}
          onClick={handleSortDescendingClick}
        />
        <label className="sort__label" htmlFor="up-down">
          <span className="sort__label-box sort__label-box--up"/>
          <span className="visually-hidden">От большего к меньшему</span>
        </label>
      </div>
    </section>
  );
};

Sort.propTypes = {
  sort: PropTypes.string,
  handleSortPriceClick: PropTypes.func.isRequired,
  handleSortPopularClick: PropTypes.func.isRequired,
  sortDirection: PropTypes.string,
  handleSortAscendingClick: PropTypes.func.isRequired,
  handleSortDescendingClick: PropTypes.func.isRequired,
};

export default Sort;
