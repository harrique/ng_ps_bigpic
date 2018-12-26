import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule
  ]
})
export class ProductModule { }
