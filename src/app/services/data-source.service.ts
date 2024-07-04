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

export interface Product {
  id: number;
  title: string;
  price: number;
  discont_price: number | null;
  description: string;
  image: string;
  createdAT: string;
  updatedAT: string;
  categoryId: number;
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

  public products: Product[] = [];
  
  public get discountedProducts(): Product[] {
    let result =  this.products.filter((product: Product) => product.discont_price);
    return result.sort((a: Product, b: Product) =>  {
      let aDiscount = 1 - (a.discont_price as number )/ a.price;
      let bDiscount = 1 - (b.discont_price as number )/ b.price;
      return bDiscount - aDiscount;
    });
   }

  public getProducts(): void {
    this._http.get<Product[]>(`${this._baseUrl}/products/all`).subscribe((products: Product[]) => {
      this.products = products;
    })
  }

  public getProductById(id: number): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._baseUrl}/products/${id}`);
  }

}
