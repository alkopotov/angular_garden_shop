import { Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DialogDiscountSuccessComponent } from '../components/dialog-discount-success/dialog-discount-success.component';

export type DialogType = 'discount' | 'orderPlaced' ;

@Injectable({
  providedIn: 'root'
})
export class DialogDispatcherService {

  constructor(public dialog: Dialog) { }

  public dialogWindows: Record<DialogType, any> = {
    discount: DialogDiscountSuccessComponent,
    orderPlaced: null,
  }
  
  public openDialog(dialogType: DialogType): void {
    if (this.dialogWindows[dialogType]) {
      this.dialog.open(this.dialogWindows[dialogType], {
        disableClose: true
      }); 
    }
  }
}
