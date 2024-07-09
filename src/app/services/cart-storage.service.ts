import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DataSourceService, Product } from './data-source.service';
import { isPlatformBrowser } from '@angular/common';



export interface CartProduct {
  product: Product;
  counter: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _dataSourceService: DataSourceService,
  ) { }

  public productsInCart: Record<any, number> = {};

  public hasProductsWithId(id: number): boolean {
    if(isPlatformBrowser(this._platformId)) {
      return Object.keys(this.productsInCart).includes(id.toString());
    }
    return false;
  }

  public saveToCart(id: number, value: number): void {
    if(isPlatformBrowser(this._platformId)) {
      if (this.hasProductsWithId(id)) {
        if (this.productsInCart[`${id}`] + value <= 0) {
          delete this.productsInCart[`${id}`];
        } else {
          this.productsInCart[`${id}`] += value;
        }
      } else {
        this.productsInCart[`${id}`] = value;
      }
      localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
    }
  }

  public get productPositionsCount(): number {
    return Object.keys(this.productsInCart).length;
  }

  public get totalItenmsCount(): number {
    return Object.values(this.productsInCart).reduce((a: number, b: number) => a + b, 0);
  }

  public getProductsInCartStorage(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.productsInCart = JSON.parse(localStorage.getItem('productsInCart' as string) || '{}');
    }
  }

  public get productInCartList(): CartProduct[] {
    return Object.keys(this.productsInCart).map((id: string) => {
      return {
        product: this._dataSourceService.products.find((product: Product) => product.id === +id) as Product,
        counter: this.productsInCart[`${id}`]
      }
    });
  }
}
