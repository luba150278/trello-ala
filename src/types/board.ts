/* eslint-disable @typescript-eslint/no-explicit-any */
interface IBoard {
  id: number;
  title: string;
}

export interface BoardState {
  boards: IBoard[];
  loading: boolean;
  error: null | string;
}
export enum BoardActionTypes {
  FETCH_BOARD = 'FETCH_BOARD ',
  FETCH_BOARD_SUCCESS = 'FETCH_BOARD _SUCCESS',
  FETCH_BOARD_ERROR = 'FETCH_BOARD _ERROR',
}

interface FetchBoardAction {
  type: BoardActionTypes.FETCH_BOARD;
}
interface FetchBoardSuccessAction {
  type: BoardActionTypes.FETCH_BOARD_SUCCESS;
  payload: any[];
}
interface FetchBoardErrorAction {
  type: BoardActionTypes.FETCH_BOARD_ERROR;
  payload: string;
}
export type BoardAction = FetchBoardAction | FetchBoardSuccessAction | FetchBoardErrorAction;
