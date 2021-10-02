import { Component, OnInit } from '@angular/core';
import data from '../../itemsDB.json';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent implements OnInit {
  constructor() {}

  userCase: string = '';

  ngOnInit(): void {
    const word = <any>data[0];
    console.log(word);
  }

  showReservations(): void{
    this.userCase = 'reservations';
  }

  makeReservation(): void {
    this.userCase = 'makeReservation';
  }
}
