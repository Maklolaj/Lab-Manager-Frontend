import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IItemModel } from '../models/IItemModel';
import { IResource } from '../models/IResourceModel';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('jwt')!)['token']
      }`,
    }),
  };

  getAllItems(): Observable<IItemModel[]> {
    const url: string = `${environment.baseUrl}/items/`;
    return this.httpClient.get<IItemModel[]>(url, this.httpOptions);
  }

  createItem(item: IResource): Observable<any> {
    const url: string = `${environment.baseUrl}/item/`;
    const body = {
      name: item.name,
      manufacturer: item.manufacturer,
      productionDate: item.productionDate,
      description: item.description,
    };
    debugger;
    return this.httpClient.post<any>(url, body, this.httpOptions);
  }

  modifyItem(item: IItemModel): Observable<any> {
    const url: string = `${environment.baseUrl}/items/${item.id}`;
    const body = {
      name: item.name,
      manufacturer: item.manufacturer,
      productionDate: item.productionDate,
      description: item.description,
    };
    return this.httpClient.put(url, body, this.httpOptions);
  }

  deleteItem(item: IItemModel): Observable<any> {
    const url: string = `${environment.baseUrl}/items/${item.id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
