import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { IItemModel } from 'src/app/models/IItemModel';
import { IReservationModel } from 'src/app/models/ReservationModels/IReservationModel';
import { FaultService } from 'src/app/services/fault.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {
  constructor(
    private reservationService: ReservationService,
    private faultService: FaultService,
    public datepipe: DatePipe,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  userReservations: IReservationModel[];

  ngOnInit(): void {
    this.reservationService.getUserReservations().subscribe((res) => {
      this.userReservations = res;
    });
  }

  openDialog(item: IItemModel): void {
    const dialogRef = this.dialog.open(FaultDialog, {
      width: '650px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.faultService.createFault(item.id, result).subscribe(
          (result) => {
            console.log(result);
            alert('Zgłoszono usterke');
          },
          (error) => {
            console.log(error);
            alert(`Operacja nieudana`);
          }
        );
      } else {
        alert(`Operacja nieudana`);
      }
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
