import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {productsPageKey, productsPageReducer} from "./state-management/products-page.reducer";
import { ProductRoutingModule } from './product-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {ProductsPageEffects} from "./state-management/products-page.effects";
import {ProductsPagePresentationComponent} from "./products-page/products-page-presentation.component";
import {ProductService} from "./services/product.service";
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { AddReviewFormComponent } from './components/add-review-form/add-review-form.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { ProductPageSmartComponent } from './product-page/product-page-smart.component';
import { ProductPagePresentationComponent } from './product-page/product-page-presentation.component';
import {ProductsPageSmartComponent} from "./products-page/products-page-smart.component";
import {CommonAppModule} from "../common-app/common-app.module";


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
    CommonAppModule,
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
    MatProgressSpinnerModule,
  ]
})
export class ProductModule { }
