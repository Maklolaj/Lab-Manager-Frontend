import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/reducers/auth.reducers';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import '@angular/common/locales/global/pl';
import { AuthModule } from './components/auth/auth.module';
import { MainPanelModule } from './components/main-panel/main-panel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ isLoggedIn: loginReducer, isAdmin: loginReducer }),
    HttpClientModule,
    AuthModule,
    MainPanelModule,
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
