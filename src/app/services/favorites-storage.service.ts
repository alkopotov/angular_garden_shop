import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DataSourceService, Product } from './data-source.service';


@Injectable({
  providedIn: 'root'
})
export class FavoritesStorageService {

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _dataSourceService: DataSourceService) { }


  private _saveToFavorites(id: number): void {
    if (isPlatformBrowser(this._platformId)) {
      let products = JSON.parse(localStorage.getItem('favorites') as string) || [];
      if (!products.includes(id)) {
        products.push(id);
        localStorage.setItem('favorites', JSON.stringify(products));
      }
    }
  }

  private _deleteFromFavorites(id: number): void {
    if (isPlatformBrowser(this._platformId)) {
      let products = JSON.parse(localStorage.getItem('favorites') as string) || [];
      products = products.filter((product: number) => product !== id);
      localStorage.setItem('favorites', JSON.stringify(products));
    }
  }

  // Меняет состояние в избранном по переданному id
  public handleFavorites(id: number): void {
    if (isPlatformBrowser(this._platformId)) {
      if (this.includedInFavorites(id)) {
        this._deleteFromFavorites(id);
      } else {
        this._saveToFavorites(id);
      }
    }
  }

  // Возвращает массив id продуктов из избранного
  public get productsInFavorites(): number[] {
    if (isPlatformBrowser(this._platformId)) {
      let products = JSON.parse(localStorage.getItem('favorites') as string) || [];
      return products;
    }
    return [];
  }

  //Фильтрует переданный массив продуктов по наличию в избранном
  public filterProductsByFavorites(products: Product[]): Product[] {
    return products.filter((product: Product) => this.includedInFavorites(product.id));
  }

  // Проверяет наличие продукта в избранном по переданному id
  public includedInFavorites(id: number): boolean {
    if (isPlatformBrowser(this._platformId)) {
      let products = JSON.parse(localStorage.getItem('favorites') as string) || [];
      return products.includes(id);
    }
    return false;
  }

  public get favoritesProductList(): Product[] {
    return this._dataSourceService.products.filter((product: Product) => this.includedInFavorites(product.id));
  }
}