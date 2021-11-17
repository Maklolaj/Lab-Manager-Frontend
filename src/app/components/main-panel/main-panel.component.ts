import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
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
  constructor(private store: Store<AppState>, private router: Router) {}

  userCase: string = '';

  ngOnInit(): void {}

  showReservations(): void {
    this.userCase = 'reservations';
  }

  logout() {
    this.store.dispatch(siginOut());
    this.router.navigate(['']);
    //this.store.select(slectLoginStatus).subscribe((x)=>(console.log(x)))
  }

  makeReservation(): void {
    this.userCase = 'makeReservation';
  }
}
