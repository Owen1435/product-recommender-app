import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {first, Observable} from 'rxjs';

import {ProductService} from "../services/product.service";
import {Product} from "../../model/product";
import {ProductsPageState} from "../state-management/products-page.reducer";
import {Review} from "../../model/review";
import {AddProductReviewRequestDto} from "../../model/dto/add-product-review.request.dto";
import {AuthService} from "../../auth/services/auth.service";
import {currentProductSelector, productReviewsSelector} from "../state-management/products-page.selectors";
import {
  AddProductReviewRequestAction,
  GetProductByIdRequestAction,
  GetProductReviewsRequestAction,
  SetCurrentProductAction
} from "../state-management/products-page.actions";

@Component({
  selector: 'app-product-page',
  template: `
    <app-product-page-presentation
      [product]="(product$ | async)!"
      [reviews]="(reviews$ | async)!"
      (addProductReview)="addProductReview($event)"
    >
    </app-product-page-presentation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageSmartComponent implements OnInit, OnDestroy {
  productId: number
  product$: Observable<Product | null>
  reviews$: Observable<Review[]>

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private store: Store<ProductsPageState>,
    private snackBar: MatSnackBar,
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
    const payload = {
      id: this.productId,
      addProductReviewDto
    }

    this.authService.isAuth.pipe(first()).subscribe(isAuth => {
      isAuth
        ? this.store.dispatch(new AddProductReviewRequestAction(payload))
        : this.openSnackBar('You are not auth')
    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    });
  }
}
