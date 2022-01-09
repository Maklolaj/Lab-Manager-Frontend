import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { siginOut } from 'src/app/store/reducers/auth.reducers';
import { Router } from '@angular/router';
import { slectLoginStatus } from 'src/app/store/selectors/auth.selectors';
import { IMainPageState } from 'src/app/store/models/IAuthState';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent implements OnInit {
  message?: Observable<string>;

  userCase: string = '';

  isUserLogged: IMainPageState = {
    isSigningIn: false,
    isAdminSigningIn: false,
  };

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select(slectLoginStatus).subscribe((x: any) => {
      this.isUserLogged.isSigningIn = x['isSigningIn'];
      this.isUserLogged.isAdminSigningIn = x['isAdminSigningIn'];
    });
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(siginOut());
    this.router.navigate(['']);
  }

  showOption(option: string): void {
    this.userCase = option;
  }
}
