import { DatePipe, Time } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IReservationFromDateModel } from 'src/app/models/ReservationModels/IReservationFromDateModel';

@Component({
  selector: 'app-time-grid',
  templateUrl: './time-grid.component.html',
  styleUrls: ['./time-grid.component.scss'],
})
export class TimeGridComponent {
  constructor(public datepipe: DatePipe) {}

  @Input()
  reservationList: IReservationFromDateModel[] = [];

  selectedResStartTime: Date | null = null;
  selectedResEndTime: Date | null = null;

  @Output() selectedTimes: EventEmitter<Slot> = new EventEmitter();

  getReservationTime(day: number, hour: number): void {
    let selectedDay = this.reservationList[day].day;
    let selectedStartTime;
    let selectedEndTime;
    switch (hour) {
      case 0:
        selectedStartTime = '8:00';
        selectedEndTime = '10:00';
        break;
      case 1:
        selectedStartTime = '10:00';
        selectedEndTime = '12:00';
        break;
      case 2:
        selectedStartTime = '12:00';
        selectedEndTime = '14:00';
        break;
      case 3:
        selectedStartTime = '14:00';
        selectedEndTime = '16:00';
        break;
      case 4:
        selectedStartTime = '16:00';
        selectedEndTime = '18:00';
        break;
      case 5:
        selectedStartTime = '18:00';
        selectedEndTime = '20:00';
        break;
      default:
        break;
    }
    this.selectedResStartTime = new Date(`${selectedDay} ${selectedStartTime}`);
    this.selectedResEndTime = new Date(`${selectedDay} ${selectedEndTime}`);
    this.selectedTimes.emit({
      startDate: this.selectedResStartTime,
      endDate: this.selectedResEndTime,
    });
  }

  isCellActive(day: number, hour: number): boolean {
    return this.reservationList[day].reservations[hour].id == 0;
  }
}

export interface Slot {
  startDate: Date;
  endDate: Date;
}
