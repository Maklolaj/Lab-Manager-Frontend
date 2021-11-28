import { Component, Input, OnInit } from '@angular/core';
import { IItemModel } from 'src/app/models/IItemModel';
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
    startDate: new Date(), //null
    endDate: new Date(), //null
  };

  @Input()
  itemList: IItemModel[] = [];

  ngOnInit(): void {
    console.log(this.userReservation.item);
  }

  formatSummaryDate(date: Date): string {
    return `${date?.getFullYear()}-${date?.getMonth()}-${date?.getDate()} ${date?.getHours()}:${date?.getMinutes()}0`; // UCINA 0 !!
  }

  getItemName(itemId: number) {
    for (const item of this.itemList) {
      if (item.id === itemId) {
        return item.name;
      }
    }
    return 'Item not found';
  }
}
