import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IReservationFromDateModel } from '../models/ReservationModels/IReservationFromDateModel';
import { IReservationModel } from '../models/ReservationModels/IReservationModel';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  getAllReservations(): Observable<IReservationModel[]> {
    //authenticationHeader
    const url: string = `${this.baseUrl}/reservations/`;

    return this.httpClient.get<IReservationModel[]>(url);
  }

  getReservationsFromDate(
    startDate: string,
    endDate: string
  ): Observable<IReservationFromDateModel[]> {
    const url: string = `${this.baseUrl}/reservations/from/date/`;
    const headers = { 'content-type': 'application/json' };

    let body = JSON.stringify({ startDate: startDate, endDate: endDate });

    return this.httpClient.post<IReservationFromDateModel[]>(url, body, {
      headers: headers,
    });
  }
}
