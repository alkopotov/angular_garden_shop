import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-discount-success',
  standalone: true,
  imports: [],
  templateUrl: './dialog-discount-success.component.html',
  styleUrl: './dialog-discount-success.component.css'
})
export class DialogDiscountSuccessComponent {

  constructor(
    private _dialogRef: DialogRef
  ) { }


  public closeDialog(): void {
    this._dialogRef.close();
  }
}
