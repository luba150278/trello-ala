/* eslint-disable @typescript-eslint/no-explicit-any */
interface ITitle {
  title: string;
}
export interface BoardCreateState {
  board: ITitle;
  loading: boolean;
  error: null | string;
}
export enum BoardCreateActionTypes {
  FETCH_BOARD_CREATE = 'FETCH_BOARD_CREATE',
  FETCH_BOARD_CREATE_SUCCESS = 'FETCH_BOARD_CREATE_SUCCESS',
  FETCH_BOARD_CREATE_ERROR = 'FETCH_BOARD_CREATE_ERROR',
  SET_BOARD_CREATE = 'SET_BOARD_CREATE',
}

interface FetchBoardCreateAction {
  type: BoardCreateActionTypes.FETCH_BOARD_CREATE;
}
interface FetchBoardCreateSuccessAction {
  type: BoardCreateActionTypes.FETCH_BOARD_CREATE_SUCCESS;
  payload: any;
}
interface FetchBoardCreateErrorAction {
  type: BoardCreateActionTypes.FETCH_BOARD_CREATE_ERROR;
  payload: string;
}

interface SetBoardTitle {
  type: BoardCreateActionTypes.SET_BOARD_CREATE;
  payload: ITitle;
}
export type BoardCreateAction =
  | FetchBoardCreateAction
  | FetchBoardCreateSuccessAction
  | FetchBoardCreateErrorAction
  | SetBoardTitle;
