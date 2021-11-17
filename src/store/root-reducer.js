import {combineReducers} from 'redux';
import {page} from './page/page';

export const NameSpace = {
  PAGE: `PAGE`,
};

export default combineReducers({
  [NameSpace.PAGE]: page
});
