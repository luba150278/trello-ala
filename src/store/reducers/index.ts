import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';
import { boardReducer } from './boardReducer';

export const rootReducer = combineReducers({ user: userReducer, todo: todoReducer, board: boardReducer });
export type RootState = ReturnType<typeof rootReducer>;
