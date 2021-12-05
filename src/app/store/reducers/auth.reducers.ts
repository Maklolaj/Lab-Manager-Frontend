import { createReducer, on } from '@ngrx/store';
import { siginIn, siginOut } from '../actions/auth.actions';
import { IMainPageState, InitialMainPageState } from '../models/IAuthState';
export { siginIn, siginOut } from '../actions/auth.actions';

export const loginReducer = createReducer(
  InitialMainPageState,
  on(siginIn, (state: IMainPageState, { isAdmin }) => {
    return {
      ...state,
      isSigningIn: true,
      isAdminSigningIn: isAdmin,
    };
  }),
  on(siginOut, (state: IMainPageState) => {
    return {
      ...state,
      isSigningIn: false,
      isAdminSigningIn: false,
    };
  })
);
