import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as BoardActionCreators from './board';

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...BoardActionCreators,
};
