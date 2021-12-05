export interface IMainPageState {
  isSigningIn: boolean;
  isAdminSigningIn: boolean;
}

export const InitialMainPageState: IMainPageState = {
  isSigningIn: false,
  isAdminSigningIn: false,
};
