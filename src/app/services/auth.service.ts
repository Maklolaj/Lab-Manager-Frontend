import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = environment.baseUrl;
  private header = { 'content-type': 'application/json' };

  signIn(email: string, password: string): Observable<any> {
    const url: string = `${this.baseUrl}/identity/login/`;

    const body = JSON.stringify({
      email: email,
      password: password,
    });

    return this.httpClient.post<any>(url, body, {
      headers: this.header,
    });
  }
}
