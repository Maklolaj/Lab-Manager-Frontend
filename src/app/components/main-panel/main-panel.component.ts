import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  IMainPageState,
  siginIn,
  siginOut,
  slectLoginStatus,
} from 'src/app/store/simpleReducer';
import { Router } from '@angular/router';

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
    //this.store.select(slectLoginStatus).subscribe((x)=>(console.log(x)))
  }

  showOption(option: string): void {
    this.userCase = option;
  }
}
