import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import data from '../../../itemsDB.json';

@Component({
  selector: 'app-reservation-stepper',
  templateUrl: './reservation-stepper.component.html',
  styleUrls: ['./reservation-stepper.component.scss'],
})
export class ReservationStepperComponent implements OnInit {
  constructor() {}

  @ViewChild('stepper', { static: false })
  stepper!: MatStepper;

  itemList: any[] = [];

  itemValue: string = '';

  dateFormCtrl = new FormControl(new Date());

  ngOnInit(): void {
    this.itemList = data;
    console.log(this.itemList[0]);
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
