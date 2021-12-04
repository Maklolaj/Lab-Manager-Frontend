import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IFaultModel } from '../models/IFaultModel';

@Injectable({
  providedIn: 'root',
})
export class FaultService {
  constructor(private httpClient: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('jwt')!)['token']
      }`,
    }),
  };

  getAllFaults(): Observable<IFaultModel[]> {
    const url: string = `${environment.baseUrl}/faults/`;
    return this.httpClient.get<IFaultModel[]>(url, this.httpOptions);
  }

  createFault(itemId: number, faultDescription: string): Observable<any> {
    const url: string = `${environment.baseUrl}/fault/`;
    const body = {
      itemId: itemId,
      description: faultDescription,
    };
    return this.httpClient.post(url, body, this.httpOptions);
  }

  deleteFault(fault: IFaultModel): Observable<any> {
    const url: string = `${environment.baseUrl}/faults/${fault.id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
