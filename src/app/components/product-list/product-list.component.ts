import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Product } from '../../services/data-source.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { isPlatformBrowser } from '@angular/common';
import { FilterService } from '../../services/filter.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, MatProgressSpinnerModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  @Input() public onMainPage: boolean;
  @Input() public title: string;
  @Input() public products: Product[];

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _router: Router,
    private _filterService: FilterService
  ) { }

  public maxCardsOnpage: number = 8;

  public currentPage: number = 1;

  public get numberOfPages(): number {
    return Math.ceil(this.products.length / this.maxCardsOnpage);
  }

  public get paginationButtons(): number[] {
    return Array(this.numberOfPages).fill(0).map((_, i) => i + 1);
  }

  public get productsOnPage(): Product[] {  
    if (this.numberOfPages === 1) this.currentPage = 1;
    if (this.currentPage > this.numberOfPages) this.currentPage = this.numberOfPages;
    return this.products.slice(
      (this.currentPage - 1) * this.maxCardsOnpage,
      this.currentPage * this.maxCardsOnpage
    );
  }

  public paginationIncr(): void {
    this.currentPage++;
    if(isPlatformBrowser(this._platformId)) {
      window.scroll(0, 0);
    }
  }

  public paginationDecr(): void {
    this.currentPage--;
    if(isPlatformBrowser(this._platformId)) {
      window.scroll(0, 0);
    }
  }

  public setPage(page: number): void {
    this.currentPage = page;
    if(isPlatformBrowser(this._platformId)) {
      window.scroll(0, 0);
    }
  }

  public handleClickAllSales(): void {
    this._router.navigate(['/sales']);
  }

  ngOnInit(): void {
    this._filterService.resetFilters();
  }
}
