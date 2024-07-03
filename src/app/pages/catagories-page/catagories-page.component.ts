import { Component, Input } from '@angular/core';
import { CategoryListComponent } from '../../components/category-list/category-list.component';

@Component({
  selector: 'app-catagories-page',
  standalone: true,
  imports: [CategoryListComponent],
  templateUrl: './catagories-page.component.html',
  styleUrl: './catagories-page.component.css'
})
export class CatagoriesPageComponent {

  @Input() public onMainPage: boolean;

}
