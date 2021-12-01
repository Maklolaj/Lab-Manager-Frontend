import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IItemModel } from '../models/IItemModel';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  getAllItems(): Observable<IItemModel[]> {
    //authenticationHeader
    const url: string = `${this.baseUrl}/items/`;

    return this.httpClient.get<IItemModel[]>(url);
  }
}
