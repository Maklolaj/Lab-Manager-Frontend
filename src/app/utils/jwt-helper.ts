import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JWTHelper {
  constructor() {}

  getDecodedJWT(): string {
    return atob(
      JSON.parse(localStorage.getItem('jwt')!)['token'].split('.')[1]
    );
  }
}
