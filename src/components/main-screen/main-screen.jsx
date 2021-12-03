import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import CurrentPage from '../current-page/current-page';
import Filters from '../filters/filters';
import Sort from '../sort/sort';
import Catalog from '../catalog/catalog';
import Popup from '../popup/popup';
import {getPopup} from '../../store/page/selectors';
import {setPopup} from '../../store/actions';
import {getNumberFromString} from '../../utils';
import {COUNT_ON_PAGE, Price, GuitarType, StringsCount, SortType, SortDirection} from '../../const';

const MainScreen = () => {
  const {guitarsInfo} = useSelector((state) => state.DATA);

  const [focusedInputMin, setFocusedInputMin] = useState(false);
  const [focusedInputMax, setFocusedInputMax] = useState(false);

  const [sort, setSort] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const [currentGuitars, setCurrentGuitars] = useState(guitarsInfo);

  const [activePage, setActivePage] = useState(1);
  const [pagesCount, setPagesCount] = useState(Math.ceil(currentGuitars.length / COUNT_ON_PAGE));

  const [priceRange, setPriceRange] = useState({
    max: Price.MAX,
    min: Price.MIN,
  });

  const [guitarType, setGuitarType] = useState({
    electro: false,
    ukulele: false,
    acoustic: false,
  });

  const [guitarDisabled, setGuitarChecked] = useState({
    electro: false,
    ukulele: false,
    acoustic: false,
  });

  const [stringsType, setStringsType] = useState({
    four: false,
    six: false,
    seven: false,
    twelve: false,
  });

  const [stringsCount, setStringsCount] = useState({
    four: false,
    six: false,
    seven: false,
    twelve: false,
  });

  useEffect(() => {
    const array = guitarsInfo.filter((guitar) => {
      let result = false;

      if (!guitarType.acoustic && !guitarType.ukulele && !guitarType.electro &&
          !stringsCount.four && !stringsCount.six && !stringsCount.seven && !stringsCount.twelve) {
        result = true;
      }

      if (stringsCount.four) {
        result = guitar.strings === StringsCount.FOUR;
      }

      if (stringsCount.six) {
        result = guitar.strings === StringsCount.SIX;
      }

      if (stringsCount.seven) {
        result = guitar.strings === StringsCount.SEVEN;
      }

      if (stringsCount.twelve) {
        result = guitar.strings === StringsCount.TWELVE;
      }

      if (!guitarType.acoustic && !guitarType.ukulele && !guitarType.electro) {
        if (stringsCount.four && stringsCount.six) {
          result = (guitar.strings === StringsCount.FOUR) ||
          (guitar.strings === StringsCount.SIX);
        }

        if (stringsCount.four && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR) ||
          (guitar.strings === StringsCount.SEVEN);
        }

        if (stringsCount.four && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.FOUR) ||
          (guitar.strings === StringsCount.TWELVE);
        }

        if (stringsCount.seven && stringsCount.six) {
          result = (guitar.strings === StringsCount.SEVEN) ||
          (guitar.strings === StringsCount.SIX);
        }

        if (stringsCount.twelve && stringsCount.six) {
          result = (guitar.strings === StringsCount.TWELVE) ||
          (guitar.strings === StringsCount.SIX);
        }

        if (stringsCount.twelve && stringsCount.seven) {
          result = (guitar.strings === StringsCount.TWELVE) ||
          (guitar.strings === StringsCount.SEVEN);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR) ||
          (guitar.strings === StringsCount.SIX) ||
          (guitar.strings === StringsCount.SEVEN);
        }

        if (stringsCount.four && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.FOUR) ||
          (guitar.strings === StringsCount.SEVEN) ||
          (guitar.strings === StringsCount.TWELVE);
        }

        if (stringsCount.four && stringsCount.twelve && stringsCount.six) {
          result = (guitar.strings === StringsCount.FOUR) ||
          (guitar.strings === StringsCount.TWELVE) ||
          (guitar.strings === StringsCount.SIX);
        }

        if (stringsCount.seven && stringsCount.twelve && stringsCount.six) {
          result = (guitar.strings === StringsCount.SEVEN) ||
          (guitar.strings === StringsCount.TWELVE) ||
          (guitar.strings === StringsCount.SIX);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.FOUR) ||
          (guitar.strings === StringsCount.SIX) ||
          (guitar.strings === StringsCount.SEVEN) ||
          (guitar.strings === StringsCount.TWELVE);
        }
      }

      if (guitarType.electro) {
        result = guitar.type === GuitarType.ELECTRO;

        if (stringsCount.four) {
          result = guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.six) {
          result = guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.seven) {
          result = guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.four && stringsCount.six) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.four && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO;
        }
      }

      if (guitarType.ukulele) {
        result = guitar.type === GuitarType.UKULELE;
      }

      if (guitarType.acoustic) {
        result = guitar.type === GuitarType.ACOUSTIC;

        if (stringsCount.six) {
          result = guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.seven) {
          result = guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.twelve) {
          result = guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.twelve && stringsCount.six) {
          result = (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC) ||
          guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.twelve && stringsCount.seven) {
          result = (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC) ||
          guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.twelve && stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC;
        }
      }

      if (guitarType.ukulele && guitarType.electro) {
        result = guitar.type === GuitarType.UKULELE || guitar.type === GuitarType.ELECTRO;

        if (stringsCount.four) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) || guitar.type === GuitarType.UKULELE;
        }

        if (stringsCount.six) {
          result = guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.seven) {
          result = guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.four && stringsCount.six) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) || guitar.type === GuitarType.UKULELE ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO);
        }

        if (stringsCount.four && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) || guitar.type === GuitarType.UKULELE ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO);
        }

        if (stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) || guitar.type === GuitarType.UKULELE ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO);
        }
      }

      if (guitarType.ukulele && guitarType.acoustic) {
        result = guitar.type === GuitarType.UKULELE || guitar.type === GuitarType.ACOUSTIC;

        if (stringsCount.four) {
          result = guitar.type === GuitarType.UKULELE;
        }

        if (stringsCount.six) {
          result = guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.seven) {
          result = guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.twelve) {
          result = guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.four && stringsCount.six) {
          result = (guitar.type === GuitarType.UKULELE) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.seven) {
          result = (guitar.type === GuitarType.UKULELE) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.twelve) {
          result = (guitar.type === GuitarType.UKULELE) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.six && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven) {
          result = (guitar.type === GuitarType.UKULELE) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.type === GuitarType.UKULELE) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.twelve) {
          result = (guitar.type === GuitarType.UKULELE) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.six && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.type === GuitarType.UKULELE) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC;
        }
      }

      if (guitarType.electro && guitarType.acoustic) {
        result = guitar.type === GuitarType.ELECTRO || guitar.type === GuitarType.ACOUSTIC;

        if (stringsCount.four) {
          result = guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO;
        }

        if (stringsCount.six) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.seven) {
          result = (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.twelve) {
          result = guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC;
        }

        if (stringsCount.four && stringsCount.six) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.six && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.six && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.four && stringsCount.six && stringsCount.seven && stringsCount.twelve) {
          result = (guitar.strings === StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC) ||
          (guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC);
        }
      }

      if (guitarType.electro && guitarType.acoustic && guitarType.ukulele) {
        result = guitar.type === GuitarType.ELECTRO || guitar.type === GuitarType.ACOUSTIC || guitar.type === GuitarType.UKULELE;

        if (stringsCount.four) {
          result = guitar.strings === (StringsCount.FOUR && guitar.type === GuitarType.ELECTRO) || guitar.type === GuitarType.UKULELE;
        }

        if (stringsCount.six) {
          result = (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SIX && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.seven) {
          result = (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ELECTRO) ||
          (guitar.strings === StringsCount.SEVEN && guitar.type === GuitarType.ACOUSTIC);
        }

        if (stringsCount.twelve) {
          result = guitar.strings === StringsCount.TWELVE && guitar.type === GuitarType.ACOUSTIC;
        }
      }

      if (result) {
        result = (guitar.price >= priceRange.min && guitar.price <= priceRange.max);
      }

      return result;
    });

    if (sort === SortType.PRICE) {
      if (sortDirection === null || sortDirection === SortDirection.UP) {
        setCurrentGuitars(array.sort((a, b) => a.price - b.price));
        setSortDirection(SortDirection.UP);
      }

      if (sortDirection === SortDirection.DOWN) {
        setCurrentGuitars(array.sort((a, b) => b.price - a.price));
      }
    }

    if (sort === SortType.POPULAR) {
      if (sortDirection === null || sortDirection === SortDirection.UP) {
        setCurrentGuitars(array.sort((a, b) => a.rating - b.rating));
        setSortDirection(SortDirection.UP);
      }

      if (sortDirection === SortDirection.DOWN) {
        setCurrentGuitars(array.sort((a, b) => b.rating - a.rating));
      }
    }

    setPagesCount(Math.ceil(array.length / COUNT_ON_PAGE));
    setCurrentGuitars(array);
  }, [guitarType, sort, sortDirection, priceRange, stringsCount]);

  useEffect(() => {
    if (guitarType.ukulele && !guitarType.electro && !guitarType.acoustic) {
      setStringsType({
        four: false,
        six: true,
        seven: true,
        twelve: true,
      });

      setStringsCount({
        ...stringsCount,
        six: false,
        seven: false,
        twelve: false,
      });
    }

    if (guitarType.acoustic && !guitarType.electro && !guitarType.ukulele) {
      setStringsType({
        four: true,
        six: false,
        seven: false,
        twelve: false,
      });

      setStringsCount({
        ...stringsCount,
        four: false,
      });
    }

    if (guitarType.electro && !guitarType.acoustic) {
      setStringsType({
        four: false,
        six: false,
        seven: false,
        twelve: true,
      });

      setStringsCount({
        ...stringsCount,
        twelve: false,
      });
    }

    if ((guitarType.electro && guitarType.acoustic) || (guitarType.acoustic && guitarType.ukulele)) {
      setStringsType({
        four: false,
        six: false,
        seven: false,
        twelve: false,
      });
    }

    if (!guitarType.electro && !guitarType.acoustic && !guitarType.ukulele) {
      setStringsType({
        four: false,
        six: false,
        seven: false,
        twelve: false,
      });

      setStringsCount({
        four: false,
        six: false,
        seven: false,
        twelve: false,
      });
    }
  }, [guitarType]);

  useEffect(() => {
    if ((!stringsCount.four && !stringsCount.six && !stringsCount.seven && !stringsCount.twelve) ||
    (stringsCount.four && stringsCount.six && stringsCount.seven && stringsCount.twelve)) {
      setGuitarChecked({
        electro: false,
        ukulele: false,
        acoustic: false,
      });
    }

    if (stringsCount.four) {
      setGuitarChecked({
        ...guitarDisabled,
        acoustic: true,
      });
    }

    if (stringsCount.six || stringsCount.seven) {
      setGuitarChecked({
        ...guitarDisabled,
        ukulele: true,
      });
    }

    if (stringsCount.twelve) {
      setGuitarChecked({
        ...guitarDisabled,
        electro: true,
        ukulele: true,
      });
    }

    if (stringsCount.four && stringsCount.six || stringsCount.four && stringsCount.seven) {
      setGuitarChecked({
        electro: false,
        ukulele: false,
        acoustic: false,
      });
    }

    if (stringsCount.four && stringsCount.twelve) {
      setGuitarChecked({
        electro: false,
        ukulele: false,
        acoustic: false,
      });
    }

    if (stringsCount.twelve && stringsCount.six || stringsCount.twelve && stringsCount.seven) {
      setGuitarChecked({
        electro: false,
        ukulele: true,
        acoustic: false,
      });
    }

    if (stringsCount.twelve && stringsCount.six && stringsCount.four || stringsCount.twelve && stringsCount.four && stringsCount.seven) {
      setGuitarChecked({
        electro: false,
        ukulele: false,
        acoustic: false,
      });
    }
  }, [stringsCount]);

  useEffect(() => {
    if (priceRange.min < Price.MIN && !focusedInputMin) {
      return setPriceRange({
        ...priceRange,
        min: Price.MIN,
      });
    }

    if (priceRange.min > Price.MAX && !focusedInputMin) {
      return setPriceRange({
        ...priceRange,
        min: Price.MAX,
      });
    }

    if (priceRange.min > priceRange.max && priceRange.max > Price.MIN && !focusedInputMin) {
      return setPriceRange({
        ...priceRange,
        max: priceRange.min,
      });
    }

    if (priceRange.max > Price.MAX && !focusedInputMax) {
      return setPriceRange({
        ...priceRange,
        max: Price.MAX,
      });
    }

    if (priceRange.max < priceRange.min && !focusedInputMin) {
      return setPriceRange({
        ...priceRange,
        max: priceRange.min,
      });
    }

    return setPriceRange({
      max: priceRange.max,
      min: priceRange.min,
    });
  }, [focusedInputMin, focusedInputMax]);


  const handleInputMinFocus = () => {
    setFocusedInputMin(true);
  };

  const handleInputMaxFocus = () => {
    setFocusedInputMax(true);
  };

  const handleInputMinBlur = () => {
    setFocusedInputMin(false);
  };

  const handleInputMaxBlur = () => {
    setFocusedInputMax(false);
  };


  const handleSortPriceClick = (evt) => {
    evt.preventDefault();

    setSort(SortType.PRICE);
  };

  const handleSortPopularClick = (evt) => {
    evt.preventDefault();

    setSort(SortType.POPULAR);
  };

  const handleSortAscendingClick = (evt) => {
    evt.preventDefault();

    if (sortDirection === SortDirection.UP) {
      return;
    }

    if (sort === null) {
      setSort(SortType.PRICE);
    }

    setSortDirection(SortDirection.UP);
    setCurrentGuitars(currentGuitars.reverse());
  };

  const handleSortDescendingClick = (evt) => {
    evt.preventDefault();

    if (sortDirection === SortDirection.DOWN) {
      return;
    }

    if (sort === null) {
      setSort(SortType.PRICE);
    }

    setSortDirection(SortDirection.DOWN);
    setCurrentGuitars(currentGuitars.reverse());
  };

  const handleMinPriceType = (evt) => {
    const number = getNumberFromString(evt.target.value);

    setPriceRange({
      ...priceRange,
      min: number,
    });
  };

  const handleMaxPriceType = (evt) => {
    const number = getNumberFromString(evt.target.value);

    setPriceRange({
      ...priceRange,
      max: number,
    });
  };

  const handleGuitarTypeChange = (evt) => {
    switch (evt.target.value) {
      case GuitarType.ELECTRO: {
        return setGuitarType({
          ...guitarType,
          electro: evt.target.checked,
        });
      }
      case GuitarType.ACOUSTIC: {
        return setGuitarType({
          ...guitarType,
          acoustic: evt.target.checked,
        });
      }
      case GuitarType.UKULELE: {
        return setGuitarType({
          ...guitarType,
          ukulele: evt.target.checked,
        });
      }
      default: {
        return ``;
      }
    }
  };

  const handleStringsCountClick = (evt) => {
    switch (evt.target.value) {
      case StringsCount.FOUR: {
        return setStringsCount({
          ...stringsCount,
          four: evt.target.checked,
        });
      }
      case StringsCount.SIX: {
        return setStringsCount({
          ...stringsCount,
          six: evt.target.checked,
        });
      }
      case StringsCount.SEVEN: {
        return setStringsCount({
          ...stringsCount,
          seven: evt.target.checked,
        });
      }
      case StringsCount.TWELVE: {
        return setStringsCount({
          ...stringsCount,
          twelve: evt.target.checked,
        });
      }
      default: {
        return ``;
      }
    }
  };

  const handleNextPageClick = (evt) => {
    evt.preventDefault();

    setActivePage(activePage + 1);
  };

  const handlePrevPageClick = (evt) => {
    evt.preventDefault();

    setActivePage(activePage - 1);
  };

  const handleLinkPageClick = (evt) => {
    evt.preventDefault();
    setActivePage(parseInt(evt.target.id, 10));
  };

  const dispatch = useDispatch();
  const popupName = useSelector(getPopup);
  const isPopupShown = Boolean(popupName);
  const closePopup = useCallback(() => {
    dispatch(setPopup(null));
  }, [dispatch]);

  const isBasket = false;

  const guitars = currentGuitars.slice((activePage - 1) * COUNT_ON_PAGE, activePage * COUNT_ON_PAGE);

  return (
    <div className="page">
      <Header isBasket={isBasket} />

      <main className="main">
        <CurrentPage isBasket={isBasket} />

        <section className="catalog-section">
          <Filters
            priceRange={priceRange}
            onFocusMin={handleInputMinFocus}
            onBlurMin={handleInputMinBlur}
            onChangeMin={handleMinPriceType}
            onFocusMax={handleInputMaxFocus}
            onBlurMax={handleInputMaxBlur}
            onChangeMax={handleMaxPriceType}

            guitarType={guitarType}
            guitarDisabled={guitarDisabled}
            handleGuitarTypeChange={handleGuitarTypeChange}

            stringsType={stringsType}
            stringsCount={stringsCount}
            handleStringsCountClick={handleStringsCountClick}
          />

          <Sort
            sort={sort}
            handleSortPriceClick={handleSortPriceClick}
            handleSortPopularClick={handleSortPopularClick}

            sortDirection={sortDirection}
            handleSortAscendingClick={handleSortAscendingClick}
            handleSortDescendingClick={handleSortDescendingClick}
          />

          <Catalog
            guitars={guitars}
            currentGuitars={currentGuitars}

            pagesCount={pagesCount}
            activePage={activePage}
            handlePrevPageClick={handlePrevPageClick}
            handleLinkPageClick={handleLinkPageClick}
            handleNextPageClick={handleNextPageClick}
          />
        </section>
      </main>

      <Footer isBasket={isBasket}/>

      {isPopupShown && <Popup
        id={popupName}
        onClose={closePopup}
      />}
    </div>
  );
};

export default MainScreen;
