import { Component, Input } from '@angular/core';
import { FilterService, SortingOrder } from '../../services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-elem',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-elem.component.html',
  styleUrl: './filter-elem.component.css'
})
export class FilterElemComponent {

  @Input() public withDiscountCheckbox: boolean;

  constructor(public filterService: FilterService) { }



  public sortingOptions: SortingOrder[] = ['default', 'name: a-z', 'name: z-a', 'price: high-low', 'price: low-high'];

}
