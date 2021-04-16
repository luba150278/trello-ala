import { BoardCreateAction, BoardCreateActionTypes, BoardCreateState } from '../../types/boardCreate';

const initialState: BoardCreateState = {
  board: { title: '' },
  loading: false,
  error: null,
};

export const boardCreateReducer = (state = initialState, action: BoardCreateAction): BoardCreateState => {
  switch (action.type) {
    case BoardCreateActionTypes.FETCH_BOARD_CREATE:
      return { loading: true, error: null, board: { title: '' } };
    case BoardCreateActionTypes.FETCH_BOARD_CREATE_SUCCESS:
      return { loading: false, error: null, board: action.payload };
    case BoardCreateActionTypes.FETCH_BOARD_CREATE_ERROR:
      return { loading: false, error: action.payload, board: { title: '' } };
    default:
      return state;
  }
};
