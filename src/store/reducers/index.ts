import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';
import { boardReducer } from './boardReducer';
import { boardCreateReducer } from './boardCreateReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  board: boardReducer,
  boardCreate: boardCreateReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
