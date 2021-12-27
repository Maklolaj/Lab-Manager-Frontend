import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationsComponent } from './components/main-panel/reservations/reservations.component';
import { ReservationStepperComponent } from './components/main-panel/reservation-stepper/reservation-stepper.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/reducers/auth.reducers';
import { TimeGridComponent } from './components/main-panel/reservation-stepper/time-grid/time-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationSummaryComponent } from './components/main-panel/reservation-stepper/reservation-summary/reservation-summary.component';
import { FaultDialog } from './components/main-panel/reservations/reservations.component';
import { DeleteResourceDialog } from './components/main-panel/resources/resources.component';
import { ModifyResourceDialog } from './components/main-panel/resources/resources.component';
import { DatePipe } from '@angular/common';
import '@angular/common/locales/global/pl';
import { ResourceCreatorComponent } from './components/main-panel/resource-creator/resource-creator.component';
import { ResourcesComponent } from './components/main-panel/resources/resources.component';
import { AnnouncementsComponent } from './components/main-panel/announcements/announcements.component';
import { UserProfileComponent } from './components/main-panel/user-profile/user-profile.component';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    ReservationsComponent,
    ReservationStepperComponent,
    TimeGridComponent,
    ReservationSummaryComponent,
    FaultDialog,
    ResourceCreatorComponent,
    ResourcesComponent,
    DeleteResourceDialog,
    ModifyResourceDialog,
    AnnouncementsComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ isLoggedIn: loginReducer, isAdmin: loginReducer }),
    HttpClientModule,
    AuthModule,
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
