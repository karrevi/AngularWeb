import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './container/container.component';
import { RegistrarseComponent } from './container/registrarse/registrarse.component';
import { MicuentaComponent } from './container/micuenta/micuenta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './container/user/user.component';
import { ConfirmedComponent } from './container/user/confirmed/confirmed.component';
import { SearchProductsComponent } from './container/search-products/search-products.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { OrdersAdminComponent } from './components/orders-admin/orders-admin.component';
import { CategoriesAdminComponent } from './components/categories-admin/categories-admin.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    RegistrarseComponent,
    MicuentaComponent,
    HomeComponent,
    UserComponent,
    ConfirmedComponent,
    SearchProductsComponent,
    AdministratorComponent,
    ProductsCategoryComponent,
    UserAdminComponent,
    OrdersAdminComponent,
    CategoriesAdminComponent,
    ProductAdminComponent,
    CreateUserComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
