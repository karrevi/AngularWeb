import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicuentaComponent } from './container/micuenta/micuenta.component';
import { RegistrarseComponent } from './container/registrarse/registrarse.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmedComponent } from './container/user/confirmed/confirmed.component';


const routes: Routes = [
  {path: 'micuenta', component: MicuentaComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: '', component: HomeComponent},
  {path: 'user/confirmado/:token', component: ConfirmedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
