import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailsComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { PinkComponent } from './components/pink/pink.component';
import { YellowComponent } from './components/yellow/yellow.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'yellow', component: YellowComponent },
  { path: 'pink', component: PinkComponent },
  { path: '**', redirectTo: '' },
];
