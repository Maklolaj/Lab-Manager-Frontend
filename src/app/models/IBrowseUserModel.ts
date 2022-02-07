export interface IBrowseUserModel {
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
}

export interface IUpdateUserPasswordModel {
  currentPassword: string;
  newUserPassword: string;
  newUserReTypedPassword: string;
}

export interface IUpdateUserEmailModel {
  userEmail: string;
  userPassword: string;
  userCode: string;
}