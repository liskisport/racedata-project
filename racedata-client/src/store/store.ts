import { createStore, AnyAction } from 'redux';
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper';

import { User } from '../@types/racedata/user';

export interface State {
  user: User;
}

// create your reducer
const reducer = (state: State = { user: null }, action: AnyAction) => {
  switch (action.type) {
  case HYDRATE :
    // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    return {...state, user: action.payload };
  case 'USER' :
    return {...state, user: action.payload };
  default :
    return state;
  }
};

// create a makeStore function
const makeStore: MakeStore<State> = () => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore);
