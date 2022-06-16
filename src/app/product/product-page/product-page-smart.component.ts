import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from "../services/product.service";
import {Product} from "../../model/product";
import {select, Store} from "@ngrx/store";
import {ProductsPageState} from "../state-management/products-page.reducer";
import {currentProductSelector, productReviewsSelector} from "../state-management/products-page.selectors";
import {
  AddProductReviewRequestAction,
  GetProductByIdRequestAction,
  GetProductReviewsRequestAction,
  SetCurrentProductAction
} from "../state-management/products-page.actions";
import {Review} from "../../model/review";
import {AddProductReviewRequestDto} from "../../model/dto/add-product-review.request.dto";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-page',
  template: `
    <app-product-page-presentation
      [product]="(product$ | async)!"
      [reviews]="(reviews$ | async)!"
      (addProductReview)="addProductReview($event)"
    >
    </app-product-page-presentation>
  `
})
export class ProductPageSmartComponent implements OnInit, OnDestroy {
  productId: number
  product$: Observable<Product | null>
  reviews$: Observable<Review[]>

  constructor(
    private productService: ProductService,
    private store: Store<ProductsPageState>,
    route: ActivatedRoute,
  ) {
    this.productId = Number(route.snapshot.paramMap.get('id'))
    this.product$ = this.store.pipe(select(currentProductSelector))
    this.reviews$ = this.store.pipe(select(productReviewsSelector))
  }

  ngOnInit(): void {
    if (this.productId) {
      this.store.dispatch(new GetProductByIdRequestAction({id: this.productId}))
      this.store.dispatch(new GetProductReviewsRequestAction({id: this.productId}))
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(new SetCurrentProductAction({product: null}))
  }

  addProductReview(addProductReviewDto: AddProductReviewRequestDto) {
    this.store.dispatch(new AddProductReviewRequestAction({
      id: this.productId,
      addProductReviewDto
    }))
  }
}
