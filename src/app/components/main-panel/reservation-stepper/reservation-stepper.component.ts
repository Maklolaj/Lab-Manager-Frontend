import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import { ItemService } from 'src/app/services/item.service';
import { IItemModel } from 'src/app/models/IItemModel';
import { IReservationModel } from 'src/app/models/IReservationModel';
import { ReservationService } from 'src/app/services/reservation.service';

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
  reservationList: IReservationModel[] = [];

  ngOnInit(): void {
    //console.log(this.itemList[0]);
    this.itemService.getAllItems().subscribe((x) => {
      this.itemList = x;
      console.log(this.itemList);
    });
    this.reservationService.getAllReservations().subscribe((y) => {
      this.reservationList = y;
      console.log(this.reservationList);
    });

    // for (const item of this.testList) {
    //   console.log(item.name);
    // }
  }

  test() {
    console.log(this.itemValue);
    console.log(this.dateFormCtrl.value);
    console.log(convert(this.dateFormCtrl.value));
  }

  goNext() {
    if (this.itemValue) this.stepper.next();
  }
}

//MOVE TO HELPER
export function convert(str: Date) {
  var date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join('-');
}
