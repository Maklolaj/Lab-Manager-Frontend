import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JWTHelper {
  constructor() {}

  getDecodedJWT(): string {
    return localStorage.getItem('jwt')
      ? atob(JSON.parse(localStorage.getItem('jwt'))['token'].split('.')[1])
      : null;
  }

  getExpDate(): Date {
    return this.getDecodedJWT()
      ? JSON.parse(this.getDecodedJWT())['exp']
      : null;
  }
}
