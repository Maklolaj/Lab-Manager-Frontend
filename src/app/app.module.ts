import { NgModule } from '@angular/core';
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
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ isLoggedIn: loginReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
