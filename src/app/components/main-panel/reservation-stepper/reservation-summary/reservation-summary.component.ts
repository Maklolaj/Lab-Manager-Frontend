import { Component, Input, OnInit } from '@angular/core';
import { IReservationModel } from 'src/app/models/ReservationModels/IReservationModel';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss'],
})
export class ReservationSummaryComponent implements OnInit {
  constructor() {}

  @Input()
  userReservation: IReservationModel = {
    id: 0,
    item: 0,
    user: '',
    startDate: null,
    endDate: null,
  };

  ngOnInit(): void {}
}
