import { Injectable } from '@angular/core';
import { Product } from './data-source.service';


export type SortingOrder = 'default' | 'name: a-z' | 'name: z-a' | 'price: high-low' | 'price: low-high';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  private _products: Product[] = [];
  public minPrice: number;
  public maxPrice: number;

  set products(products: Product[]) {
    this._products = products;
    this.minPrice = Math.floor(Math.min(...products.map(product => product.discont_price || product.price)));
    this.maxPrice = Math.ceil(Math.max(...products.map(product => product.discont_price || product.price)));
  }


  public sortingOrder: SortingOrder = 'default';

  public withDiscount: boolean = false;

  public get filteredProducts(): Product[] {

    let result = [...this._products].filter((product: Product) => {
      let finalPrice = product.discont_price || product.price;
      return (finalPrice >= this.minPrice && finalPrice <= this.maxPrice && (!this.withDiscount || product.discont_price));
    });

    switch (this.sortingOrder) {
      case 'name: a-z':
        result = result.sort((a: Product, b: Product) => a.title.localeCompare(b.title));
        break;
      case 'name: z-a':
        result = result.sort((a: Product, b: Product) => b.title.localeCompare(a.title));
        break;
      case 'price: high-low':
        result = result.sort((a: Product, b: Product) => (b.discont_price || b.price) - (a.discont_price || a.price));
        break;
      case 'price: low-high':
        result = result.sort((a: Product, b: Product) => (a.discont_price|| a.price) - (b.discont_price || b.price));
        break;
      default:
        break;
    }
    return result;
  }

}
