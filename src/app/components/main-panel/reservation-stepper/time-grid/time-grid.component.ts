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
    console.log(this.reservationList)
  }
}

