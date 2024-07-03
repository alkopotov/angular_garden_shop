import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Category {
  id: number;
  title: string;
  image: string;
  createdAT: string;
  updatedAT: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private _http: HttpClient) { }

  private _baseUrl: string = 'https://garden-shop-backend.onrender.com';

  public get baseUrl(): string {
    return this._baseUrl;
  }


  public getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${this._baseUrl}/categories/all`);
  }

}
