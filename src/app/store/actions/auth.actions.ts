import { createAction, props } from '@ngrx/store';

export const siginIn = createAction('Sign in', props<{ isAdmin: boolean }>());

export const siginOut = createAction('Sign out');
