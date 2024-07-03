import { Routes } from '@angular/router';
import path from 'path';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'categories',
    component: CategoriesPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'products/:id',
    component: ProductsPageComponent
  },
  {
    path: 'sales',
    component: SalesPageComponent
  },
  {
    path: 'categories/:id',
    component: CategoriesPageComponent
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent
  }
];
