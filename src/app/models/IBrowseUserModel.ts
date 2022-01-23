export interface IBrowseUserModel {
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
}

export interface IUpdateUserModel {
  userEmail: string;
  userPassword: string;
  userReTypedPassword: string;
}
