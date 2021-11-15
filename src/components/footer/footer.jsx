import React from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';

import "./style.scss";

const Footer = () => {
  const isFooter = true;

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <Logo isFooter={isFooter} />

          <div className="footer__social social">
            <ul className="social__list">
              <li className="social__item">
                <Link className="social__link" to="#">
                  <svg className="social__icon" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                  <span className="visually-hidden">Facebook</span>
                </Link>
              </li>

              <li className="social__item">
                <Link className="social__link" to="#">
                  <svg className="social__icon" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                  <span className="visually-hidden">Instagram</span>
                </Link>
              </li>

              <li className="social__item">
                <Link className="social__link" to="#">
                  <svg className="social__icon" width="24" height="24">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                  <span className="visually-hidden">Twitter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__navigation footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <span className="footer-nav__title">О нас</span>
              <ul className="footer-nav__info-list footer-nav__info-list--text">
                <li className="footer-nav__info-list-item">
                  Магазин гитар, музыкальных&nbsp;инструментов и&nbsp;гитарная
                  мастерская в Санкт-Петербурге.
                </li>

                <li className="footer-nav__info-list-item">
                  Все инструменты проверены,&nbsp;отстроены и доведены до идеала!
                </li>
              </ul>
            </li>

            <li className="footer-nav__item">
              <span className="footer-nav__title">Каталог</span>
              <ul className="footer-nav__info-list">
                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-guitar" to="#">
                    Акустические гитары
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-guitar" to="#">
                    Классические гитары
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-guitar" to="#">
                    Электрогитары
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-guitar" to="#">
                    Бас-гитары
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-guitar" to="#">
                    Укулеле
                  </Link>
                </li>
              </ul>
            </li>

            <li className="footer-nav__item">
              <span className="footer-nav__title">Информация</span>
              <ul className="footer-nav__info-list">
                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-nav" to="#">
                    Где купить?
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-nav" to="#">
                    Блог
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-nav" to="#">
                    Вопрос - ответ
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-nav" to="#">
                    Возврат
                  </Link>
                </li>

                <li className="footer-nav__info-list-item">
                  <Link className="footer-nav__info-nav" to="#">
                    Сервис-центры
                  </Link>
                </li>
              </ul>
            </li>

            <li className="footer-nav__item">
              <span className="footer-nav__title">Контакты</span>
              <ul className="footer-nav__info-list footer-nav__info-list--text">
                <li className="footer-nav__info-list-item">
                  г. Санкт-Петербург,
                  м.&nbsp;Невский проспект, ул.&nbsp;Казанская 6.<br />
                  <svg className="footer-nav__info-icon" width="10" height="10">
                    <use xlinkHref="#phone"></use>
                  </svg>
                  <a className="footer-nav__phone" href="tel:88125005050">8-812-500-50-50</a>
                </li>

                <li className="footer-nav__info-list-item">
                  Режим работы:<br />
                  <svg className="footer-nav__info-icon" width="10" height="10">
                    <use xlinkHref="#time"></use>
                  </svg>
                  с 11:00 до 20:00,
                  без&nbsp;выходных.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="guitar guitar--footer">
          <span className="visually-hidden">Гитара</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
