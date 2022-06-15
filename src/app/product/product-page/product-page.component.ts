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
import {environment} from "../../../environments/environment";
import {Review} from "../../model/review";
import {AddProductReviewRequestDto} from "../../model/dto/add-product-review.request.dto";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  id: number
  product: Product | null | undefined
  reviews: Review[] = []
  // product$: Observable<Product | null>

  get productImg(): string {
    return environment.staticUrl + this.product?.img
  }

  constructor(
    private productService: ProductService,
    private store: Store<ProductsPageState>,
    route: ActivatedRoute,
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'))
    this.store.pipe(select(currentProductSelector)).subscribe(product =>
      this.product = product
    )
    this.store.pipe(select(productReviewsSelector)).subscribe(reviews =>
      this.reviews = reviews
    )
  }

  ngOnInit(): void {
    if (this.id) {
      this.store.dispatch(new GetProductByIdRequestAction({id: this.id}))
      this.store.dispatch(new GetProductReviewsRequestAction({id: this.id}))
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(new SetCurrentProductAction({product: null}))
  }

  addProductReview(addProductReviewDto: AddProductReviewRequestDto) {
    this.store.dispatch(new AddProductReviewRequestAction({
      id: this.id,
      addProductReviewDto
    }))
  }
}
