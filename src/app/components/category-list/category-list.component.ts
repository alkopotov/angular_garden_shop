import { Component, Input, OnInit } from '@angular/core';
import { Category, DataSourceService } from '../../services/data-source.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoryCardComponent } from '../category-card/category-card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink, CategoryCardComponent, MatProgressSpinnerModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  @Input() public onMain: boolean;

  constructor(private _dataSourceService: DataSourceService) {
  }

  public categories$: Observable<Category[]>

  ngOnInit(): void {
    this.categories$ = this._dataSourceService.getCategories();
  }
}
