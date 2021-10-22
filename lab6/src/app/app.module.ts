import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { CheckcountPipe } from './checkcount.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListApiComponent } from './product-list-api/product-list-api.component';
import { ProductDetailsApiComponent } from './product-details-api/product-details-api.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemsComponent,
    CheckcountPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    ProductListApiComponent,
    ProductDetailsApiComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
