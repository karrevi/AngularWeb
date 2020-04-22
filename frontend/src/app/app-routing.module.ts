import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicuentaComponent } from './container/micuenta/micuenta.component';
import { RegistrarseComponent } from './container/registrarse/registrarse.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmedComponent } from './container/user/confirmed/confirmed.component';
import { SearchProductsComponent } from './container/search-products/search-products.component';
// import { AdministratorComponent } from './components/administrator/administrator.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { OrdersAdminComponent } from './components/orders-admin/orders-admin.component';


const routes: Routes = [
  { path: 'micuenta', component: MicuentaComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', component: HomeComponent },
  { path: 'user/confirmed/:token', component: ConfirmedComponent },
  { path: 'products/search/:searchValue', component: SearchProductsComponent },
  // { path: 'administrator', component: AdministratorComponent },
  { path: 'products/searchCategory/:id', component: ProductsCategoryComponent },
  { path: 'user/admin', component: UserAdminComponent },
  { path: 'orders/admin' , component: OrdersAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
