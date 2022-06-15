import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageSmartComponent} from "./products-page/product-page-smart.component";

const routes: Routes = [
  {path: 'products', component: ProductPageSmartComponent},
  // {path: 'product/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
