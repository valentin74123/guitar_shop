import {combineReducers} from 'redux';
import {test} from './test/test';

export const NameSpace = {
  TEST: `TEST`
};

export default combineReducers({
  [NameSpace.TEST]: test
});
