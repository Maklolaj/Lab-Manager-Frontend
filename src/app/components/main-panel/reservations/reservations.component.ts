import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { IReservationModel } from 'src/app/models/ReservationModels/IReservationModel';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {
  constructor(
    private reservationService: ReservationService,
    public datepipe: DatePipe
  ) {}

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  userReservations: IReservationModel[] | null = null;

  ngOnInit(): void {
    this.reservationService.getUserReservations().subscribe((res) => {
      this.userReservations = res;
      console.log(this.userReservations);
    });
  }
}
