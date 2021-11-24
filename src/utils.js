import {GuitarType} from './const';

export const getBodyScrollTop = () => window.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
export const isVerticalScroll = () => document.body.offsetHeight > window.innerHeight;

export const getNumberFromString = (str) => parseInt(str.replace(/[^0-9]/g, ``), 10) || ``;

export const getNumberWithSpaces = (number) => {
  const chars = [...number.toString()];

  if (chars.length !== 0) {
    const stringWithSpace = chars.reduceRight((acc, char, index, array) => {
      const spaceOrNothing = (array.length - index) % 3 === 0 ? ` ` : ``;
      return spaceOrNothing + char + acc;
    });

    const result = stringWithSpace[0] === ` ` ? stringWithSpace.slice(1) : stringWithSpace;

    return result;
  }

  return `0`;
};

export const returnGuitarPicture = (guitarType) => {
  switch (guitarType) {
    case GuitarType.ELECTRO:
      return `./img/electro-guitar.png`;
    case GuitarType.ACOUSTIC:
      return `./img/acoustic-guitar.png`;
    case GuitarType.UKULELE:
      return `./img/ukulele.png`;
    default:
      return ``;
  }
};

export const returnGuitarSmallPicture = (guitarType) => {
  switch (guitarType) {
    case GuitarType.ELECTRO:
      return `./img/small-electro-guitar.png`;
    case GuitarType.ACOUSTIC:
      return `./img/small-acoustic-guitar.png`;
    case GuitarType.UKULELE:
      return `./img/small-ukulele.png`;
    default:
      return ``;
  }
};
