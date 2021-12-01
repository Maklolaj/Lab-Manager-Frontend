import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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
    public datepipe: DatePipe,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  userReservations: IReservationModel[];

  ngOnInit(): void {
    this.reservationService.getUserReservations().subscribe((res) => {
      this.userReservations = res;
      console.log(this.userReservations);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FaultDialog, {
      width: '650px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`The dialog was closed with value: ${result}`);
    });
  }
}

@Component({
  selector: 'app-fault-dialog',
  templateUrl: './fault-dialog.html',
})
export class FaultDialog {
  constructor(
    public dialogRef: MatDialogRef<FaultDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  faultText: string;

  onNoClick(): void {
    this.dialogRef.close();
  }
}
