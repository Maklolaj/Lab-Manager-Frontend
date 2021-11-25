import { Component, Input, OnInit } from '@angular/core';
import { IItemModel } from 'src/app/models/IItemModel';
import { IReservationFromDateModel } from 'src/app/models/ReservationModels/IReservationFromDateModel';

@Component({
  selector: 'app-time-grid',
  templateUrl: './time-grid.component.html',
  styleUrls: ['./time-grid.component.scss'],
})
export class TimeGridComponent implements OnInit {
  constructor() {}

  @Input()
  reservationList: IReservationFromDateModel[] = [];

  ngOnInit(): void {
    let persons: { [id: string]: IReservation } = {};

    persons['p1'] = { firstName: 'F1', lastName: 'L1' };
    persons['p2'] = { firstName: 'F2', lastName: 'P3' }; // will result in an error

    for (let key in persons) {
      console.log(persons[key]['lastName']);
      // Use `key` and `value`
    }
  }
}

export interface IReservation {
  firstName: string;
  lastName: string;
}
