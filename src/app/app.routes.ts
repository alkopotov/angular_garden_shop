import { Routes } from '@angular/router';
import path from 'path';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatagoriesPageComponent } from './pages/catagories-page/catagories-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'categories',
    component: CatagoriesPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'sales',
    component: SalesPageComponent
  },
  {
    path: 'categories/:id',
    component: CatagoriesPageComponent
  }
];
