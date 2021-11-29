import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private headers = { 'content-type': 'application/json' };

  getAllReservations(): Observable<IReservationModel[]> {
    //authenticationHeader
    const url: string = `${this.baseUrl}/reservations/`;

    return this.httpClient.get<IReservationModel[]>(url);
  }

  getReservationsFromDate(
    startDate: string,
    endDate: string,
    itemId: number
  ): Observable<IReservationFromDateModel[]> {
    const url: string = `${this.baseUrl}/reservations/from/date/`;

    let body = JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      itemId: itemId,
    });

    return this.httpClient.post<IReservationFromDateModel[]>(url, body, {
      headers: this.headers,
    });
  }

  getUserReservations(): Observable<any> {
    const url: string = `${this.baseUrl}/reservations/from/identity/`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('jwt')!)['token']
        }`,
      }),
    };

    return this.httpClient.get<IReservationModel[]>(url, httpOptions);
  }
}
