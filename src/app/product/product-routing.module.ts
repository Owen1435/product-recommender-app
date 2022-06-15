import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsPageComponent} from "./products-page/product-page.component";

const routes: Routes = [
  {path: 'products', component: ProductsPageComponent},
  // {path: 'product/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
