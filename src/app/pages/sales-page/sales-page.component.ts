import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { DataSourceService, Product } from '../../services/data-source.service';
import { Observable, Subscription } from 'rxjs';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { FilterElemComponent } from '../../components/filter-elem/filter-elem.component';
import { AsyncPipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-sales-page',
  standalone: true,
  imports: [ProductListComponent, FilterElemComponent, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './sales-page.component.html',
  styleUrl: './sales-page.component.css'
})
export class SalesPageComponent implements OnInit, AfterViewInit, OnDestroy{

  constructor(
    public filterService: FilterService,
    public dataSourceService: DataSourceService,
  ) { }


  public $products: Observable<Product[]>;

  private _subscription: Subscription;

  ngOnInit(): void {
  this.$products = this.dataSourceService.getAllProducts();
  }

  ngAfterViewInit(): void {
    this._subscription = this.$products.subscribe((data: any) => {
      this.filterService.products = data;
      this.filterService.withDiscount = true;
    });
  }


  ngOnDestroy(): void {
    this.filterService.withDiscount = false;
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
