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

  private basicHttpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('jwt')!)['token']
      }`,
    }),
  };

  getJWT() {
    console.log(JSON.parse(localStorage.getItem('jwt')!));
    JSON.parse(localStorage.getItem('jwt')) != null
      ? JSON.parse(localStorage.getItem('jwt')!)['token']
      : ' ';
  }

  signIn(email: string, password: string): Observable<any> {
    const url: string = `${this.baseUrl}/identity/login/`;

    const body = JSON.stringify({
      email: email,
      password: password,
    });

    return this.httpClient.post<any>(url, body, this.basicHttpOptions);
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

    return this.httpClient.post<any>(url, body, this.basicHttpOptions);
  }

  updateUserEmail(model: IUpdateUserEmailModel): Observable<any> {
    const url: string = `${this.baseUrl}/identity/user/email/`;
    console.log(this.httpOptions.headers);
    const body = JSON.stringify({
      email: model.userEmail,
      password: model.userPassword,
      code: model.userCode,
    });

    return this.httpClient.post<any>(url, body, this.httpOptions);
  }

  confirmNewEmail(model: IUpdateUserEmailModel): Observable<any> {
    const url: string = `${this.baseUrl}/identity/user/email/confirm/`;

    const body = JSON.stringify({
      email: model.userEmail,
      password: model.userPassword,
      code: model.userCode,
    });

    return this.httpClient.post<any>(url, body, this.httpOptions);
  }

  updateUserPassword(model: IUpdateUserPasswordModel): Observable<any> {
    const url: string = `${this.baseUrl}/identity/user/password/`;

    const body = JSON.stringify({
      currentPassword: model.currentPassword,
      password: model.newUserPassword,
      repeatedPassword: model.newUserReTypedPassword,
    });

    return this.httpClient.post<any>(url, body, this.httpOptions);
  }
}
