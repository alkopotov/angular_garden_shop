import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../services/data-source.service';
import { CartStorageService } from '../../services/cart-storage.service';
import { Router } from '@angular/router';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { CurrencyPipe } from '@angular/common';
import { LoggerViewedService } from '../../services/logger-viewed.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe, ProductListComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  constructor(
    private _dataSourceService: DataSourceService,
    public cartStorageService: CartStorageService,
    private _router: Router,
    public loggerViewedService: LoggerViewedService
  ) { }

  ngOnInit(): void {
    this._dataSourceService.getProducts();
  }

  public handleBackToStore(): void {
    this._router.navigate(['/products/all']);
  }

}
