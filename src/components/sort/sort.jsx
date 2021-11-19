import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {SortType} from '../../const';
import {setActiveSort} from '../../store/actions';

import "./style.scss";

const Sort = () => {
  const {activeSort} = useSelector((state) => state.GUITARS);

  const dispatch = useDispatch();

  const handelSortChange = (evt) => {
    dispatch(setActiveSort(evt.target.innerText));
  };

  return (
    <section className="sort">
      <h3 className="sort__title">Сортировать:</h3>
      {Object.values(SortType).map((sort, i) => (
        <Link key={sort + i} onClick={handelSortChange} className={`sort__type ${sort === activeSort ? `sort__type--active` : ``}`} to="#">
          {sort}
        </Link>
      ))}

      <div className="sort__inputs">
        <input className="sort__input visually-hidden " type="radio" id="down-up" name="sort" defaultChecked/>
        <label className="sort__label" htmlFor="down-up">
          <span className="sort__label-box sort__label-box--down"/>
          <span className="visually-hidden">От меньшего к большему</span>
        </label>

        <input className="sort__input visually-hidden" type="radio" id="up-down" name="sort" />
        <label className="sort__label" htmlFor="up-down">
          <span className="sort__label-box sort__label-box--up"/>
          <span className="visually-hidden">От большего к меньшему</span>
        </label>
      </div>
    </section>
  );
};

export default Sort;
