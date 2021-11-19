import {combineReducers} from 'redux';
import {page} from './page/page';
import {data} from './data/data';
import {guitars} from './guitars/guitars';

export const NameSpace = {
  PAGE: `PAGE`,
  DATA: `DATA`,
  GUITARS: `GUITARS`,
};

export default combineReducers({
  [NameSpace.PAGE]: page,
  [NameSpace.DATA]: data,
  [NameSpace.GUITARS]: guitars
});
