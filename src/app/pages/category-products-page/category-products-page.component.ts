import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FilterElemComponent } from '../../components/filter-elem/filter-elem.component';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryData, DataSourceService } from '../../services/data-source.service';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-category-products-page',
  standalone: true,
  imports: [FilterElemComponent, AsyncPipe, ProductListComponent, MatProgressSpinnerModule],
  templateUrl: './category-products-page.component.html',
  styleUrl: './category-products-page.component.css'
})
export class CategoryProductsPageComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    public filterService: FilterService,
    private _routes: ActivatedRoute,
    private _router: Router,
    private _dataSourceService: DataSourceService
  ) { }

 public $categoryData: Observable<CategoryData>;
 private _subscription: Subscription;

  ngOnInit(): void {
    this.$categoryData = this._dataSourceService.getProductsByCategory(this._routes.snapshot.params['id']);
  }

  ngAfterViewInit(): void {
    this._subscription = this.$categoryData.subscribe((data: any) => {
      if (data.status === "ERR") {
        this._router.navigate(['/not-found']);
        return
      } else {
        this.filterService.products = data.data;
      }
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
