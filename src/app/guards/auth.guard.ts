import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { slectLoginStatus } from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<any>) {}

  canActivate(): boolean {
    let isSigned = false;
    let isAdminSigned = false;

    this.store.select(slectLoginStatus).subscribe((x: any) => {
      isSigned = x['isSigningIn'];
      isAdminSigned = x['isAdminSigningIn'];
    });

    if (isSigned) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
