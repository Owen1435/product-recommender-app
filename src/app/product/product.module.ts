import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductRoutingModule } from './product-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {productsPageKey, productsPageReducer} from "./state-management/products-page.reducer";
import {ProductsPageEffects} from "./state-management/products-page.effects";
import {ProductsPagePresentationComponent} from "./products-page/products-page-presentation.component";
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from "./services/product.service";
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { AddReviewFormComponent } from './components/add-review-form/add-review-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ReviewItemComponent } from './components/review-item/review-item.component';
import {MatCardModule} from "@angular/material/card";
import { ProductPageSmartComponent } from './product-page/product-page-smart.component';
import { ProductPagePresentationComponent } from './product-page/product-page-presentation.component';
import {ProductsPageSmartComponent} from "./products-page/products-page-smart.component";


@NgModule({
  declarations: [
    ProductsPageSmartComponent,
    ProductsPagePresentationComponent,
    ProductPageSmartComponent,
    ProductPagePresentationComponent,
    ProductItemComponent,
    ReviewsListComponent,
    AddReviewFormComponent,
    ReviewItemComponent
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(productsPageKey, productsPageReducer),
    EffectsModule.forFeature([ProductsPageEffects]),
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class ProductModule { }
