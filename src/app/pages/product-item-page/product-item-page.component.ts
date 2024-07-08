import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataSourceService, Product } from '../../services/data-source.service';
import { CartStorageService } from '../../services/cart-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [AsyncPipe, MatProgressSpinnerModule, CurrencyPipe, PercentPipe],
  templateUrl: './product-item-page.component.html',
  styleUrl: './product-item-page.component.css'
})
export class ProductItemPageComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private _cartStorageService: CartStorageService,
    public dataSourceService: DataSourceService,
    private _routes: ActivatedRoute,
    private _router: Router

  ) { }

  public counter: number = 1;


  public counterIncrement(): void {
    if (this.counter < 10) {
      this.counter++;
    }
  }

  public counterDecrement(): void {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  public handleAddToCart(id: number): void {
    this._cartStorageService.saveToCart(id, this.counter);
    this.counter = 1;
  }

  public product$: Observable<Product[]>;

  private _subscription: Subscription;
  ngOnInit(): void {
    this.product$ = this.dataSourceService.getProductById(this._routes.snapshot.params['id']);
  }

  ngAfterViewInit(): void {
    this._subscription = this.product$.subscribe((data: any) => {
      if (data.message === "product not found") {
        this._router.navigate(['/not-found']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
   }
}
