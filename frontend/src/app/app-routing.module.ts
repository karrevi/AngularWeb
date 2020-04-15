import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicuentaComponent } from './container/micuenta/micuenta.component';
import { RegistrarseComponent } from './container/registrarse/registrarse.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmedComponent } from './container/user/confirmed/confirmed.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { SearchProductsComponent } from './search-products/search-products.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'micuenta', component: MicuentaComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'user/confirmed/:token', component: ConfirmedComponent },
  { path: 'administrator', component: AdministratorComponent},
  { path: 'products/search/:searchValue', component: SearchProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
