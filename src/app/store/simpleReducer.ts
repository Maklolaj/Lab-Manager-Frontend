import { Action, createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

// ACTIONS


export const siginIn = createAction('Sign in');

export const siginOut = createAction('Sign out');

//REDUCER


export interface IMainPageState {
    isSigningIn: boolean;
  }
  
export const InitialMainPageState: IMainPageState = {
    isSigningIn: false,
};

export const loginReducer = createReducer(
    InitialMainPageState,
    on(siginIn, (state:IMainPageState)=>{ return {
        ...state,
        isSigningIn: true
      }}),
    on(siginOut, (state:IMainPageState)=>{ return {
        ...state,
        isSigningIn: false
      }}),
)
//SELECTOR


export const slectLoginStatus = createSelector(
    createFeatureSelector('isLoggedIn'),
    (state:boolean)=>{
        return state
    }
)