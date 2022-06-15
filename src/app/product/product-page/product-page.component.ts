import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from "../services/product.service";
import {Product} from "../../model/product";
import {select, Store} from "@ngrx/store";
import {ProductsPageState} from "../state-management/products-page.reducer";
import {currentProductSelector} from "../state-management/products-page.selectors";
import {GetProductByIdRequestAction} from "../state-management/products-page.actions";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  id: number
  product: Product | null | undefined
  // product$: Observable<Product | null>

  constructor(
    private productService: ProductService,
    private store: Store<ProductsPageState>,
    route: ActivatedRoute,
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'))
    this.store.pipe(select(currentProductSelector)).subscribe(product =>
      this.product = product
    )
  }

  ngOnInit(): void {
    if (this.id) {
      // this.productService.getProduct(this.id).subscribe(product => {
      //   console.log(product)
      //   this.product = product
      // })
      this.store.dispatch(new GetProductByIdRequestAction({id: this.id}))
    }
  }
}
