import { Component } from '@angular/core';
import { BannerDiscountComponent } from '../../components/banner-discount/banner-discount.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { BannerFirstOrderComponent } from '../../components/banner-first-order/banner-first-order.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BannerDiscountComponent, CategoryListComponent, BannerFirstOrderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
