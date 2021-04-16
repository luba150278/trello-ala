import axios from 'axios';
import { Dispatch } from 'redux';
import { BoardCreateAction, BoardCreateActionTypes } from '../../types/boardCreate';

type ITitle = {
  title: string;
};
export const fetchCreateBoard = (data: ITitle) => async (dispatch: Dispatch<BoardCreateAction>): Promise<void> => {
  try {
    dispatch({ type: BoardCreateActionTypes.FETCH_BOARD_CREATE });
    const response = await axios.post('https://trello-back.shpp.me/lmyetolkina/api/v1/board', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
      body: {
        data,
      },
    });
    dispatch({ type: BoardCreateActionTypes.FETCH_BOARD_CREATE_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: BoardCreateActionTypes.FETCH_BOARD_CREATE_ERROR, payload: "Error. Boards info don't load" });
  }
};

export function setBoardTitle(data: ITitle): BoardCreateAction {
  return { type: BoardCreateActionTypes.SET_BOARD_CREATE, payload: data };
}
