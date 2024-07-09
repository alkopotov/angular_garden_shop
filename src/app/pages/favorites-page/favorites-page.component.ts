import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { FilterElemComponent } from '../../components/filter-elem/filter-elem.component';
import { DataSourceService } from '../../services/data-source.service';
import { FavoritesStorageService } from '../../services/favorites-storage.service';
import { LoggerViewedService } from '../../services/logger-viewed.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [ProductListComponent, FilterElemComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit{

  constructor(
    private _dataSourceService: DataSourceService,
    public favoritesStorageService: FavoritesStorageService,
    public loggerViewedService: LoggerViewedService,
    private _router: Router,
  ) { }

  
  public handleContinueShopping(): void {
    this._router.navigate(['/products/all']);
  }

  ngOnInit(): void {
    this._dataSourceService.getProducts();
  }
}
