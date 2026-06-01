import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './features/product/pages/product-page/product-page.component';
import { ProductFormComponent } from './features/product/components/product-form/product-form.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { ProductCardComponent } from './features/product/components/product-card/product-card.component';

@NgModule({
declarations:[AppComponent,ProductPageComponent,ProductFormComponent,ProductListComponent,ProductCardComponent],
imports:[BrowserModule,AppRoutingModule,FormsModule],
bootstrap:[AppComponent]
})
export class AppModule {}
