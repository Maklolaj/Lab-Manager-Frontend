import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  getAllItems(): Observable<any> {
    //authenticationHeader
    const url: string = `${this.baseUrl}/items/`;

    return this.httpClient.get<any>(url);
  }
}
