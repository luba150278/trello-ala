import { BoardAction, BoardActionTypes, BoardState } from '../../types/board';

const initialState: BoardState = {
  boards: [],
  loading: false,
  error: null,
};

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
  switch (action.type) {
    case BoardActionTypes.FETCH_BOARD:
      return { loading: true, error: null, boards: [] };
    case BoardActionTypes.FETCH_BOARD_SUCCESS:
      return { loading: false, error: null, boards: action.payload };
    case BoardActionTypes.FETCH_BOARD_ERROR:
      return { loading: false, error: action.payload, boards: [] };
    default:
      return state;
  }
};
