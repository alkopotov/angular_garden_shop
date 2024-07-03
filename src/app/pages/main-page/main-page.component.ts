import { Component, OnInit } from '@angular/core';
import { BannerDiscountComponent } from '../../components/banner-discount/banner-discount.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { BannerFirstOrderComponent } from '../../components/banner-first-order/banner-first-order.component';
import { DataSourceService } from '../../services/data-source.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BannerDiscountComponent, CategoryListComponent, BannerFirstOrderComponent, ProductListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {

  constructor(public dataSourceService: DataSourceService) { }


  ngOnInit(): void {
    this.dataSourceService.getProducts();
  }
}
