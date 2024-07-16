import { Component } from '@angular/core';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';


@Component({
  selector: 'app-banner-first-order',
  standalone: true,
  imports: [],
  templateUrl: './banner-first-order.component.html',
  styleUrl: './banner-first-order.component.css'
})
export class BannerFirstOrderComponent {

  constructor(private _dialogDispatcher: DialogDispatcherService) { }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    this._dialogDispatcher.openDialog('discount');
  }
 
}
