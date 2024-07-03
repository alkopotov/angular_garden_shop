import { Component } from '@angular/core';
import { LogoIconComponent } from '../svg/logo-icon/logo-icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BasketElemComponent } from '../basket-elem/basket-elem.component';


@Component({
  selector: 'app-header-elem',
  standalone: true,
  imports: [LogoIconComponent, RouterLink, RouterLinkActive, BasketElemComponent],
  templateUrl: './header-elem.component.html',
  styleUrl: './header-elem.component.css'
})
export class HeaderElemComponent {

  
  public navLinks: any[] = [
    {
      name: 'Categories',
      link: '/categories'
    },
    {
      name: 'All Products',
      link: '/products'
    },
    {
      name: 'All Sales',
      link: '/sales'
    },
    {
      name: 'Favorites',
      link: '/favorites'
    }
  ];

}
