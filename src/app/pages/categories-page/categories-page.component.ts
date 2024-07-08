import { Component } from '@angular/core';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CategoryListComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent {
  constructor(private _routes: ActivatedRoute, public filterService: FilterService) { }
}
