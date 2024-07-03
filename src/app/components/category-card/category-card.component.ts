import { Component, Input } from '@angular/core';
import { Category, DataSourceService } from '../../services/data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input() public category: Category;

  constructor(public dataSourceService: DataSourceService, private _router: Router) { }

  public onCardClick(): void {
    this._router.navigate(['/categories', this.category.id]);
  }
}
