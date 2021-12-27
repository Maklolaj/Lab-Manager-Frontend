import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MainPanelComponent } from './main-panel.component';
import { AdminPanelModule } from '../admin-panel/admin-panel.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {
  FaultDialog,
  ReservationsComponent,
} from './reservations/reservations.component';
import { ReservationStepperComponent } from './reservation-stepper/reservation-stepper.component';
import { TimeGridComponent } from './reservation-stepper/time-grid/time-grid.component';
import { ReservationSummaryComponent } from './reservation-stepper/reservation-summary/reservation-summary.component';

@NgModule({
  declarations: [
    AnnouncementsComponent,
    MainPanelComponent,
    UserProfileComponent,
    FaultDialog,
    ReservationsComponent,
    ReservationStepperComponent,
    TimeGridComponent,
    ReservationSummaryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminPanelModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MainPanelModule {}
