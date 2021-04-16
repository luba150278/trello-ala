import axios from 'axios';
import { Dispatch } from 'redux';
import { BoardAction, BoardActionTypes } from '../../types/board';

export const fetchBoards = () => async (dispatch: Dispatch<BoardAction>): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.FETCH_BOARD });
    const response = await axios.get('https://trello-back.shpp.me/lmyetolkina/api/v1/board', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: BoardActionTypes.FETCH_BOARD_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: BoardActionTypes.FETCH_BOARD_ERROR, payload: "Error. Boards info don't load" });
  }
};
