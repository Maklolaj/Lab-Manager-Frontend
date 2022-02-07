import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {
  IBrowseUserModel,
  IUpdateUserEmailModel,
  IUpdateUserPasswordModel,
} from '../models/IBrowseUserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('jwt')!)['token']
      }`,
    }),
  };

  signIn(email: string, password: string): Observable<any> {
    const url: string = `${this.baseUrl}/identity/login/`;

    const body = JSON.stringify({
      email: email,
      password: password,
    });

    return this.httpClient.post<any>(url, body, this.httpOptions);
  }

  getAllUsers(): Observable<any> {
    const url: string = `${this.baseUrl}/identity/users/`;
    return this.httpClient.get<IBrowseUserModel[]>(url, this.httpOptions);
  }

  registerUser(email: string, password: string): Observable<any> {
    const url: string = `${this.baseUrl}/identity/register/`;

    const body = JSON.stringify({
      email: email,
      password: password,
    });

    return this.httpClient.post<any>(url, body, this.httpOptions);
  }

  updateUserEmail(model: IUpdateUserEmailModel) {
    const url: string = `${this.baseUrl}/identity/user/email/`;

    const body = JSON.stringify({
      email: model.userEmail,
      password: model.userPassword,
      code: model.userCode,
    });

    return this.httpClient.put<any>(url, body, this.httpOptions);
  }

  confirmNewEmail(model: IUpdateUserEmailModel) {
    const url: string = `${this.baseUrl}/identity/user/email/confirm/`;

    const body = JSON.stringify({
      email: model.userEmail,
      password: model.userPassword,
      code: model.userCode,
    });

    return this.httpClient.put<any>(url, body, this.httpOptions);
  }

  updateUserPassword(model: IUpdateUserPasswordModel) {
    const url: string = `${this.baseUrl}/identity/user/password/`;

    const body = JSON.stringify({
      currentPassword: model.currentPassword,
      newUserPassword: model.newUserPassword,
      newUserReTypedPassword: model.newUserReTypedPassword,
    });

    return this.httpClient.put<any>(url, body, this.httpOptions);
  }
}
