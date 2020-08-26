import { createSelector } from 'reselect';

import { UserState } from '../slices/userSlice';
import { RootState } from '../store';

export const userSelector = (state: RootState): UserState => state.user;

export const userFetchingSelector = createSelector(userSelector, (user) => user.fetching);
export const userDataSelector = createSelector(userSelector, (user) => user.data);
export const userErrorSelector = createSelector(userSelector, (user) => user.error);
