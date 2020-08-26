import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../@types/racedata/user';

export interface UserState {
  data: User | null;
  fetching: boolean;
  error: boolean | string;
}

const initialUserState: UserState = {
  data: null,
  fetching: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    userFetching(state) {
      state.fetching = true;
      state.data = null;
      state.error = false;
    },
    userSuccess(state, action: PayloadAction<User>) {
      state.fetching = false;
      state.data = action.payload;
      state.error = false;
    },
    userError(state, action: PayloadAction<boolean | string>) {
      state.fetching = false;
      state.data = null;
      state.error = action.payload;
    }
  }
});

export const { userFetching, userSuccess, userError } = userSlice.actions;

export default userSlice.reducer;
