import { Component, OnInit } from '@angular/core';
import data from '../../itemsDB.json';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
    this.message = this.store.select('message')
  }

  userCase: string = '';

  ngOnInit(): void {
    const word = <any>data[0];
    console.log(word);
  }

  showReservations(): void{
    this.userCase = 'reservations';
    this.spanishMode()

  }

  spanishMode(){
    this.store.dispatch({type:'SPANISH'})
  }
  frenchMode(){
    this.store.dispatch({type:'FRENCH'})
  }

  makeReservation(): void {
    this.userCase = 'makeReservation';
    this.frenchMode()
  }
}
