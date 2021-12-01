import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationsComponent } from './components/main-panel/reservations/reservations.component';
import { ReservationStepperComponent } from './components/main-panel/reservation-stepper/reservation-stepper.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/simpleReducer';
import { TimeGridComponent } from './components/main-panel/reservation-stepper/time-grid/time-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationSummaryComponent } from './components/main-panel/reservation-stepper/reservation-summary/reservation-summary.component';
import { FaultDialog } from './components/main-panel/reservations/reservations.component';
import { DatePipe } from '@angular/common';
import '@angular/common/locales/global/pl';
import { ResourceCreatorComponent } from './components/main-panel/resource-creator/resource-creator.component';
import { ResourcesComponent } from './components/main-panel/resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    LoginComponent,
    ReservationsComponent,
    ReservationStepperComponent,
    TimeGridComponent,
    ReservationSummaryComponent,
    FaultDialog,
    ResourceCreatorComponent,
    ResourcesComponent,
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
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
