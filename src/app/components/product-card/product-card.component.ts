import { Component, Input } from '@angular/core';
import { DataSourceService, Product } from '../../services/data-source.service';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() public product: Product;

  constructor(public dataSourceService: DataSourceService, private _router: Router) { }

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
    console.log('add to cart', this.product);
  }

  public handleClickOnCard(): void {
    this._router.navigate(['/products', this.product.id]);
  }

}
