import {
  Action,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

// ACTIONS

export const siginIn = createAction('Sign in', props<{ isAdmin: boolean }>());

export const siginOut = createAction('Sign out');

//REDUCER

export interface IMainPageState {
  isSigningIn: boolean;
  isAdminSigningIn: boolean;
}

export const InitialMainPageState: IMainPageState = {
  isSigningIn: false,
  isAdminSigningIn: false,
};

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
//SELECTOR

export const slectLoginStatus = createSelector(
  createFeatureSelector('isLoggedIn'),
  (state: boolean) => {
    return state;
  }
);

export const slectAdminStatus = createSelector(
  createFeatureSelector('isAdmin'),
  (state: boolean) => {
    return state;
  }
);
