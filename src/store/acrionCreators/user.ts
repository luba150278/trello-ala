import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>): Promise<void> => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error. Users info don't load" });
  }
};
