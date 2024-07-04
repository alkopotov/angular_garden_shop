import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderElemComponent } from './components/header-elem/header-elem.component';
import { isPlatformBrowser } from '@angular/common';
import { CartStorageService } from './services/cart-storage.service';
import { FooterElemComponent } from './components/footer-elem/footer-elem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderElemComponent, FooterElemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'garden_shop';

  constructor(@Inject(PLATFORM_ID) private _platformId: Object, private _cartStorageService: CartStorageService) { }

  public onActivate(event: any): void {
    if (isPlatformBrowser(this._platformId)) {
      window.scroll(0, 0);
    }
  }

  public ngOnInit(): void {
    this._cartStorageService.getProductsInCartStorage();
  } 
}