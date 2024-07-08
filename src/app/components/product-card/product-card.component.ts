import { Component, Input } from '@angular/core';
import { DataSourceService, Product } from '../../services/data-source.service';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CartStorageService } from '../../services/cart-storage.service';
import { FavoritesStorageService } from '../../services/favorites-storage.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() public product: Product;

  constructor(
    public dataSourceService: DataSourceService,
    private _router: Router,
    private _cartStorageService: CartStorageService,
    private _favoritesStorageService: FavoritesStorageService
  ) { }

  public buttonVisible: boolean = false;

  public get discount(): number {
    return  this.product.discont_price ? (1 - (this.product.discont_price as number ) / this.product.price) : 0;
  }

  public get initialPrice(): number {
    return this.product.price;
  }

  public get finalPrice(): number {
    return this.product.discont_price || this.product.price;
  }

  public showButton(): void {
    this.buttonVisible = true;
  }

  public hideButton(): void {
    this.buttonVisible = false;
  }

  public handleAddToCart(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this._cartStorageService.saveToCart(this.product.id, 1);
  }

  public handleClickOnCard(): void {
    this._router.navigate(['/products', this.product.id]);
  }

  public handleClickOnFavorite(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this._favoritesStorageService.handleFavorites(this.product.id);
  }

  public get includedInFavorites(): boolean {
    return this._favoritesStorageService.includedInFavorites(this.product.id);
  }
}
