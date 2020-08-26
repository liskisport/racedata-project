import { AppThunk } from '../store';
import { getUserData } from '../../api/userApi';
import { userFetching, userSuccess, userError } from '../slices/userSlice';

type UserRequestPropsType = {
  login: string;
  password: string;
};

const userRequest = (query: UserRequestPropsType): AppThunk => async (dispatch) => {
  dispatch(userFetching());

  try {
    const response = await getUserData(query);
    dispatch(userSuccess(response));
  } catch (error) {
    dispatch(userError(error));
  }
};

export { userRequest as default, userRequest };
