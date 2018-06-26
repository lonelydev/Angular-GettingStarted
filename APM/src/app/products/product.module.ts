import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from '../services/product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
      canActivate: [ ProductGuardService ],
      component: ProductDetailComponent }
    ]),
    SharedModule,
  ],
  providers: [ ProductService, ProductGuardService ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
})
export class ProductModule { }
