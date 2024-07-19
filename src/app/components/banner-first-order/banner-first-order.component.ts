import { Component, OnInit } from '@angular/core';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-banner-first-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './banner-first-order.component.html',
  styleUrl: './banner-first-order.component.css'
})
export class BannerFirstOrderComponent implements OnInit {

  public dataForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private _dialogDispatcher: DialogDispatcherService,
    private _formBuilder: FormBuilder,  
  ) { }

  ngOnInit(): void {
    this.dataForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  public onSubmit(): void {
    if (this.dataForm.invalid) {
      console.log('Form is invalid');
    } else {
    console.log(this.dataForm.value);
    this._dialogDispatcher.openDialog('discount');
    }
  }
}
