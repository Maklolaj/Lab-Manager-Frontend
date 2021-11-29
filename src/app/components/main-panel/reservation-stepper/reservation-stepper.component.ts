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

  itemValue: IItemModel = {
    describiton: '',
    id: 0,
    isDamaged: false,
    isDeleted: false,
    manufacturer: '',
    name: '',
    productionDate: new Date(),
  };

  userReservation: IReservationModel = {
    id: 0,
    item: 0,
    user: '',
    startDate: new Date(),
    endDate: new Date(),
  };

  dateFormCtrl = new FormControl(new Date());

  itemList: IItemModel[] = [];

  reservationList: IReservationFromDateModel[] = [];

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((x) => {
      this.itemList = x;
    });
  }

  goToDateSelect() {
    if (this.itemValue.id != 0) this.stepper.next();
  }

  goToTimeSelect() {
    if (this.userReservation.item != 0) this.stepper.next();
  }

  getReservationsOnThatDay() {
    const start = convert(this.dateFormCtrl.value) + ' 07:00'; // 2021-11-28 07:00
    const end = convert(this.dateFormCtrl.value) + ' 23:00'; // 2021-11-28 23:00
    this.reservationService
      .getReservationsFromDate(start, end, this.itemValue?.id)
      .subscribe((result: any) => {
        console.log(result);
        this.reservationList = result;
      });
  }

  getTimesFromTimeGrid(times: IReservationModel): void {
    this.userReservation.startDate = times.startDate;
    this.userReservation.endDate = times.endDate;
    this.userReservation.item = this.itemValue.id;
  }
}

//MOVE TO HELPER
export function convert(str: Date) {
  var date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join('-');
}
