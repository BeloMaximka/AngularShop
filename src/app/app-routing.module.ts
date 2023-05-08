import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: 'shopping-cart', component: ShoppingCartPageComponent },
  { path: 'products', component: MainPageComponent },
  { path: 'admin', component: AdminPageComponent},
  { path: 'product/:id', component: ProductPageComponent },
  { path: '**', redirectTo: 'products', pathMatch:'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
