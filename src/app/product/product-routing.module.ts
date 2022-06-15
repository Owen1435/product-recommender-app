import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageSmartComponent} from "./products-page/product-page-smart.component";
import {ProductPageComponent} from "./product-page/product-page.component";

const routes: Routes = [
  {path: 'products', component: ProductPageSmartComponent},
  {path: 'product/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
