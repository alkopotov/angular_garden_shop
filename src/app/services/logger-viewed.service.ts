import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DataSourceService, Product } from './data-source.service';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LoggerViewedService {

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _dataSourceService: DataSourceService
  ) { }

  public handleViewed(id: number): void {
    if (isPlatformBrowser(this._platformId)) {
      let products = JSON.parse(sessionStorage.getItem('viewed') as string) || [];
      if (!products.includes(id)) {
        products.push(id);
        sessionStorage.setItem('viewed', JSON.stringify(products));
      }
    }
  }

  public isViewed(id: number): boolean {
    if (isPlatformBrowser(this._platformId)) {
      let products = JSON.parse(sessionStorage.getItem('viewed') as string) || [];
      return products.includes(id);
    }
    return false;
  }

  public get productsInViewed(): number {
    if (isPlatformBrowser(this._platformId)) {
      let products = JSON.parse(sessionStorage.getItem('viewed') as string) || [];
      return products.length;
    }
    return 0;
  }


  public get viewedProductList(): Product[] {
    return this._dataSourceService.products.filter((product: Product) => this.isViewed(product.id));
  }
}
