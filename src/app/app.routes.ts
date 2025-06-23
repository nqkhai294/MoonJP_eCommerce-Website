import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Products } from './pages/products/products';
import { Collections } from './pages/collections/collections';
import { Inspiration } from './pages/inspiration/inspiration';
import { AboutUs } from './pages/about-us/aboutus';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetail },
  { path: 'collections', component: Collections },
  { path: 'inspiration', component: Inspiration },
  { path: 'about-us', component: AboutUs },
];
