import { Component, Input } from '@angular/core';
import { CartProduct, CartStorageService } from '../../services/cart-storage.service';
import { CurrencyPipe } from '@angular/common';
import { DataSourceService } from '../../services/data-source.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input() public cartProduct: CartProduct;
  constructor(
    public dataSourceService: DataSourceService,
    private _cartStorageService: CartStorageService
  ) { }



  public handleIncreaseCounter(): void {
    this._cartStorageService.saveToCart(this.cartProduct.product.id, 1);
  }

  public handleDecreaseCounter(): void {
    this._cartStorageService.saveToCart(this.cartProduct.product.id, -1);
  }

  public handleRemoveFromCart(): void {
    this._cartStorageService.deleteItemFromCart(this.cartProduct.product.id);
  }
}
