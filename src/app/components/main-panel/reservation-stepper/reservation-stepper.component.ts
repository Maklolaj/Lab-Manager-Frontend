import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import { ItemService } from 'src/app/services/item.service';
import { IItemModel } from 'src/app/models/IItemModel';
import { IReservationModel } from 'src/app/models/ReservationModels/IReservationModel';
import { ReservationService } from 'src/app/services/reservation.service';
import { IReservationFromDateModel } from 'src/app/models/ReservationModels/IReservationFromDateModel';

@Component({
  selector: 'app-reservation-stepper',
  templateUrl: './reservation-stepper.component.html',
  styleUrls: ['./reservation-stepper.component.scss'],
})
export class ReservationStepperComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    private reservationService: ReservationService
  ) {}

  @ViewChild('stepper', { static: false })
  stepper!: MatStepper;

  itemValue: string = '';

  dateFormCtrl = new FormControl(new Date());

  itemList: IItemModel[] = [];
  reservationList: IReservationFromDateModel[] = [];

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((x) => {
      this.itemList = x;
      console.log(this.itemList);
    });
  }

  test() {
    console.log(this.itemValue);
    console.log(this.dateFormCtrl.value);
    console.log(convert(this.dateFormCtrl.value));
  }

  goNext() {
    if (this.itemValue) this.stepper.next();
  }

  getReservationsOnThatDay() {
    const start = convert(this.dateFormCtrl.value) + ' 07:00';
    const end = convert(this.dateFormCtrl.value) + ' 23:00';
    console.log(start);
    console.log(end);
    this.reservationService
      .getReservationsFromDate(start, end)
      .subscribe((result: any) => {
        console.log(result);
        this.reservationList = result;
      });
  }
}

//MOVE TO HELPER
export function convert(str: Date) {
  var date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join('-');
}
