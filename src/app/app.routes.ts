import { Routes } from '@angular/router';
import path from 'path';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductItemPageComponent } from './pages/product-item-page/product-item-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CategoryProductsPageComponent } from './pages/category-products-page/category-products-page.component';

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
    path: 'products/all',
    component: ProductListPageComponent
  },
  {
    path: 'products/:id',
    component: ProductItemPageComponent
  },
  {
    path: 'sales',
    component: SalesPageComponent
  },
  {
    path: 'categories/:id',
    component: CategoryProductsPageComponent
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
