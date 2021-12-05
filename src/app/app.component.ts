import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { slectLoginStatus } from './store/selectors/auth.selectors';
import { IMainPageState } from './store/models/IAuthState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isUserLogged: IMainPageState = {
    isSigningIn: false,
    isAdminSigningIn: false,
  };

  constructor(private store: Store<any>) {
    this.store.select(slectLoginStatus).subscribe((x: any) => {
      this.isUserLogged.isSigningIn = x['isSigningIn'];
      this.isUserLogged.isAdminSigningIn = x['isAdminSigningIn'];
    });
  }
}
