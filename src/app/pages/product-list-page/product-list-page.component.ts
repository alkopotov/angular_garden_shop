import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { FilterElemComponent } from '../../components/filter-elem/filter-elem.component';
import { AsyncPipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Observable, Subscription } from 'rxjs';
import { DataSourceService, Product } from '../../services/data-source.service';
import { FilterService } from '../../services/filter.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [ProductListComponent, FilterElemComponent, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.css'
})
export class ProductListPageComponent implements OnInit, AfterViewInit, OnDestroy{

  constructor(
    public dataSourceService: DataSourceService,
    public filterService: FilterService,
  ) {}
  public $products: Observable<Product[]>;

  private _subscription: Subscription;

  ngOnInit(): void {
    this.$products = this.dataSourceService.getAllProducts();
  }

  ngAfterViewInit(): void {
    this._subscription = this.$products.subscribe((data: any) => {
      this.filterService.products = data;
    });
  }


  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


}
