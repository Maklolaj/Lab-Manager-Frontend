import { Component, OnInit } from '@angular/core';
import data from '../../itemsDB.json';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { siginIn, siginOut, slectLoginStatus } from 'src/app/store/simpleReducer';

interface AppState {
  message:string;
}

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent implements OnInit {
  message?: Observable<string>
  constructor(
    private store:Store<AppState>
  ) {

  }

  userCase: string = '';

  ngOnInit(): void {
    const word = <any>data[0];
    console.log(word);
  }

  showReservations(): void{
    this.userCase = 'reservations';

  }

  test2(){
    this.store.dispatch(siginIn())
    //this.store.select(slectLoginStatus).subscribe((x)=>(console.log(x)))
   }
   test3(){
    this.store.dispatch(siginOut())
    //this.store.select(slectLoginStatus).subscribe((x)=>(console.log(x)))
   }


  makeReservation(): void {
    this.userCase = 'makeReservation';
  }
}
