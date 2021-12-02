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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('jwt')!)['token']
      }`,
    }),
  };

  getAllReservations(): Observable<IReservationModel[]> {
    const url: string = `${environment.baseUrl}/reservations/`;
    return this.httpClient.get<IReservationModel[]>(url, this.httpOptions);
  }

  getReservationsFromDate(
    startDate: string,
    endDate: string,
    itemId: number
  ): Observable<IReservationFromDateModel[]> {
    const url: string = `${environment.baseUrl}/reservations/from/date/`;
    let body = {
      startDate: startDate,
      endDate: endDate,
      itemId: itemId,
    };

    return this.httpClient.post<IReservationFromDateModel[]>(
      url,
      body,
      this.httpOptions
    );
  }

  getUserReservations(): Observable<IReservationModel[]> {
    const url: string = `${environment.baseUrl}/reservations/from/identity/`;
    return this.httpClient.get<IReservationModel[]>(url, this.httpOptions);
  }
}
