import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageSmartComponent } from './product-page/product-page-smart.component';
import { ProductsPageSmartComponent } from './products-page/products-page-smart.component';

const routes: Routes = [
  {path: 'products', component: ProductsPageSmartComponent},
  {path: 'product/:id', component: ProductPageSmartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
