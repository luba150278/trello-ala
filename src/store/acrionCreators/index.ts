import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as BoardActionCreators from './board';
import * as BoardCreateActionCreators from './boardCreate';

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...BoardActionCreators,
  ...BoardCreateActionCreators,
};
