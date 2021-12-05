import { createFeatureSelector, createSelector } from '@ngrx/store';

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
