import {SortType} from "./const";

export const getBodyScrollTop = () => window.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
export const isVerticalScroll = () => document.body.offsetHeight > window.innerHeight;

export const sorting = (guitars, sortType) => {
  switch (sortType) {
    case SortType.PRICE:
      return guitars.sort((a, b) => (a.price - b.price));
    case SortType.POPULAR:
      return guitars.sort((a, b) => (a.rating - b.rating));

    // case SortType.RATING_HIGH:
    //   return guitars.sort((a, b) => (b.rating - a.rating));
    // case SortType.PRICE_HIGH:
    //   return guitars.sort((a, b) => (b.price - a.price));
    default:
      return guitars;
  }
};
