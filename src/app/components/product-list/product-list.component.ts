import { Component, Input } from '@angular/core';
import { Product } from '../../services/data-source.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, MatProgressSpinnerModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() public onMainPage: boolean;
  @Input() public title: string;
  @Input() public products: Product[];

  constructor(private _router: Router) { }

  public handleClickAllSales(): void {
    this._router.navigate(['/sales']);
  }
}
