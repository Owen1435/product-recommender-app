import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";
import {environment} from "../../../environments/environment";
import {Review} from "../../model/review";
import {AddProductReviewRequestDto} from "../../model/dto/add-product-review.request.dto";

@Component({
  selector: 'app-product-page-presentation',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPagePresentationComponent implements OnInit {

  @Input()
  product: Product  | undefined
  @Input()
  reviews: Review[] = []

  @Output()
  addProductReview: EventEmitter<AddProductReviewRequestDto> = new EventEmitter<AddProductReviewRequestDto>();

  get productImg(): string {
    return environment.staticUrl + this.product?.img
  }

  constructor() {}

  ngOnInit(): void {
  }
}
