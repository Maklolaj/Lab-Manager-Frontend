import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IReservationModel } from '../models/IReservationModel';

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
}
