import { AnyAction, Action, configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper';
import { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk';

import middleware from './middleware';
import rootReducer from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, null, Action<string>>;
export type AppMiddleware = ThunkMiddleware<RootState, Action<string>, null>;

const makeStore: MakeStore<RootState> = () => configureStore({
  reducer: (state: RootState, action: AnyAction) => {
    return (action.type === HYDRATE
      ? { ...state, ...action.payload }
      : rootReducer(state, action)
    );
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  devTools: true,
});

export type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<RootState>(makeStore);
