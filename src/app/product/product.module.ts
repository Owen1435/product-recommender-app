import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductRoutingModule } from './product-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {productsPageKey, productsPageReducer} from "./state-management/products-page.reducer";
import {ProductsPageEffects} from "./state-management/products-page.effects";
import {ProductPageSmartComponent} from "./products-page/product-page-smart.component";
import {ProductPagePresentationComponent} from "./products-page/product-page-presentation.component";
import { ProductPageComponent } from './product-page/product-page.component';


@NgModule({
  declarations: [
    ProductPageSmartComponent,
    ProductPagePresentationComponent,
    ProductItemComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(productsPageKey, productsPageReducer),
    EffectsModule.forFeature([ProductsPageEffects]),
    ProductRoutingModule,
  ]
})
export class ProductModule { }
