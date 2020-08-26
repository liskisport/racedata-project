import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';

export default combineReducers({
  user: userSlice,
});
