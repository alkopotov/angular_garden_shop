import { Component } from '@angular/core';
import { CartStorageService } from '../../services/cart-storage.service';

@Component({
  selector: 'app-basket-elem',
  standalone: true,
  imports: [],
  templateUrl: './basket-elem.component.html',
  styleUrl: './basket-elem.component.css'
})
export class BasketElemComponent {

  constructor(public cartStorageService: CartStorageService) { }

}
