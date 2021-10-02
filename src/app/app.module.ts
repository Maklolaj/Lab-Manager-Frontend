import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ReservationsComponent } from './components/main-panel/reservations/reservations.component';
import { ReservationStepperComponent } from './components/main-panel/reservation-stepper/reservation-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    LoginComponent,
    ReservationsComponent,
    ReservationStepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
