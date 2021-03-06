import { Component, Input, OnInit } from '@angular/core';
import { IItemModel } from 'src/app/models/IItemModel';
import { IReservationModel } from 'src/app/models/ReservationModels/IReservationModel';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss'],
})
export class ReservationSummaryComponent implements OnInit {
  constructor(private reservationService: ReservationService) {}

  @Input()
  userReservation: IReservationModel;

  @Input()
  itemList: IItemModel[] = [];

  @Input()
  parent: any;

  ngOnInit(): void {
    console.log(this.parent);
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

  confirmReservation(item: IItemModel, startDate: Date, endDate: Date) {
    if (item) {
      this.reservationService
        .createReservation(item.id, startDate, endDate)
        .subscribe(
          (x) => {
            console.log(x);
            this.parent.stepper.reset();
            alert(`Rezerwacja na zasób ${item.name} została stworzona`);
          },
          (error) => {
            console.log(error);
            this.parent.stepper.reset();
            alert(`Operacja nieudana`);
          }
        );
    } else {
      alert(`Operacja nieudana`);
    }
  }
}
