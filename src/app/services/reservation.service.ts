import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IItemModel } from '../models/IItemModel';
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
    const body = {
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

  createReservation(itemId: number, startDate: Date, endDate: Date) {
    const body = {
      itemId: itemId,
      startDate: startDate,
      endDate: endDate,
    };
    const url: string = `${environment.baseUrl}/reservation/`;
    return this.httpClient.post<any>(url, body, this.httpOptions);
  }
}

export function normalize(date: Date) {
  var str = date.toISOString().substring(0, 16);
  str = str.replace(/T/gi, ' ');
  return str;
}
